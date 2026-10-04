import React from 'react';
import { MonitorSmartphone, Server, Database, Cloud, BrainCircuit, GitBranch, Sparkles } from 'lucide-react';
import Reveal from './Reveal';

const categories = [
  { icon: MonitorSmartphone, name: 'Frontend Engineering', items: ['React 19', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'Framer Motion'] },
  { icon: Server, name: 'Backend & APIs', items: ['Node.js', 'Python', 'FastAPI', 'Go', '.NET Core', 'GraphQL', 'REST'] },
  { icon: Database, name: 'Databases & Cache', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase', 'Elasticsearch', 'DynamoDB'] },
  { icon: Cloud, name: 'Cloud & Infrastructure', items: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Cloudflare', 'Kubernetes'] },
  { icon: BrainCircuit, name: 'AI & Intelligence', items: ['Large Language Models', 'OpenAI APIs', 'LangChain', 'TensorFlow', 'Vector DBs'] },
  { icon: GitBranch, name: 'DevOps & Tooling', items: ['Docker', 'GitHub Actions', 'Terraform', 'CI/CD Pipelines', 'Prometheus'] },
];

const TechnologiesSection: React.FC = () => (
  <section className="bg-slate-50 py-16 md:py-24" aria-labelledby="tech-heading">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <Reveal className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-accent-dark">
          <Sparkles className="h-3.5 w-3.5 text-accent-dark" />
          <span>Technology Ecosystem</span>
        </div>
        <h2 id="tech-heading" className="mt-3 font-display text-3xl font-extrabold tracking-tight text-brand-950 sm:text-4xl">
          Powered by Modern Enterprise Stacks
        </h2>
        <p className="mt-4 text-base md:text-lg text-slate-600">
          We leverage proven, bleeding-edge frameworks and reliable infrastructure to ensure ultra-fast performance, rock-solid security, and future-proof extensibility.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((c, i) => (
          <Reveal key={c.name} delay={(i % 3) * 0.08}>
            <div className="group h-full rounded-2xl border border-slate-200/90 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent hover:shadow-xl hover:shadow-accent/10">
              <div className="flex items-center gap-3.5">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-950 text-accent transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-tr group-hover:from-accent group-hover:to-purple group-hover:text-white group-hover:shadow-md">
                  <c.icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-bold text-brand-950 transition-colors group-hover:text-accent-dark">{c.name}</h3>
              </div>
              <ul className="mt-6 flex flex-wrap gap-2">
                {c.items.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-medium text-slate-700 transition-all duration-200 hover:border-accent hover:bg-gradient-to-r hover:from-accent/15 hover:to-purple/15 hover:text-accent-dark"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default TechnologiesSection;