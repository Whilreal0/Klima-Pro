
import React from 'react';

const EmergencyCallout: React.FC = () => {
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-secondary border-2 border-dashed border-accent rounded-lg p-8 md:p-12">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="text-center md:text-left">
                            <h2 className="text-3xl font-bold text-accent mb-2">AC Emergency?</h2>
                            <p className="text-lg text-gray-700 max-w-2xl">
                                We offer 24/7 emergency repair services. Don't wait in the tropical heat, call us now for immediate assistance.
                            </p>
                        </div>
                        <div className="shrink-0">
                            <a href="tel:+639187654321" className="bg-accent hover:opacity-90 text-white font-bold py-4 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                Call for Emergency Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EmergencyCallout;
