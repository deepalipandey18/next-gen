import React from 'react';
import PageHero from '../components/PageHero.tsx';
import ContactSection from '../components/ContactSection.tsx';

const ContactPage: React.FC = () => (
  <>
    <PageHero
      eyebrow="Contact NextGen"
      title="Let's Build What's Next Together"
      description="Connect with our technology leaders to explore bespoke solutions, discuss project timelines, and turn possibilities into reality."
    />
    <ContactSection compact />
  </>
);

export default ContactPage;