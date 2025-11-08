import React from 'react';
import ContactSection from '../components/ContactSection';

const ContactPage: React.FC = () => {
  return (
    // The ContactSection already has its own padding and background,
    // so we can just render it directly.
    <ContactSection />
  );
};

export default ContactPage;
