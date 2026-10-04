import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Reveal from './Reveal';

const articles = [
  {
    category: 'Artificial Intelligence',
    title: 'How Generative AI & Autonomous Agents Are Transforming Enterprises',
    excerpt: 'A practical, non-hype analysis of how intelligent LLM systems and autonomous tool execution reduce cycle times.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=700&q=80',
    alt: 'Abstract visualization of artificial intelligence networks',
    readTime: '5 min read',
  },
  {
    category: 'Architecture & Scale',
    title: 'Why Every Scaling Business Needs an Event-Driven Architecture',
    excerpt: 'Microservices and message buses are crucial for modern applications. Here is how to architect decoupling for rapid scaling.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&q=80',
    alt: 'Business strategy planning session with analytical charts',
    readTime: '6 min read',
  },
  {
    category: 'Cloud Engineering',
    title: 'Cloud Cost Optimization: Pragmatic AWS & Azure Strategies',
    excerpt: 'Serverless compute, spot instances, and edge CDNs: an actionable playbook for cutting 40% off your cloud bills.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=700&q=80',
    alt: 'High-tech cloud data center server infrastructure',
    readTime: '4 min read',
  },
  {
    category: 'Product Engineering',
    title: 'Building Enterprise Software That Users Actually Love Using',
    excerpt: 'How uniting design systems with fast reactive frontend architectures accelerates user adoption.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=700&q=80',
    alt: 'Software engineer writing clean code on dual monitors',
    readTime: '5 min read',
  },
];

const InsightsSection: React.FC = () => (
  <section className="bg-white py-16 md:py-24" aria-labelledby="insights-heading">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <Reveal className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-accent-dark">
          <Sparkles className="h-3.5 w-3.5 text-accent-dark" />
          <span>Thought Leadership</span>
        </div>
        <h2 id="insights-heading" className="mt-3 font-display text-3xl font-extrabold tracking-tight text-brand-950 sm:text-4xl">
          Insights & Industry Perspectives
        </h2>
        <p className="mt-4 text-base md:text-lg text-slate-600">
          In-depth articles, engineering teardowns, and technology insights from the NextGen IT Solution team.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {articles.map((a, i) => (
          <motion.article
            key={a.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: (i % 4) * 0.08 }}
            className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-accent hover:shadow-xl hover:shadow-accent/10"
          >
            <figure className="relative overflow-hidden aspect-[16/10]">
              <img
                src={a.image}
                alt={a.alt}
                width={700}
                height={438}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 rounded-md bg-brand-950/80 px-2.5 py-1 text-[11px] font-semibold text-accent backdrop-blur-md">
                {a.category}
              </div>
            </figure>
            <div className="p-6 flex flex-1 flex-col justify-between">
              <div>
                <p className="text-xs text-slate-400">{a.readTime}</p>
                <h3 className="mt-2 font-display text-base font-bold text-brand-950 leading-snug transition-colors group-hover:text-accent-dark">
                  {a.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 line-clamp-3">
                  {a.excerpt}
                </p>
              </div>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-accent-dark transition-all duration-200 group-hover:gap-2">
                Read Article <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default InsightsSection;