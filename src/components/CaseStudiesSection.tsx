import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Reveal from './Reveal';

interface CaseStudy {
  num: string;
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
  tech: string[];
  image: string;
  alt: string;
}

const caseStudies: CaseStudy[] = [
  {
    num: '01',
    title: 'Enterprise Multi-Branch Operations Suite',
    industry: 'Logistics & Supply Chain',
    challenge: 'Fragmented manual record-keeping across 42 distribution hubs resulting in shipping delays.',
    solution: 'Designed and deployed a unified real-time dashboard with automated dispatch routing.',
    result: '48% reduction in dispatch turnaround time and $1.2M in annual operational savings.',
    tech: ['React 19', 'Node.js', 'PostgreSQL', 'AWS', 'Redis'],
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
    alt: 'Team collaborating on a business software platform',
  },
  {
    num: '02',
    title: 'High-Volume Global Headless Commerce',
    industry: 'Retail & E-commerce',
    challenge: 'Slow legacy monolith site unable to handle Black Friday traffic spikes.',
    solution: 'Re-architected to a modern headless Next.js frontend with distributed edge caching.',
    result: 'Sub-second page loads globally, 34% surge in checkout conversion rate.',
    tech: ['Next.js', 'TypeScript', 'Stripe', 'Redis', 'Cloudflare'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    alt: 'Online shopping experience on multiple devices',
  },
  {
    num: '03',
    title: 'HIPAA-Compliant Telehealth & EHR Platform',
    industry: 'Healthcare & Life Sciences',
    challenge: 'Inefficient paper-based patient intakes and disjointed clinical records.',
    solution: 'Engineered a secure, end-to-end encrypted clinical portal with real-time video consults.',
    result: 'Eliminated 80% of patient check-in wait times while maintaining 100% HIPAA compliance.',
    tech: ['React', 'FastAPI', 'PostgreSQL', 'WebRTC', 'AWS GovCloud'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    alt: 'Healthcare professional using a digital medical platform',
  },
  {
    num: '04',
    title: 'AI-Powered Intelligent Document Automation',
    industry: 'FinTech & Insurance',
    challenge: 'Hours wasted manually transcribing, validating, and approving financial claims.',
    solution: 'Built an LLM-assisted document pipeline that automatically extracts and audits claim records.',
    result: 'Automated 72% of claim evaluations within seconds with 99.4% precision.',
    tech: ['Python', 'OpenAI APIs', 'Vector Embeddings', 'Docker', 'GCP'],
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80',
    alt: 'AI automation representing intelligent document processing',
  },
];

const CaseStudiesSection: React.FC = () => (
  <section className="bg-white py-16 md:py-24" aria-labelledby="cases-heading">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <Reveal className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-accent-dark">
          <Sparkles className="h-3.5 w-3.5 text-accent-dark" />
          <span>Real World Impact</span>
        </div>
        <h2 id="cases-heading" className="mt-3 font-display text-3xl font-extrabold tracking-tight text-brand-950 sm:text-4xl">
          Client Success Stories & Case Studies
        </h2>
        <p className="mt-4 text-base md:text-lg text-slate-600">
          Discover how NextGen IT Solution partners with companies to solve high-stakes challenges and deliver measurable business outcomes.
        </p>
      </Reveal>

      <div className="mt-14 space-y-10">
        {caseStudies.map((cs, i) => (
          <motion.article
            key={cs.num}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className={`grid overflow-hidden rounded-2xl border border-slate-200/90 bg-white transition-all duration-300 hover:border-accent/50 hover:shadow-xl hover:shadow-brand-950/10 lg:grid-cols-2 ${
              i % 2 === 1 ? 'lg:[&>figure]:order-2' : ''
            }`}
          >
            <figure className="group relative overflow-hidden min-h-[280px]">
              <img
                src={cs.image}
                alt={cs.alt}
                width={800}
                height={533}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 rounded-lg bg-brand-950/80 px-3 py-1 text-xs font-semibold text-accent backdrop-blur-md">
                Case Study {cs.num}
              </div>
            </figure>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <span className="text-xs font-bold uppercase tracking-widest text-accent-dark">Industry: {cs.industry}</span>
              <h3 className="mt-2 font-display text-2xl font-bold text-brand-950">{cs.title}</h3>
              
              <dl className="mt-6 space-y-3 text-sm">
                <div className="border-l-2 border-slate-200 pl-3">
                  <dt className="font-semibold text-brand-950">Challenge</dt>
                  <dd className="text-slate-600">{cs.challenge}</dd>
                </div>
                <div className="border-l-2 border-accent pl-3">
                  <dt className="font-semibold text-brand-950">Solution</dt>
                  <dd className="text-slate-600">{cs.solution}</dd>
                </div>
                <div className="border-l-2 border-purple pl-3">
                  <dt className="font-semibold text-brand-950">Measurable Result</dt>
                  <dd className="font-medium text-slate-800">{cs.result}</dd>
                </div>
              </dl>

              <ul className="mt-6 flex flex-wrap gap-2">
                {cs.tech.map((t) => (
                  <li key={t} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                    {t}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className="group mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-accent-dark transition-all duration-200 hover:gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                Read Full Story <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudiesSection;