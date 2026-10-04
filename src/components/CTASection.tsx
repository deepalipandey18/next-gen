import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import Reveal from './Reveal';

const CTASection: React.FC = () => (
  <section className="relative overflow-hidden bg-brand-950 py-18 md:py-24 border-t border-b border-white/10" aria-labelledby="cta-heading">
    {/* Tech grid texture */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_70%_at_50%_50%,black,transparent)]"
    />
    
    {/* Dual ambient brand glows */}
    <div aria-hidden="true" className="pointer-events-none absolute -bottom-36 left-1/4 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
    <div aria-hidden="true" className="pointer-events-none absolute -top-36 right-1/4 h-80 w-80 rounded-full bg-purple/20 blur-3xl" />

    <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
      <Reveal>
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Building Technology. Creating Possibilities.</span>
        </div>
        <h2 id="cta-heading" className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
          Have an Idea? Let's Build What's Next Together.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
          Whether you're starting a breakthrough digital product, modernizing legacy enterprise systems, or seeking an ongoing technology partner, NextGen IT Solution is here to turn your vision into reality.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/contact"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-accent via-accent-dark to-purple px-7 py-3.5 text-base font-semibold text-white shadow-brand-glow transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start a Project
              <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:border-accent hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
          >
            <MessageSquare className="h-5 w-5 text-accent" /> Talk to Our Team
          </Link>
        </div>
      </Reveal>
    </div>
  </section>
);

export default CTASection;