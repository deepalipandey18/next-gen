import React from 'react';
import { Sparkles } from 'lucide-react';
import Reveal from './Reveal';

const steps = [
  { num: '01', title: 'Discover', description: 'Deep-dive into business model, objectives, and tech feasibility.' },
  { num: '02', title: 'Architect', description: 'Define system architecture, tech stack, and milestone roadmaps.' },
  { num: '03', title: 'Design', description: 'Craft user personas, design systems, and wireframe prototypes.' },
  { num: '04', title: 'Engineer', description: 'Agile sprint development with daily testing and code reviews.' },
  { num: '05', title: 'Assure & QA', description: 'Rigorous automated tests, security scans, and load testing.' },
  { num: '06', title: 'Deploy', description: 'Zero-downtime cloud release with continuous monitoring.' },
  { num: '07', title: 'Iterate & Scale', description: 'Feature enhancements, conversion tuning, and scaling operations.' },
];

const ProcessSection: React.FC = () => (
  <section className="bg-white py-16 md:py-24" aria-labelledby="process-heading">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <Reveal className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-accent-dark">
          <Sparkles className="h-3.5 w-3.5 text-accent-dark" />
          <span>Our Proven Methodology</span>
        </div>
        <h2 id="process-heading" className="mt-3 font-display text-3xl font-extrabold tracking-tight text-brand-950 sm:text-4xl">
          How We Build What's Next
        </h2>
        <p className="mt-4 text-base md:text-lg text-slate-600">
          A disciplined, transparent, and iterative engineering process engineered to de-risk delivery and accelerate time-to-market.
        </p>
      </Reveal>

      {/* Desktop horizontal timeline */}
      <div className="relative mt-16 hidden lg:block">
        <div aria-hidden="true" className="absolute left-8 right-8 top-7 h-0.5 bg-gradient-to-r from-accent via-purple to-accent opacity-40" />
        <ol className="relative grid grid-cols-7 gap-4">
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.08}>
              <li className="group flex flex-col items-center text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-accent bg-white font-display text-sm font-extrabold text-accent-dark shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-tr group-hover:from-accent group-hover:to-purple group-hover:text-white group-hover:border-transparent group-hover:shadow-brand-glow">
                  {s.num}
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-brand-950 transition-colors group-hover:text-accent-dark">{s.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{s.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>

      {/* Mobile vertical timeline */}
      <ol className="relative mt-12 space-y-8 border-l-2 border-accent/40 pl-8 lg:hidden">
        {steps.map((s, i) => (
          <Reveal key={s.num} delay={i * 0.05}>
            <li className="relative group">
              <span className="absolute -left-[41px] flex h-10 w-10 items-center justify-center rounded-full border-2 border-accent bg-white font-display text-xs font-bold text-accent-dark shadow-sm group-hover:bg-gradient-to-tr group-hover:from-accent group-hover:to-purple group-hover:text-white group-hover:border-transparent">
                {s.num}
              </span>
              <h3 className="font-display text-lg font-bold text-brand-950">{s.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{s.description}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);

export default ProcessSection;