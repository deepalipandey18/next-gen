import React, { useEffect, useState } from 'react';
import { processLogoImage, getCachedLogo, subscribeLogo } from '../utils/logoProcessor';

interface LogoProps {
  variant?: 'full' | 'compact' | 'icon';
  theme?: 'dark' | 'light' | 'auto';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  height?: number;
  showTagline?: boolean;
}

// LogoMark: renders the iconic 3D 'N' emblem from the user's exact uploaded logo
export const LogoMark: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 48,
}) => {
  const [logoState, setLogoState] = useState(() => getCachedLogo());

  useEffect(() => {
    const unsub = subscribeLogo(setLogoState);
    if (!getCachedLogo()) {
      processLogoImage('/logo.png');
    }
    return unsub;
  }, []);

  const src = logoState?.markOnlyUrl || logoState?.transparentUrl || '/logo.png';

  return (
    <div
      style={{ width: size, height: size }}
      className={`relative inline-flex items-center justify-center overflow-hidden shrink-0 ${className}`}
      aria-label="NextGen IT Solution Logo Mark"
    >
      <img
        src={src}
        alt="NextGen IT Solution Emblem"
        width={size}
        height={size}
        className="h-full w-full object-contain filter drop-shadow-[0_2px_8px_rgba(0,180,216,0.25)] transition-transform duration-300 hover:scale-105"
      />
    </div>
  );
};

const Logo: React.FC<LogoProps> = ({
  variant = 'compact',
  theme = 'auto',
  className = '',
  size = 'md',
  height,
}) => {
  const [logoState, setLogoState] = useState(() => getCachedLogo());

  useEffect(() => {
    const unsub = subscribeLogo(setLogoState);
    if (!getCachedLogo()) {
      processLogoImage('/logo.png');
    }
    return unsub;
  }, []);

  // Determine height based on size prop if explicit height is not provided
  const heightMap = {
    sm: 36,
    md: 46,
    lg: 58,
    xl: 72,
  };
  const targetHeight = height ?? heightMap[size];

  // Select optimal source based on variant & theme
  let imgSrc = '/logo.png';
  if (logoState) {
    if (variant === 'icon') {
      imgSrc = logoState.markOnlyUrl || logoState.transparentUrl;
    } else if (theme === 'dark') {
      imgSrc = logoState.whiteTextUrl || logoState.transparentUrl;
    } else {
      imgSrc = logoState.transparentUrl;
    }
  }

  if (variant === 'icon') {
    return <LogoMark size={targetHeight} className={className} />;
  }

  return (
    <div
      className={`inline-flex items-center select-none transition-transform duration-200 hover:scale-[1.02] ${className}`}
      aria-label="NextGen IT Solution"
    >
      <img
        src={imgSrc}
        alt="NextGen IT Solution"
        style={{ height: `${targetHeight}px`, width: 'auto' }}
        className="max-h-full w-auto object-contain transition-opacity duration-200"
        loading="eager"
      />
    </div>
  );
};

export default Logo;
