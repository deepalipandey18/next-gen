import React from 'react';
import { motion } from 'framer-motion';
import {
  HeartPulse,
  GraduationCap,
  Landmark,
  ShoppingCart,
  Factory,
  Building2,
  Truck,
  Store,
  Rocket,
  Scale,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import Reveal from './Reveal';

const industries = [
  { icon: HeartPulse, name: 'Healthcare & MedTech', description: 'HIPAA-compliant platforms that streamline clinical workflows and patient care.' },
  { icon: GraduationCap, name: 'EdTech & Learning', description: 'Adaptive learning environments and enterprise academic management portals.' },
  { icon: Landmark, name: 'FinTech & Banking', description: 'High-security transaction systems, crypto rails, and automated compliance engines.' },
  { icon: ShoppingCart, name: 'E-commerce & D2C', description: 'Headless storefronts, global payment checkouts, and automated fulfillment pipelines.' },
  { icon: Factory, name: 'Smart Manufacturing', description: 'IoT sensor telemetry, predictive maintenance, and shop-floor automation.' },
  { icon: Building2, name: 'PropTech & Real Estate', description: 'Interactive property portals, digital lease flows, and CRM management.' },
  { icon: Truck, name: 'Supply Chain & Logistics', description: 'Real-time GPS fleet tracking, dispatch optimization, and inventory visibility.' },
  { icon: Store, name: 'Omnichannel Retail', description: 'Connected POS solutions bridging in-store visits with online customer loyalty.' },
  { icon: Rocket, name: 'High-Growth Startups', description: 'Rapid agile prototyping, scalable MVPs, and investor-ready architecture.' },
  { icon: Scale, name: 'Professional Services', description: 'Automated client billing, contract management, and secured document vaults.' },
];

const IndustriesSection: React.FC = () => (
  <section className="relative overflow-hidden bg-brand-950 py-16 md:py-24 border-t border-b border-white/10" aria-labelledby="industries-heading">
    {/* Subtle glow accents */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -top-40 -left-40 h-80 w-80 rounded-full bg-accent/10 blur-3xl"
    />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-purple/15 blur-3xl"
    />

    <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
      <Reveal className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-accent">
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          <span>Industry Solutions</span>
        </div>
        <h2 id="industries-heading" className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Domain Expertise Across Every Industry
        </h2>
        <p className="mt-4 text-base md:text-lg text-slate-400">
          We combine cutting-edge technology stacks with deep industry insights to architect tailored digital solutions that deliver tangible ROI.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-5">
        {industries.map((ind, i) => (
          <motion.div
            key={ind.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: (i % 5) * 0.07 }}
            className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-accent hover:bg-white/10 hover:shadow-brand-glow md:p-6"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent transition-all duration-300 group-hover:bg-gradient-to-tr group-hover:from-accent group-hover:to-purple group-hover:text-white group-hover:shadow-md">
              <ind.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-display text-base font-bold text-white transition-colors group-hover:text-accent">{ind.name}</h3>
            <p className="mt-1.5 hidden text-xs leading-relaxed text-slate-400 md:block">{ind.description}</p>
            <span className="mt-3 hidden items-center gap-1 text-xs font-semibold text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:inline-flex">
              Explore solutions <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesSection;