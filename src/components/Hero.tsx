import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  Globe,
  CloudCog,
  Package,
  Briefcase,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Cpu,
} from 'lucide-react';
import { LogoMark } from './Logo';

const trustItems = [
  { icon: Globe, label: 'Web & Software Engineering' },
  { icon: CloudCog, label: 'Cloud & AI Infrastructure' },
  { icon: Package, label: 'Enterprise Digital Products' },
  { icon: Briefcase, label: 'Next-Gen IT Consulting' },
];

const Hero: React.FC = () => {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden bg-brand-950 pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Subtle tech grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]"
      />

      {/* Dual ambient brand glows (Cyan + Purple) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-36 left-1/3 h-96 w-[36rem] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 right-1/4 h-96 w-[32rem] rounded-full bg-purple/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            {/* Tagline Badge */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-wide text-accent shadow-sm"
            >
              <Sparkles className="h-4 w-4 text-accent" />
              <span>Building Technology. Creating Possibilities.</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Build What's Next with{' '}
              <span className="bg-gradient-to-r from-accent via-[#38BDF8] to-purple bg-clip-text text-transparent">
                NextGen IT Solution
              </span>
            </motion.h1>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 font-display text-xl font-medium text-slate-200"
            >
              Innovative technology solutions transforming ideas into scalable, high-performance digital businesses.
            </motion.p>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
            >
              From custom software and cloud architecture to AI solutions and scalable web & mobile apps, we partner with visionary teams to build robust technology that accelerates growth.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
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
                to="/products"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:border-accent hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
              >
                Explore Our Solutions
              </Link>
            </motion.div>
          </div>

          {/* Futuristic Hero Visual featuring the NextGen Emblem & Orbiting Nodes */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mx-auto hidden aspect-square w-full max-w-lg md:block"
            aria-hidden="true"
          >
            {/* Concentric orbital rings */}
            <div className="absolute inset-0 rounded-full border border-accent/25 animate-pulse" />
            <div className="absolute inset-10 rounded-full border border-purple/20" />
            <div className="absolute inset-20 rounded-full border border-white/10" />

            {/* Glowing Center Core with NextGen 'N' LogoMark */}
            <div className="absolute inset-0 m-auto flex h-36 w-36 items-center justify-center rounded-3xl border border-white/20 bg-gradient-to-br from-brand-900/90 to-brand-950/90 p-4 shadow-2xl backdrop-blur-md ring-1 ring-accent/30 glow-brand">
              <LogoMark size={96} className="filter drop-shadow-[0_0_12px_rgba(0,210,255,0.6)]" />
            </div>

            {/* Orbiting Satellite badges with real icons */}
            {[
              { icon: CloudCog, pos: 'top-3 left-1/2 -translate-x-1/2', d: 0, label: 'Cloud' },
              { icon: Cpu, pos: 'top-1/4 right-3', d: 1.2, label: 'AI & ML' },
              { icon: TrendingUp, pos: 'bottom-8 right-1/4', d: 2.1, label: 'Scale' },
              { icon: Package, pos: 'bottom-1/4 left-3', d: 1.7, label: 'Products' },
              { icon: Globe, pos: 'top-1/3 left-2', d: 0.8, label: 'Web Apps' },
            ].map(({ icon: Icon, pos, d, label }) => (
              <motion.div
                key={pos}
                animate={reduce ? {} : { y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: d, ease: 'easeInOut' }}
                className={`absolute ${pos} flex items-center gap-2 rounded-xl border border-white/15 bg-brand-900/80 px-3.5 py-2 text-white shadow-xl shadow-black/50 backdrop-blur-md`}
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent/15 text-accent">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-xs font-semibold tracking-wide text-slate-200">{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Trust strip */}
        <div className="mt-16 grid grid-cols-2 gap-4 border-t border-white/10 pt-8 md:grid-cols-4 md:gap-8">
          {trustItems.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              className="flex items-center gap-3 text-slate-300 transition-colors hover:text-white"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Icon className="h-5 w-5 shrink-0" />
              </span>
              <span className="text-sm font-medium">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;