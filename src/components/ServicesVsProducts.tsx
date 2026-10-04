import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Package, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

const ServicesVsProducts: React.FC = () => (
  <section className="bg-slate-50 py-16 md:py-24" aria-label="Services and Products">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-2">
        <Reveal>
          <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-brand-950 via-brand-900 to-[#0c1f3d] p-8 text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl md:p-10">
            <div aria-hidden="true" className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/20 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />
            <div aria-hidden="true" className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-purple/15 blur-3xl" />
            <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 text-accent ring-1 ring-accent/30">
              <Wrench className="h-7 w-7" />
            </span>
            <h2 className="font-display text-2xl font-bold md:text-3xl">Tailored Technology Services</h2>
            <p className="mt-3 text-slate-300 leading-relaxed">
              We design, build, and deploy custom software, web platforms, and mobile applications around your unique business requirements and growth milestones.
            </p>
            <Link
              to="/services"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent to-accent-dark px-6 py-3 text-sm font-semibold text-brand-950 shadow-md transition-all duration-200 hover:scale-105 hover:shadow-brand-glow"
            >
              Explore Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="group relative h-full overflow-hidden rounded-2xl border border-purple/20 bg-gradient-to-br from-white via-slate-50 to-purple/5 p-8 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-purple/40 hover:shadow-2xl md:p-10">
            <div aria-hidden="true" className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-purple/15 blur-3xl" />
            <div aria-hidden="true" className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-accent/15 blur-3xl" />
            <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-purple/10 text-purple-dark ring-1 ring-purple/20">
              <Package className="h-7 w-7" />
            </span>
            <h2 className="font-display text-2xl font-bold text-brand-950 md:text-3xl">Turnkey Digital Products</h2>
            <p className="mt-3 text-slate-600 leading-relaxed">
              We engineer scalable enterprise software products and SaaS suites designed to eliminate friction, automate workflows, and unlock new revenue streams.
            </p>
            <Link
              to="/products"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-950 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 hover:bg-gradient-to-r hover:from-purple hover:to-accent"
            >
              Explore Products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default ServicesVsProducts;