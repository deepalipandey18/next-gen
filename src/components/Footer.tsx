import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Facebook, Twitter, Github, Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => (
  <footer className="relative overflow-hidden bg-brand-950 text-slate-400 border-t border-white/10">
    {/* Subtle brand glow in footer corner */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-accent/10 blur-3xl"
    />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-purple/10 blur-3xl"
    />

    <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link to="/" className="inline-block transition-transform hover:scale-[1.01]" aria-label="NextGen IT Solution home">
            <Logo variant="full" theme="dark" size="lg" showTagline={true} />
          </Link>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-400">
            NextGen IT Solution delivers cutting-edge technology services and scalable digital products. We transform ambitious business goals into high-impact digital realities.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { icon: Linkedin, label: 'LinkedIn' },
              { icon: Instagram, label: 'Instagram' },
              { icon: Facebook, label: 'Facebook' },
              { icon: Twitter, label: 'X (Twitter)' },
              { icon: Github, label: 'GitHub' },
            ].map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="rounded-lg border border-white/10 bg-white/5 p-2.5 text-slate-400 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-brand-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Company links">
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">Company</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[
              { to: '/about', label: 'About Us' },
              { to: '/contact', label: 'Careers' },
              { to: '/contact', label: 'Contact' },
              { to: '/insights', label: 'Insights & Blog' },
            ].map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="transition-colors hover:text-accent">{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services links">
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">Services</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {['Web Development', 'Mobile Apps', 'Software Development', 'AI & Machine Learning', 'Cloud Solutions', 'Cybersecurity'].map((s) => (
              <li key={s}>
                <Link to="/services" className="transition-colors hover:text-accent">{s}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-accent" />
              <a href="mailto:sadiqmallick6422@gmail.com" className="transition-colors hover:text-accent">
                sadiqmallick6422@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-accent" />
              <a href="tel:+966596518726" className="transition-colors hover:text-accent">
                +966596518726
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="h-4 w-4 shrink-0 text-accent mt-0.5" />
              <span>Al-Reem Tower, Abu Bakr Al Siddiq Rd, Teba District, Al Jubail - 35513, KSA</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm md:flex-row">
        <p className="text-slate-400">
          © 2026 NextGen IT Solution. All Rights Reserved. <span className="text-slate-500">| Building Technology. Creating Possibilities.</span>
        </p>
        <ul className="flex gap-6 text-slate-400">
          {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((l) => (
            <li key={l}>
              <a href="#" className="transition-colors hover:text-accent">{l}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;