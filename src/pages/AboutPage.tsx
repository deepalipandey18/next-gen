import React from 'react';
import PageHero from '../components/PageHero.tsx';
import AboutSection from '../components/AboutSection.tsx';
import WhyChooseUs from '../components/WhyChooseUs.tsx';
import CTASection from '../components/CTASection.tsx';

const AboutPage: React.FC = () => (
  <>
    <PageHero
      eyebrow="About NextGen IT Solution"
      title="Building Technology. Creating Possibilities."
      description="We unite engineering discipline, cloud architecture, and human-centered design to help ambitious enterprises thrive in the digital age."
    />
    <AboutSection />
    <WhyChooseUs />
    <CTASection />
  </>
);

export default AboutPage;