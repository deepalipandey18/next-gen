import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { LogoMark } from '../components/Logo';

const NotFound: React.FC = () => (
  <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-brand-950 px-6">
    {/* Dual ambient brand glows */}
    <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
    <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-purple/20 blur-3xl" />

    <div className="relative text-center max-w-md mx-auto">
      <div className="flex justify-center mb-6">
        <LogoMark size={72} />
      </div>
      <p className="font-display text-8xl font-black bg-gradient-to-r from-accent via-[#38BDF8] to-purple bg-clip-text text-transparent">
        404
      </p>
      <h1 className="mt-4 font-display text-2xl font-bold text-white">Page Not Found</h1>
      <p className="mt-2 text-slate-400">
        The page or resource you are seeking has been moved or does not exist.
      </p>
      <div className="mt-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent via-accent-dark to-purple px-6 py-3 text-sm font-semibold text-white shadow-brand-glow transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>
      </div>
    </div>
  </main>
);

export default NotFound;