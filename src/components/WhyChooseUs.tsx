import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { Target, Cpu, TrendingUp, Eye, Handshake, Layers, Sparkles } from 'lucide-react';
import Reveal from './Reveal';

const reasons = [
  { icon: Target, num: '01', title: 'Business-Outcome Driven', description: 'We start with your business KPIs and build technology directly aligned to revenue, efficiency, and scale.' },
  { icon: Cpu, num: '02', title: 'Modern Architecture', description: 'Zero legacy debt. We use state-of-the-art cloud, reactive frameworks, and microservices engineered for speed.' },
  { icon: TrendingUp, num: '03', title: 'Built to Scale Seamlessly', description: 'Engineered from day one to smoothly handle millions of transactions, users, and high-concurrency loads.' },
  { icon: Eye, num: '04', title: 'Transparent Collaboration', description: 'Clear agile sprints, weekly interactive demos, shared metrics, and continuous communication.' },
  { icon: Handshake, num: '05', title: 'True Long-Term Partner', description: 'We don\u2019t just write code and leave. We guide your technology strategy and evolve with your company.' },
  { icon: Layers, num: '06', title: 'End-to-End Capabilities', description: 'From product strategy, UI/UX, and cloud engineering to CI/CD, security audits, and 24/7 monitoring.' },
];

const stats = [
  { value: 120, suffix: '+', label: 'Projects Successfully Launched' },
  { value: 45, suffix: '+', label: 'Senior Engineers & Architects' },
  { value: 15, suffix: '+', label: 'Industries Transformed' },
  { value: 99, suffix: '%', label: 'Client Satisfaction Rate' },
];

const Counter: React.FC<{ target: number; suffix: string }> = ({ target, suffix }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setCount(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);

  return (
    <span ref={ref} className="font-display text-4xl font-extrabold text-white md:text-5xl">
      {count}
      <span className="bg-gradient-to-r from-accent to-purple bg-clip-text text-transparent">{suffix}</span>
    </span>
  );
};

const WhyChooseUs: React.FC = () => (
  <section className="bg-slate-50 py-16 md:py-24" aria-labelledby="why-heading">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <Reveal className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-accent-dark">
          <Sparkles className="h-3.5 w-3.5 text-accent-dark" />
          <span>The NextGen Advantage</span>
        </div>
        <h2 id="why-heading" className="mt-3 font-display text-3xl font-extrabold tracking-tight text-brand-950 sm:text-4xl">
          Why Industry Leaders Choose NextGen IT Solution
        </h2>
        <p className="mt-4 text-base md:text-lg text-slate-600">
          We bring high-velocity engineering discipline, modern architectural standards, and dedicated business alignment to every engagement.
        </p>
      </Reveal>

      {/* Reasons Grid */}
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((r, i) => (
          <Reveal key={r.title} delay={(i % 3) * 0.08}>
            <article className="group h-full rounded-2xl border border-slate-200/90 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent hover:shadow-xl hover:shadow-accent/10">
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-accent-dark transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-tr group-hover:from-accent group-hover:to-purple group-hover:text-white group-hover:shadow-md">
                  <r.icon className="h-6 w-6" />
                </span>
                <span className="font-display text-2xl font-black text-slate-200 transition-colors duration-300 group-hover:text-accent/40">{r.num}</span>
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-brand-950 transition-colors group-hover:text-accent-dark">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{r.description}</p>
            </article>
          </Reveal>
        ))}
      </div>

      {/* Live Stats Strip */}
      <Reveal className="mt-16">
        <div className="relative overflow-hidden rounded-3xl bg-brand-950 p-8 shadow-2xl md:p-12 border border-white/10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-purple/20 blur-3xl"
          />
          <div className="relative grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center">
                <Counter target={s.value} suffix={s.suffix} />
                <span className="mt-2 text-xs md:text-sm font-medium text-slate-400">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default WhyChooseUs;