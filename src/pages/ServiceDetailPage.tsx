import React, { useState, useEffect } from 'react';
import { FaShieldAlt } from 'react-icons/fa';
import Lightbox from '../components/Lightbox';
import { navigateTo } from '../utils/navigation';

interface Service {
    name: string;
    tagline: string;
    imageUrl: string;
    description: string;
    benefits: string[];
    processSteps: { number: number; title: string; description: string }[];
    galleryImages: string[];
}

const ServiceDetailPage: React.FC<{ service: Service }> = ({ service }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isLightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        let animationFrame: number | null = null;
        // Trigger animations on mount
        const timer = setTimeout(() => {
            animationFrame = requestAnimationFrame(() => setIsLoaded(true));
        }, 100);

        // Add Service schema
        const schema = {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": service.name,
            "name": service.name,
            "description": service.description,
            "provider": {
                "@type": "HVACBusiness",
                "name": "HVAC Pro",
                "url": "https://hvac-pro-example.com/",
                "telephone": "(123) 456-7890",
                "address": "123 Main St, Anytown, USA"
            },
            "areaServed": {
                "@type": "City",
                "name": "Anytown"
            },
            "image": service.imageUrl
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.innerHTML = JSON.stringify(schema);
        script.id = 'service-schema';
        document.head.appendChild(script);

        return () => {
            if (animationFrame !== null) {
                cancelAnimationFrame(animationFrame);
            }
            clearTimeout(timer);
            setIsLoaded(false);
            const existingScript = document.getElementById('service-schema');
            if (existingScript && document.head.contains(existingScript)) {
                document.head.removeChild(existingScript);
            }
        };
    }, [service]); // Rerun animation and update schema if the service changes

    const openLightbox = (index: number) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => setLightboxOpen(false);

    if (!service) {
        return <div className="text-center py-20">Service not found.</div>;
    }

    const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        navigateTo(href);
    };

    const AnimatedDiv: React.FC<{ children: React.ReactNode, delay?: string }> = ({ children, delay = 'delay-200' }) => (
        <div className={`transition-all duration-700 ${delay} ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            {children}
        </div>
    );

    return (
        <div className="overflow-x-hidden">
            <section className="relative bg-gray-800 text-white py-24 sm:py-32">
                <div className="absolute inset-0">
                    <img
                        src={service.imageUrl}
                        alt={`Technician performing ${service.name} service`}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AnimatedDiv>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                            {service.name}
                        </h1>
                        <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-gray-300">
                            {service.tagline}
                        </p>
                    </AnimatedDiv>
                </div>
            </section>

            <section className="py-20 sm:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <AnimatedDiv delay="delay-300">
                            <h2 className="text-3xl font-bold text-gray-900">Expert {service.name}</h2>
                            <p className="mt-4 text-lg text-gray-600">
                                {service.description}
                            </p>
                        </AnimatedDiv>
                        <AnimatedDiv delay="delay-500">
                            <div className="bg-secondary p-8 rounded-lg">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Benefits</h3>
                                <ul className="space-y-4">
                                    {service.benefits.map((benefit, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5 flex items-center justify-center">
                                                <FaShieldAlt size={16} aria-hidden />
                                            </span>
                                            <span className="ml-3 text-gray-700">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimatedDiv>
                    </div>
                </div>
            </section>

            <section className="bg-secondary py-20 sm:py-24">
                <AnimatedDiv>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our {service.name} Process</h2>
                            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                                A clear and transparent process from start to finish.
                            </p>
                        </div>
                        <div className="relative pt-10 md:pt-16">
                            <div className="relative">
                                {/* Desktop connecting line */}
                                <div className="hidden lg:block absolute top-6 left-0 right-0 h-0.5 bg-primary"></div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6 relative items-stretch">
                                    {/* Tablet horizontal connecting lines - positioned at circle level */}
                                    <div className="hidden sm:block lg:hidden absolute h-0.5 bg-primary z-0" style={{top: '1.5rem', left: 'calc(25% + 3rem)', right: 'calc(75% - 3rem)'}}></div>
                                    <div className="hidden sm:block lg:hidden absolute h-0.5 bg-primary z-0" style={{top: 'calc(50% + 1.5rem)', left: 'calc(25% + 3rem)', right: 'calc(75% - 3rem)'}}></div>
                                    
                                    {service.processSteps.map((step, index) => (
                                        <div key={step.number} className="relative flex flex-col items-center text-center px-4 pb-12 md:pb-0 h-full">
                                            <div className="relative z-10 mb-6 flex justify-center">
                                                <div className="w-12 h-12 rounded-full bg-white border-4 border-primary shadow-lg flex items-center justify-center">
                                                    <span className="text-primary font-bold text-lg">{step.number}</span>
                                                </div>
                                            </div>
                                            <div className="w-full bg-white rounded-2xl shadow-md shadow-primary/5 border border-white/60 px-6 py-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-h-[160px] flex flex-col h-full">
                                                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{step.title}</h3>
                                                <p className="text-gray-600 leading-relaxed grow">{step.description}</p>
                                            </div>
                                            {/* Mobile vertical connecting line */}
                                            {index !== service.processSteps.length - 1 && (
                                                <div className="sm:hidden mt-8 w-full flex justify-center" aria-hidden>
                                                    <div className="w-0.5 h-16 bg-gradient-to-b from-primary via-primary/60 to-primary/30 rounded-full shadow-sm"></div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedDiv>
            </section>

            <section className="py-20 sm:py-24 bg-white">
                <AnimatedDiv>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Project Gallery</h2>
                            <p className="mt-4 text-lg text-gray-600">See the quality of our work for yourself.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {service.galleryImages.map((imgSrc, index) => (
                                <button key={index} onClick={() => openLightbox(index)} className="overflow-hidden rounded-lg shadow-md aspect-w-1 aspect-h-1 block w-full group">
                                    <img src={imgSrc} alt={`Example of a completed ${service.name} project by HVAC Pro, image ${index + 1}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                                </button>
                            ))}
                        </div>
                    </div>
                </AnimatedDiv>
            </section>

            {isLightboxOpen && (
                <Lightbox
                    images={service.galleryImages}
                    startIndex={currentImageIndex}
                    onClose={closeLightbox}
                />
            )}

            <section className="bg-primary/5">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                    <AnimatedDiv>
                        <h2 className="text-3xl font-bold text-gray-900">Ready for Service?</h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                            Contact us today for a free, no-obligation quote on our {service.name} services.
                        </p>
                        <div className="mt-8">
                            <a
                                href="/contact"
                                onClick={(e) => handleNav(e, '/contact')}
                                className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 inline-block"
                            >
                                Request a Quote
                            </a>
                        </div>
                    </AnimatedDiv>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetailPage;
