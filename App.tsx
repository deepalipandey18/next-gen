import React, { Suspense, lazy } from 'react';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './src/components/Navbar.tsx';
import Footer from './src/components/Footer.tsx';
import { LogoMark } from './src/components/Logo.tsx';

const Home = lazy(() => import('./src/pages/Home.tsx'));
const AboutPage = lazy(() => import('./src/pages/AboutPage.tsx'));
const ServicesPage = lazy(() => import('./src/pages/ServicesPage.tsx'));
const ContactPage = lazy(() => import('./src/pages/ContactPage.tsx'));
const Placeholder = lazy(() => import('./src/pages/Placeholder.tsx'));
const NotFound = lazy(() => import('./src/pages/NotFound.tsx'));

const Loading: React.FC = () => (
  <div className="flex min-h-screen flex-col items-center justify-center bg-brand-950">
    <div className="relative flex items-center justify-center">
      <div className="absolute h-20 w-20 animate-ping rounded-full bg-accent/20" />
      <LogoMark size={56} className="animate-pulse" />
    </div>
    <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-slate-400">Loading NextGen...</p>
  </div>
);

const App: React.FC = () => {
  return (
    <Theme appearance="inherit" radius="large" scaling="100%">
      <Router>
        <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-accent selection:text-brand-950">
          <Navbar />
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route
                path="/products"
                element={<Placeholder eyebrow="Products" title="NextGen Proprietary Products" description="Technology products designed to simplify operations and create new business opportunities." />}
              />
              <Route
                path="/industries"
                element={<Placeholder eyebrow="Industries" title="Technology for Every Industry" description="Explore solutions tailored to your industry." />}
              />
              <Route
                path="/case-studies"
                element={<Placeholder eyebrow="Case Studies" title="Solutions That Make an Impact" description="Real projects, real business outcomes." />}
              />
              <Route
                path="/insights"
                element={<Placeholder eyebrow="Insights" title="Insights & Ideas" description="Perspectives on technology, business and innovation." />}
              />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <Footer />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            newestOnTop
            closeOnClick
            pauseOnHover
          />
        </div>
      </Router>
    </Theme>
  );
};

export default App;