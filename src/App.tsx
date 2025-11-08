import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import { allServicesData } from './constants';
import ScrollToTopButton from './components/ScrollToTopButton';
import Chatbot from './components/Chatbot';
import { normalizePath } from './utils/navigation';

const App: React.FC = () => {
  const [route, setRoute] = useState(normalizePath(window.location.pathname || '/'));
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleCloseChatbot = () => {
    setIsChatbotOpen(false);
  };

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleRouteChange = () => {
      setRoute(normalizePath(window.location.pathname || '/'));
      window.scrollTo(0, 0); // Scroll to top on page change
    };
    window.addEventListener('popstate', handleRouteChange);

    // Initial call
    handleRouteChange();

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  useEffect(() => {
    // SEO Logic: Update title and meta description based on the current route
    const servicePageMatch = route.match(/^\/services\/([a-zA-Z0-9-]+)\/?$/);
    let title = 'KlimaPro PH | Fast & Reliable AC Service in Metro Manila';
    let description = 'KlimaPro PH offers fast, reliable air conditioning repair, installation, and maintenance in Metro Manila and across the Philippines. 24/7 emergency service available. Book your free estimate today!';

    if (servicePageMatch && servicePageMatch[1]) {
        const slug = servicePageMatch[1];
        const service = allServicesData[slug];
        if (service) {
            title = `${service.name} | KlimaPro PH in Metro Manila`;
            description = service.description;
        }
    } else {
        switch (route) {
            case '/about':
                title = 'About Us | KlimaPro PH';
                description = 'Learn about the experienced and certified team at KlimaPro PH, dedicated to providing top-quality air conditioning and HVAC services in Metro Manila and across the Philippines.';
                break;
            case '/contact':
                title = 'Contact Us | KlimaPro PH';
                description = 'Schedule your service or get a free estimate from KlimaPro PH. Call us or fill out our online form for fast, friendly service in Metro Manila and across the Philippines.';
                break;
        }
    }

    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="twitter:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="twitter:description"]')?.setAttribute('content', description);
    
  }, [route]);

  const renderPage = () => {
    const servicePageMatch = route.match(/^\/services\/([a-zA-Z0-9-]+)\/?$/);

    if (servicePageMatch && servicePageMatch[1]) {
      const slug = servicePageMatch[1];
      const service = allServicesData[slug];
      if (service) {
        return <ServiceDetailPage service={service} />;
      }
      return <HomePage />;
    }

    switch (route) {
      case '/about':
        return <AboutPage />;
      case '/contact':
        return <ContactPage />;
      case '/':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="bg-white text-gray-800 font-sans">
      <Header currentRoute={route} onCloseChatbot={handleCloseChatbot} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      <main>
        {renderPage()}
      </main>
      <Footer />
      <ScrollToTopButton />
      <Chatbot isOpen={isChatbotOpen} setIsOpen={setIsChatbotOpen} onCloseMobileMenu={handleCloseMobileMenu} />
    </div>
  );
};

export default App;
