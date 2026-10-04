import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Globe,
  Smartphone,
  Code2,
  PenTool,
  BrainCircuit,
  Cloud,
  RefreshCcw,
  Compass,
  ShieldCheck,
  Workflow,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import Reveal from './Reveal';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
}

const services: Service[] = [
  { icon: Globe, title: 'Web Development', description: 'High-performance, responsive web applications engineered with modern frameworks and optimized conversion funnels.' },
  { icon: Smartphone, title: 'Mobile App Development', description: 'Cross-platform and native iOS & Android applications with seamless animations and intuitive UX.' },
  { icon: Code2, title: 'Custom Software Engineering', description: 'Tailored enterprise software and microservices built to solve specialized business challenges at scale.' },
  { icon: PenTool, title: 'UI/UX Design Systems', description: 'Human-centered digital product interfaces, design systems, and clickable interactive prototypes.' },
  { icon: BrainCircuit, title: 'AI & Machine Learning', description: 'Intelligent automation, predictive models, and generative AI integrations that create competitive advantages.' },
  { icon: Cloud, title: 'Cloud Infrastructure & DevOps', description: 'Resilient AWS, Azure, and Google Cloud architectures, Kubernetes clusters, and automated CI/CD pipelines.' },
  { icon: RefreshCcw, title: 'Digital Transformation', description: 'Modernizing legacy workflows and migrating monolithic architectures into modern cloud platforms.' },
  { icon: Compass, title: 'Technology Consulting', description: 'Strategic IT advisory, software architecture reviews, and roadmap planning aligned with business ROI.' },
  { icon: ShieldCheck, title: 'Cybersecurity & Compliance', description: 'Rigorous application security audits, penetration testing, zero-trust setups, and compliance assurance.' },
  { icon: Workflow, title: 'Automations & API Systems', description: 'High-throughput REST/GraphQL APIs, webhook pipelines, and third-party SaaS integrations.' },
];

const ServicesSection: React.FC<{ limit?: number; heading?: string; subheading?: string }> = ({
  limit,
  heading = 'Technology Services Built for Scale',
  subheading = 'From inception to deployment, we engineer modern technology solutions that turn ambitious visions into measurable market value.',
}) => {
  const items = limit ? services.slice(0, limit) : services;
  return (
    <section className="bg-white py-16 md:py-24" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-accent-dark">
            <Sparkles className="h-3.5 w-3.5 text-accent-dark" />
            <span>Comprehensive Capabilities</span>
          </div>
          <h2 id="services-heading" className="mt-3 font-display text-3xl font-extrabold tracking-tight text-brand-950 sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 text-lg text-slate-600">{subheading}</p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
              className="group relative flex flex-col rounded-2xl border border-slate-200/90 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent hover:shadow-xl hover:shadow-accent/10"
            >
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-accent-dark transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-tr group-hover:from-accent group-hover:to-purple group-hover:text-white group-hover:shadow-md">
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="font-display text-lg font-bold text-brand-950 transition-colors group-hover:text-accent-dark">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{s.description}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-dark opacity-0 transition-all duration-300 group-hover:opacity-100">
                Explore service <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </motion.article>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 rounded-lg bg-brand-950 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 hover:bg-gradient-to-r hover:from-accent hover:to-purple focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Explore All Services
            <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default ServicesSection;