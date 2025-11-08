
import React from 'react';
import { trustBadges } from '../constants';

const TrustBadges: React.FC = () => {
    return (
        <section className="bg-secondary py-12 sm:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
                    {trustBadges.map((badge, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="shrink-0 mb-3 h-8 w-8 flex items-center justify-center">{badge.icon}</div>
                            <p className="font-semibold text-gray-700 text-sm sm:text-base">{badge.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustBadges;
