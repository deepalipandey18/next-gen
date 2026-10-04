import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import Logo from './Logo';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/products', label: 'Products' },
  { to: '/industries', label: 'Industries' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/insights', label: 'Insights' },
  { to: '/contact', label: 'Contact' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-950/95 shadow-lg shadow-black/40 backdrop-blur-md border-b border-white/10 py-1'
          : 'bg-transparent py-2'
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2.5 lg:px-8"
      >
        <Link to="/" className="group flex items-center transition-transform hover:scale-[1.02]" aria-label="NextGen IT Solution home">
          <Logo variant="compact" theme="dark" height={48} />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `group relative rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 ${
                    isActive ? 'text-accent font-semibold' : 'text-slate-300 hover:text-white'
                  }`
                }
              >
                {l.label}
                <span className="absolute inset-x-3 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-gradient-to-r from-accent to-purple transition-transform duration-300 group-hover:scale-x-100" />
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-accent via-accent-dark to-purple px-5 py-2.5 text-sm font-semibold text-white shadow-brand-glow transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
          >
            <span className="relative z-10 flex items-center gap-2">
              Let's Talk
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="rounded-lg p-2 text-white transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden border-t border-white/10 bg-brand-950/98 backdrop-blur-xl lg:hidden"
          >
            <div className="px-6 pt-4 pb-2 border-b border-white/10 flex items-center justify-between">
              <Logo variant="compact" theme="dark" height={38} />
            </div>
            <ul className="space-y-1 px-6 py-4">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    className={({ isActive }) =>
                      `block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                        isActive
                          ? 'bg-accent/15 text-accent font-semibold'
                          : 'text-slate-200 hover:bg-white/5 hover:text-white'
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
              <li className="pt-3">
                <Link
                  to="/contact"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-accent via-accent-dark to-purple px-5 py-3 text-sm font-semibold text-white shadow-brand-glow transition-transform hover:scale-[1.02]"
                >
                  Let's Talk <ArrowRight className="h-4 w-4" />
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;