import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import TrustBadges from '../components/TrustBadges';
import ServicesGrid from '../components/ServicesGrid';
import Process from '../components/Process';
import WhyChooseUs from '../components/WhyChooseUs';
import EmergencyCallout from '../components/EmergencyCallout';
import Testimonials from '../components/Testimonials';
import Financing from '../components/Financing';
import ContactSection from '../components/ContactSection';
import FAQ from '../components/FAQ';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { faqData, testimonialsData } from '../constants';

const AnimatedSection: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <div 
            ref={ref} 
            className={`transition-all duration-700 ease-out ${className} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            {children}
        </div>
    );
};

const HomePage: React.FC = () => {

  useEffect(() => {
    const schemas = {
      faq: {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
      },
      rating: {
        "@context": "https://schema.org",
        "@type": "AggregateRating",
        "itemReviewed": {
            "@type": "HVACBusiness",
            "name": "HVAC Pro",
            "image": "https://picsum.photos/200/200?image=1074",
            "telephone": "(123) 456-7890",
            "address": "123 Main St, Anytown, USA"
        },
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": testimonialsData.length
      }
    };
    
    const scriptTags: HTMLScriptElement[] = [];
    
    Object.keys(schemas).forEach(key => {
        const schema = schemas[key as keyof typeof schemas];
        let script = document.getElementById(`schema-${key}`) as HTMLScriptElement;
        if (!script) {
            script = document.createElement('script');
            script.id = `schema-${key}`;
            script.type = 'application/ld+json';
            document.head.appendChild(script);
        }
        script.innerHTML = JSON.stringify(schema);
        scriptTags.push(script);
    });

    return () => {
        // Cleanup on unmount
        scriptTags.forEach(tag => {
            if(document.head.contains(tag)) {
                document.head.removeChild(tag);
            }
        });
    };
  }, []);

  return (
    <>
      <Hero />
      <AnimatedSection>
        <TrustBadges />
      </AnimatedSection>
      <AnimatedSection>
        <ServicesGrid />
      </AnimatedSection>
      <AnimatedSection>
        <Process />
      </AnimatedSection>
      <AnimatedSection>
        <WhyChooseUs />
      </AnimatedSection>
      <AnimatedSection>
        <Testimonials />
      </AnimatedSection>
      <AnimatedSection>
        <Financing />
      </AnimatedSection>
      <AnimatedSection>
        <FAQ />
      </AnimatedSection>
      <AnimatedSection>
        <EmergencyCallout />
      </AnimatedSection>
      <AnimatedSection>
        <ContactSection />
      </AnimatedSection>
    </>
  );
};

export default HomePage;