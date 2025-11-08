
import React from 'react';
import { whyChooseUsPoints } from '../constants';

const WhyChooseUs: React.FC = () => {
    const renderIcon = (icon: React.ReactNode) => {
        if (!React.isValidElement(icon)) return icon;
        const baseClasses = 'w-4 h-4';
        const existing = icon.props.className ?? '';
        const merged = Array.from(new Set(`${existing} ${baseClasses}`.trim().split(/\s+/))).join(' ');
        return React.cloneElement(icon, { className: merged });
    };

    return (
        <section id="about" className="py-20 sm:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Why Choose HVAC Pro?</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Your comfort and safety are our top priorities.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {whyChooseUsPoints.map((point) => (
                        <div key={point.title} className="bg-secondary rounded-2xl p-8 border border-white/60 shadow-sm hover:shadow-md transition-shadow">
                             <div className="shrink-0 mb-5">
                                <div className="">
                                    {renderIcon(point.icon)}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{point.title}</h3>
                            <p className="text-gray-600">{point.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
