
import React from 'react';
import { processSteps } from '../constants';

const Process: React.FC = () => {
    return (
        <section className="bg-secondary py-20 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Simple 4-Step Repair Process</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        We make furnace repair straightforward and stress-free.
                    </p>
                </div>
                <div className="relative pt-10 md:pt-16">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 relative">
                        {processSteps.map((step, index) => (
                            <div key={step.number} className="relative flex flex-col items-center text-center px-4 pb-12 md:pb-0">
                                {index !== 0 && (
                                    <span className="hidden md:block absolute top-10 left-0 w-1/2 h-0.5 bg-linear-to-l from-primary/30 to-transparent"></span>
                                )}
                                {index !== processSteps.length - 1 && (
                                    <>
                                        <span className="hidden md:block absolute top-10 right-0 w-1/2 h-0.5 bg-linear-to-r from-primary/30 to-transparent"></span>
                                    </>
                                )}
                                <div className="relative z-10 mb-4 flex justify-center">
                                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl ring-8 ring-secondary shadow-lg shadow-primary/30">
                                        {step.number}
                                    </div>
                                </div>
                                <div className="w-full bg-white rounded-2xl shadow-md shadow-primary/5 border border-white/60 px-6 py-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                                    <p className="text-gray-600">{step.description}</p>
                                </div>
                                {index !== processSteps.length - 1 && (
                                    <div className="md:hidden mt-6 h-10 w-px bg-primary/15" aria-hidden></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
