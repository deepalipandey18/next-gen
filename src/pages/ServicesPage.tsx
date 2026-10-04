import React from 'react';
import PageHero from '../components/PageHero.tsx';
import ServicesSection from '../components/ServicesSection.tsx';
import ProcessSection from '../components/ProcessSection.tsx';
import TechnologiesSection from '../components/TechnologiesSection.tsx';
import CTASection from '../components/CTASection.tsx';

const ServicesPage: React.FC = () => (
  <>
    <PageHero
      eyebrow="Our Services"
      title="End-to-End Technology Services Built for Scale"
      description="From architectural strategy to full-stack execution, we help businesses turn modern technology into measurable market leadership."
    />
    <ServicesSection />
    <ProcessSection />
    <TechnologiesSection />
    <CTASection />
  </>
);

export default ServicesPage;