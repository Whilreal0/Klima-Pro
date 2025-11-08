import React from 'react';
import { services } from '../constants';
import { navigateTo } from '../utils/navigation';

const ServicesGrid: React.FC = () => {
    const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        navigateTo(href);
    };
    
    const renderIcon = (icon: React.ReactNode) => {
        if (!React.isValidElement(icon)) return icon;
        const { size } = icon.props as { size?: number };
        const resolvedSize = typeof size === 'number' ? size : 28;
        return React.cloneElement(icon, {
            size: resolvedSize,
            color: 'currentColor',
            'aria-hidden': true,
        } as { size?: number; color?: string; 'aria-hidden'?: boolean });
    };

    return (
        <section id="services" className="py-20 sm:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Services</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        From emergency repairs to new installations, we have your home comfort needs covered.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div key={service.name} className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-200 hover:shadow-lg hover:border-primary/70 transition-all duration-300">
                            <div className="flex justify-center mb-5">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shadow-inner shadow-primary/5">
                                    {renderIcon(service.icon)}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                            <p className="text-gray-600 mb-6">{service.description}</p>
                            <a 
                                href={`/services/${service.slug}`} 
                                onClick={(e) => handleNav(e, `/services/${service.slug}`)} 
                                className="font-semibold text-primary hover:text-primary-dark"
                            >
                                Learn More &rarr;
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesGrid;
