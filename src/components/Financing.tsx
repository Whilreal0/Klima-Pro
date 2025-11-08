import React from 'react';
import { navigateTo } from '../utils/navigation';

const Financing: React.FC = () => {
    const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        navigateTo(href);
    };

    return (
        <section id="plans" className="py-20 sm:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Flexible Plans for Every Budget</h2>
                        
                        <div className="bg-secondary p-8 rounded-lg mb-6 border border-gray-200">
                            <h3 className="text-2xl font-bold text-primary mb-2">0% Financing Available</h3>
                            <p className="text-gray-600">
                                Don't let cost stop you from being comfortable. We offer flexible financing options to fit your needs, so you can get the service you need now and pay over time.
                            </p>
                        </div>
                        
                        <div className="bg-primary text-white p-8 rounded-lg">
                            <h3 className="text-2xl font-bold mb-2">Join our Comfort Plan</h3>
                            <p className="text-gray-200">
                                Enjoy peace of mind with twice-a-year tune-ups, priority service, and discounts on repairs. Keep your system running efficiently all year long.
                            </p>
                            <a 
                                href="/contact" 
                                onClick={(e) => handleNav(e, '/contact')} 
                                className="mt-6 inline-block bg-white text-primary font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                Become a Member
                            </a>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <img 
                            src="https://picsum.photos/600/500?image=21" 
                            alt="Smiling family relaxing on a couch in their comfortable, climate-controlled living room" 
                            className="rounded-lg shadow-xl w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Financing;
