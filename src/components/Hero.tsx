import React from 'react';
import { FaCalendarCheck, FaCheckCircle, FaClock, FaShieldAlt } from 'react-icons/fa';
import { navigateTo } from '../utils/navigation';

const Hero: React.FC = () => {
    const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        navigateTo(href);
    };

    return (
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img 
                    src="/src/assets/images/services/ac-installation.webp"
                    alt="KlimaPro PH technician performing maintenance on a modern high-efficiency air conditioning system" 
                    className="w-full h-full object-cover opacity-30"
                    fetchPriority="high"
                    width="1600"
                    height="900"
                />
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 sm:pt-10 sm:pb-28 lg:pt-14 lg:pb-36">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Trust Badge */}
                    <div className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-md border border-white/20 rounded-full px-3 py-1 mb-5 animate-fade-in shadow-sm">
                        <FaShieldAlt size={14} color="#2563eb" aria-hidden />
                        <span className="text-xs font-semibold tracking-wide uppercase text-gray-100">Licensed & Insured HVAC Experts</span>
                    </div>

                    {/* Eyebrow */}
                    <span className="block text-[11px] sm:text-xs tracking-[0.65em] uppercase text-white/60 mb-4 animate-fade-in-up">Trusted HVAC Professionals</span>

                    {/* Main Headline */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.05] space-y-2 mb-6 animate-fade-in-up">
                        <span className="block text-white">Your Comfort Is Our</span>
                        <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-[4.75rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary drop-shadow-[0_10px_25px_rgba(37,99,235,0.35)]">
                            #1 Priority
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-base sm:text-lg lg:text-xl text-gray-200/90 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
                        Expert HVAC installation, repair & maintenance services.
                    </p>
                    <p className="mt-3 text-sm sm:text-base font-semibold tracking-wide text-white uppercase animate-fade-in-up delay-300">
                        Same-day service available • 24/7 emergency support
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 animate-fade-in-up delay-300">
                        <a 
                            href="/contact" 
                            onClick={(e) => handleNav(e, '/contact')} 
                            className="group w-full sm:w-auto bg-primary hover:bg-primary-dark text-white font-bold py-[18px] px-9 rounded-xl text-base transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/50 flex items-center justify-center gap-3"
                        >
                            <span>Free Estimate</span>
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </a>
                        <a 
                            href="/contact" 
                            onClick={(e) => handleNav(e, '/contact')} 
                            className="group w-full sm:w-auto bg-white text-gray-900 hover:bg-gray-100 font-bold py-[18px] px-9 rounded-xl text-base transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3"
                        >
                            <span className="transition-transform group-hover:scale-110">
                                <FaCalendarCheck size={18} color="#1f2937" aria-hidden />
                            </span>
                            <span>Book Now</span>
                        </a>
                    </div>

                    {/* Trust Indicators */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 max-w-xl mx-auto animate-fade-in-up delay-400">
                        <div className="inline-flex items-center justify-center gap-1.5 bg-white/12 backdrop-blur-md rounded-full py-1 px-2.5 border border-white/15 shadow-sm mx-auto sm:mx-0">
                            <FaCheckCircle size={12} color="#34d399" aria-hidden />
                            <span className="text-[10px] font-semibold tracking-wider uppercase">Licensed Technicians</span>
                        </div>
                        <div className="inline-flex items-center justify-center gap-1.5 bg-white/12 backdrop-blur-md rounded-full py-1 px-2.5 border border-white/15 shadow-sm mx-auto sm:mx-0">
                            <FaClock size={12} color="#60a5fa" aria-hidden />
                            <span className="text-[10px] font-semibold tracking-wider uppercase">Same-Day Service</span>
                        </div>
                        <div className="inline-flex items-center justify-center gap-1.5 bg-white/12 backdrop-blur-md rounded-full py-1 px-2.5 border border-white/15 shadow-sm mx-auto sm:mx-0">
                            <FaShieldAlt size={12} color="#2563eb" aria-hidden />
                            <span className="text-[10px] font-semibold tracking-wider uppercase">100% Satisfaction</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
