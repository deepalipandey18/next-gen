import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.tsx';
import { ArrowLeft, Sparkles } from 'lucide-react';

interface PlaceholderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

const Placeholder: React.FC<PlaceholderProps> = ({ eyebrow, title, description }) => (
  <>
    <PageHero eyebrow={eyebrow} title={title} description={description} />
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50/80 p-12 md:p-16 shadow-sm">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-purple/20 text-accent-dark mb-5 shadow-sm">
            <Sparkles className="h-7 w-7" />
          </div>
          <h2 className="font-display text-2xl font-bold text-brand-950">Content Expanding Soon</h2>
          <p className="mt-3 text-slate-600 max-w-md mx-auto leading-relaxed">
            Our team is actively curating comprehensive case studies, whitepapers, and product specifications for this section.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-950 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 hover:bg-gradient-to-r hover:from-accent hover:to-purple"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-all duration-200 hover:border-accent hover:text-accent-dark"
            >
              Inquire Directly
            </Link>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Placeholder;