/**
 * NextGen IT Solution - Exact Logo Asset & Background Removal Engine
 * 
 * Takes the user's uploaded logo image (/logo.png), detects if a checkerboard
 * background is present, and removes it cleanly using edge-connected BFS flood-fill.
 * Also generates a dark-mode variant where the navy text is converted to crisp white
 * for seamless contrast on dark navbars and footers.
 */

interface ProcessedLogo {
  originalUrl: string;
  transparentUrl: string;
  whiteTextUrl: string;
  markOnlyUrl: string;
}

let cachedLogo: ProcessedLogo | null = null;
const listeners: Array<(logo: ProcessedLogo) => void> = [];

export function getCachedLogo(): ProcessedLogo | null {
  return cachedLogo;
}

export function subscribeLogo(callback: (logo: ProcessedLogo) => void): () => void {
  if (cachedLogo) {
    callback(cachedLogo);
  }
  listeners.push(callback);
  return () => {
    const idx = listeners.indexOf(callback);
    if (idx !== -1) listeners.splice(idx, 1);
  };
}

export function processLogoImage(src: string = '/logo.png'): Promise<ProcessedLogo> {
  if (cachedLogo) {
    return Promise.resolve(cachedLogo);
  }

  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';

    img.onload = () => {
      try {
        const width = img.naturalWidth || img.width;
        const height = img.naturalHeight || img.height;

        if (width === 0 || height === 0) {
          throw new Error('Zero dimensions for logo image');
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d', { willReadFrequently: true });

        if (!ctx) {
          throw new Error('Canvas 2D context not available');
        }

        ctx.drawImage(img, 0, 0);
        const imgData = ctx.getImageData(0, 0, width, height);
        const data = imgData.data;

        // Check if top-left corner has alpha or if it's checkerboard
        // Helper to check if pixel is neutral grey/white (checkerboard pattern)
        const isCheckerboardPixel = (idx: number): boolean => {
          const r = data[idx];
          const g = data[idx + 1];
          const b = data[idx + 2];
          const a = data[idx + 3];

          if (a === 0) return true; // Already transparent

          // Checkerboard squares are light grey (~190-220) and white (~240-255)
          // Neutral grey/white means r, g, b are almost identical and bright
          const minC = Math.min(r, g, b);
          const maxC = Math.max(r, g, b);
          const diff = maxC - minC;

          return minC >= 165 && diff <= 15;
        };

        // Edge-connected flood fill (BFS) to remove ONLY the outer checkerboard background
        // This preserves any white or light specular highlights inside the logo emblem
        const visited = new Uint8Array(width * height);
        const queue: number[] = [];

        const pushIfValid = (x: number, y: number) => {
          if (x < 0 || x >= width || y < 0 || y >= height) return;
          const pIndex = y * width + x;
          if (visited[pIndex]) return;

          const dIndex = pIndex * 4;
          if (isCheckerboardPixel(dIndex)) {
            visited[pIndex] = 1;
            queue.push(x, y);
          }
        };

        // Seed with all 4 borders of the image
        for (let x = 0; x < width; x++) {
          pushIfValid(x, 0);
          pushIfValid(x, height - 1);
        }
        for (let y = 0; y < height; y++) {
          pushIfValid(0, y);
          pushIfValid(width - 1, y);
        }

        // BFS flood fill
        let head = 0;
        while (head < queue.length) {
          const x = queue[head++];
          const y = queue[head++];

          // Check 4 neighbours
          pushIfValid(x + 1, y);
          pushIfValid(x - 1, y);
          pushIfValid(x, y + 1);
          pushIfValid(x, y - 1);
        }

        // 1. Create transparent version
        // Apply visited mask to set alpha to 0
        for (let i = 0; i < visited.length; i++) {
          if (visited[i]) {
            data[i * 4 + 3] = 0; // Alpha 0
          }
        }

        ctx.putImageData(imgData, 0, 0);
        const transparentUrl = canvas.toDataURL('image/png');

        // 2. Create white-text version for dark backgrounds (navbar, footer)
        // Convert dark navy letters to crisp white while keeping the colorful N emblem vibrant
        const darkCanvas = document.createElement('canvas');
        darkCanvas.width = width;
        darkCanvas.height = height;
        const darkCtx = darkCanvas.getContext('2d', { willReadFrequently: true });

        if (darkCtx) {
          // Copy image data
          const darkImgData = ctx.getImageData(0, 0, width, height);
          const darkData = darkImgData.data;

          for (let i = 0; i < darkData.length; i += 4) {
            const a = darkData[i + 3];
            if (a === 0) continue;

            const r = darkData[i];
            const g = darkData[i + 1];
            const b = darkData[i + 2];

            // Dark navy text in "NextGen IT SOLUTION":
            // Low brightness: r < 75, g < 95, b < 135
            // And Tagline text: r < 95, g < 115, b < 145
            const maxC = Math.max(r, g, b);
            const isDarkNavy = maxC < 140 && (r < 80 || g < 100);

            if (isDarkNavy) {
              // Convert to crisp white text with anti-aliasing preserved
              const intensity = (r + g + b) / 3;
              const alphaFactor = a / 255;
              // Make text crisp white (#FFFFFF) or light silver
              darkData[i] = 255;
              darkData[i + 1] = 255;
              darkData[i + 2] = 255;
              // Preserve anti-aliased edges
              darkData[i + 3] = Math.min(255, Math.round((1 - intensity / 140) * 255 * alphaFactor + 160));
            }
          }

          darkCtx.putImageData(darkImgData, 0, 0);
        }

        const whiteTextUrl = darkCanvas.toDataURL('image/png');

        // 3. Create mark-only (N emblem) cropped version
        // Crop the top ~60% of the image which contains the iconic 3D 'N' emblem
        const markCanvas = document.createElement('canvas');
        const markHeight = Math.round(height * 0.58);
        markCanvas.width = width;
        markCanvas.height = markHeight;
        const markCtx = markCanvas.getContext('2d');
        if (markCtx) {
          markCtx.drawImage(canvas, 0, 0, width, markHeight, 0, 0, width, markHeight);
        }
        const markOnlyUrl = markCanvas.toDataURL('image/png');

        const result: ProcessedLogo = {
          originalUrl: src,
          transparentUrl,
          whiteTextUrl,
          markOnlyUrl,
        };

        cachedLogo = result;
        listeners.forEach((cb) => cb(result));
        resolve(result);
      } catch (err) {
        console.warn('Canvas logo processing fallback to original:', err);
        const fallback: ProcessedLogo = {
          originalUrl: src,
          transparentUrl: src,
          whiteTextUrl: src,
          markOnlyUrl: src,
        };
        cachedLogo = fallback;
        resolve(fallback);
      }
    };

    img.onerror = () => {
      const fallback: ProcessedLogo = {
        originalUrl: src,
        transparentUrl: src,
        whiteTextUrl: src,
        markOnlyUrl: src,
      };
      cachedLogo = fallback;
      resolve(fallback);
    };

    img.src = src;
  });
}
