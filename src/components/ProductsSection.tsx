import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, BarChart3, Zap, Check, ArrowRight, Sparkles } from 'lucide-react';
import Reveal from './Reveal';

interface Product {
  icon: React.ElementType;
  number: string;
  name: string;
  description: string;
  features: string[];
}

const products: Product[] = [
  { icon: Briefcase, number: '01', name: 'NextGen Business Suite', description: 'An all-in-one unified ERP and operations platform tailored for modern scaling enterprises.', features: ['Workflow & operations management', 'Real-time multi-branch reporting', 'Granular role-based security'] },
  { icon: Users, number: '02', name: 'NextGen CRM', description: 'Intelligent customer relationship management with automated sales funnels and communication pipelines.', features: ['Visual deal & lead pipelines', '360° customer interactions history', 'Predictive conversion insights'] },
  { icon: BarChart3, number: '03', name: 'NextGen Analytics Engine', description: 'Transform massive operational data into crisp, actionable business intelligence dashboards.', features: ['Real-time streaming telemetry', 'Custom drag-and-drop dashboards', 'Automated executive exports'] },
  { icon: Zap, number: '04', name: 'NextGen Automation Hub', description: 'Eliminate repetitive manual tasks with event-driven triggers, robotic automation, and AI workflows.', features: ['Visual low-code workflow builder', '200+ native SaaS integrations', 'Smart cron & event orchestration'] },
];

const ProductsSection: React.FC = () => (
  <section className="bg-white py-16 md:py-24" aria-labelledby="products-heading">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <Reveal className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-purple/30 bg-purple/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-purple-dark">
          <Sparkles className="h-3.5 w-3.5 text-purple-dark" />
          <span>Product Innovation</span>
        </div>
        <h2 id="products-heading" className="mt-3 font-display text-3xl font-extrabold tracking-tight text-brand-950 sm:text-4xl">
          NextGen Proprietary Products
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Turnkey technology products meticulously engineered to optimize workflows, elevate productivity, and create scalable new opportunities.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {products.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: (i % 2) * 0.1 }}
            className="group flex flex-col rounded-2xl border border-slate-200/90 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent hover:shadow-xl hover:shadow-accent/10"
          >
            <div className="flex items-start justify-between">
              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-950 text-accent transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-tr group-hover:from-accent group-hover:to-purple group-hover:text-white group-hover:shadow-md">
                <p.icon className="h-7 w-7" />
              </span>
              <span className="font-display text-4xl font-extrabold text-slate-200 transition-colors duration-300 group-hover:text-accent/40">
                {p.number}
              </span>
            </div>
            <h3 className="mt-6 font-display text-xl font-bold text-brand-950 transition-colors group-hover:text-accent-dark">{p.name}</h3>
            <p className="mt-2 text-slate-600 leading-relaxed">{p.description}</p>
            <ul className="mt-6 flex-1 space-y-2.5">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm text-slate-700">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/15 text-accent-dark">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-lg border border-brand-950/20 bg-slate-50 px-5 py-2.5 text-sm font-semibold text-brand-950 transition-all duration-200 hover:gap-3 hover:border-accent hover:bg-gradient-to-r hover:from-accent/10 hover:to-purple/10 hover:text-accent-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Explore Product <ArrowRight className="h-4 w-4" />
            </button>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;