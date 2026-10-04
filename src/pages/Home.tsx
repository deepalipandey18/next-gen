import React from 'react';
    import Hero from '../components/Hero.tsx';
    import ServicesSection from '../components/ServicesSection.tsx';
    import ServicesVsProducts from '../components/ServicesVsProducts.tsx';
    import ProductsSection from '../components/ProductsSection.tsx';
    import IndustriesSection from '../components/IndustriesSection.tsx';
    import WhyChooseUs from '../components/WhyChooseUs.tsx';
    import ProcessSection from '../components/ProcessSection.tsx';
    import TechnologiesSection from '../components/TechnologiesSection.tsx';
    import CaseStudiesSection from '../components/CaseStudiesSection.tsx';
    import AboutSection from '../components/AboutSection.tsx';
    import TestimonialsSection from '../components/TestimonialsSection.tsx';
    import InsightsSection from '../components/InsightsSection.tsx';
    import CTASection from '../components/CTASection.tsx';
    import ContactSection from '../components/ContactSection.tsx';

    const Home: React.FC = () => (
      <>
        <Hero />
        <ServicesSection limit={8} />
        <ServicesVsProducts />
        <ProductsSection />
        <IndustriesSection />
        <WhyChooseUs />
        <ProcessSection />
        <TechnologiesSection />
        <CaseStudiesSection />
        <AboutSection />
        <TestimonialsSection />
        <InsightsSection />
        <CTASection />
        <ContactSection />
      </>
    );

    export default Home;