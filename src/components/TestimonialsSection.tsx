import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import Reveal from './Reveal';

const testimonials = [
  {
    quote: 'NextGen IT Solution engineered our cloud enterprise platform from the ground up and delivered two weeks ahead of schedule. Their architectural clarity and dedication to performance were outstanding.',
    name: 'Sarah Mitchell',
    designation: 'VP of Technology',
    company: 'Brightline Enterprise Retail',
  },
  {
    quote: 'A true strategic engineering ally. They modernized our 10-year-old monolithic logistics platform without a single minute of downtime or disruption to our national operations.',
    name: 'David Chen',
    designation: 'Chief Technology Officer',
    company: 'Meridian Global Logistics',
  },
  {
    quote: 'The caliber of engineering, UI/UX polish, and communication was exceptional throughout our journey. They helped us scale from an early-stage MVP to over 500,000 active monthly users.',
    name: 'Priya Sharma',
    designation: 'Co-Founder & CEO',
    company: 'CarePoint Health Tech',
  },
];

const TestimonialsSection: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const go = (d: number) => {
    setDir(d);
    setIndex((i) => (i + d + testimonials.length) % testimonials.length);
  };
  const t = testimonials[index];

  return (
    <section className="relative overflow-hidden bg-brand-950 py-16 md:py-24 border-t border-b border-white/10" aria-labelledby="testimonials-heading">
      {/* Dual ambient brand glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/4 h-80 w-80 rounded-full bg-accent/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 right-1/4 h-80 w-80 rounded-full bg-purple/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        <Reveal className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-accent">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            <span>Client Testimonials</span>
          </div>
          <h2 id="testimonials-heading" className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Trusted by Visionary Leaders
          </h2>
          <p className="mt-4 text-base text-slate-400">
            Hear from founders, CTOs, and product leaders who have partnered with NextGen IT Solution.
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md shadow-2xl md:p-12">
            <div className="flex items-center justify-between">
              <Quote className="h-10 w-10 text-accent/60" aria-hidden="true" />
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDir(i > index ? 1 : -1);
                      setIndex(i);
                    }}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      i === index ? 'w-8 bg-gradient-to-r from-accent to-purple' : 'w-2.5 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="relative mt-6 min-h-[140px] md:min-h-[110px]">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.blockquote
                  key={index}
                  initial={{ opacity: 0, x: dir * 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: dir * -30 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-lg leading-relaxed text-slate-200 md:text-xl font-medium">"{t.quote}"</p>
                  <footer className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                    <div>
                      <p className="font-display font-bold text-white text-base">{t.name}</p>
                      <p className="text-sm text-accent">
                        {t.designation} <span className="text-slate-500">·</span> <span className="text-slate-300">{t.company}</span>
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => go(-1)}
                        aria-label="Previous testimonial"
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all hover:border-accent hover:bg-gradient-to-tr hover:from-accent hover:to-purple hover:text-white"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => go(1)}
                        aria-label="Next testimonial"
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all hover:border-accent hover:bg-gradient-to-tr hover:from-accent hover:to-purple hover:text-white"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </div>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default TestimonialsSection;