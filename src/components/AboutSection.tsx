import React from 'react';
import { Target, Eye, Lightbulb, ShieldCheck, HeartHandshake, Award, BookOpen, Sparkles } from 'lucide-react';
import Reveal from './Reveal';

const values = [
  { icon: Lightbulb, name: 'Innovation', desc: 'Pushing tech boundaries' },
  { icon: ShieldCheck, name: 'Integrity', desc: 'Trust & transparency' },
  { icon: HeartHandshake, name: 'Customer Success', desc: 'Your growth is our victory' },
  { icon: Award, name: 'Engineering Quality', desc: 'Crafted without compromises' },
  { icon: BookOpen, name: 'Continuous Growth', desc: 'Always learning & evolving' },
];

const AboutSection: React.FC = () => (
  <section className="bg-slate-50 py-16 md:py-24" aria-labelledby="about-heading">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <figure className="relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-200/50">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80"
              alt="NextGen IT Solution team collaborating in a modern office"
              width={900}
              height={600}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-transparent to-transparent flex items-end p-6">
              <div className="text-white">
                <p className="text-xs font-semibold tracking-wider uppercase text-accent">NextGen IT Solution</p>
                <p className="text-lg font-bold">Building Technology. Creating Possibilities.</p>
              </div>
            </div>
          </figure>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-accent-dark">
            <Sparkles className="h-3.5 w-3.5 text-accent-dark" />
            <span>About Us</span>
          </div>
          <h2 id="about-heading" className="mt-3 font-display text-3xl font-extrabold tracking-tight text-brand-950 sm:text-4xl">
            Engineering Digital Tomorrow, Today.
          </h2>
          <p className="mt-5 leading-relaxed text-slate-600">
            NextGen IT Solution is a high-impact technology partner focused on building bespoke digital solutions for forward-thinking businesses. Guided by our motto — <span className="font-semibold text-brand-900">“Building Technology. Creating Possibilities”</span> — we bring together deep engineering expertise, modern cloud architectures, and human-centered design to solve complex business challenges.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-accent hover:shadow-lg hover:shadow-accent/5">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent/15 to-purple/15 text-accent-dark transition-transform duration-300 group-hover:scale-110">
                <Target className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-brand-950">Our Mission</h3>
              <p className="mt-1.5 text-sm text-slate-600">
                To empower companies with resilient, cutting-edge software and digital platforms that accelerate long-term growth.
              </p>
            </div>
            <div className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-purple hover:shadow-lg hover:shadow-purple/5">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple/15 to-accent/15 text-purple-dark transition-transform duration-300 group-hover:scale-110">
                <Eye className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-brand-950">Our Vision</h3>
              <p className="mt-1.5 text-sm text-slate-600">
                To stand as the premier technology ally for enterprises, transforming ambitious possibilities into thriving digital realities.
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-14">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 md:p-10 shadow-sm">
          <div className="text-center">
            <h3 className="font-display text-xl font-bold text-brand-950">The Core Values That Drive Us</h3>
            <p className="mt-2 text-sm text-slate-500">Every project we engineer is built upon foundational principles of excellence.</p>
          </div>
          <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {values.map((v) => (
              <li
                key={v.name}
                className="group flex flex-col items-center gap-2 rounded-xl border border-transparent bg-slate-50 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-gradient-to-b hover:from-white hover:to-accent/5 hover:shadow-md"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-accent-dark shadow-sm transition-colors group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-purple group-hover:text-white">
                  <v.icon className="h-6 w-6" />
                </span>
                <span className="mt-2 text-sm font-bold text-brand-950">{v.name}</span>
                <span className="text-xs text-slate-500">{v.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  </section>
);

export default AboutSection;