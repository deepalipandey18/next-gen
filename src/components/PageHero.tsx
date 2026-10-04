import React from 'react';
import { Sparkles } from 'lucide-react';
import Reveal from './Reveal';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
}

const PageHero: React.FC<PageHeroProps> = ({ eyebrow, title, description }) => (
  <section className="relative overflow-hidden bg-brand-950 pt-36 pb-16 md:pt-44 md:pb-20 border-b border-white/10">
    {/* Grid texture */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]"
    />
    
    {/* Dual brand ambient glows */}
    <div aria-hidden="true" className="pointer-events-none absolute -top-28 left-1/3 h-72 w-[32rem] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />
    <div aria-hidden="true" className="pointer-events-none absolute -top-20 right-1/4 h-72 w-[28rem] rounded-full bg-purple/20 blur-3xl" />

    <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
      <Reveal>
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-accent shadow-sm">
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          <span>{eyebrow}</span>
        </div>
        <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">{title}</h1>
        {description && <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300 leading-relaxed">{description}</p>}
      </Reveal>
    </div>
  </section>
);

export default PageHero;