import React, { useState, useEffect, useRef } from 'react';
import { testimonialsData } from '../constants';
import { StarIcon } from '../constants';

const TestimonialCard: React.FC<{ testimonial: typeof testimonialsData[0] }> = ({ testimonial }) => (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
        <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5 p-8 bg-gradient-to-br from-primary/5 to-primary/10 flex flex-col items-center justify-center text-center md:text-left">
                <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">{testimonial.name.charAt(0)}</span>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">{testimonial.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{testimonial.location}</p>
                <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                </div>
            </div>
            <div className="md:w-3/5 p-8 flex flex-col justify-center">
                <div className="relative mb-4">
                    <svg className="absolute -top-1 -left-1 w-6 h-6 text-primary/20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-gray-700 text-lg leading-relaxed pl-5 italic">{testimonial.quote}</p>
                </div>
            </div>
        </div>
    </div>
);

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    // Fix: In a browser environment, setTimeout returns a number, not a NodeJS.Timeout object.
    const timeoutRef = useRef<number | null>(null);

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setCurrentIndex((prevIndex) =>
                    prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
                ),
            5000 // Change slide every 5 seconds
        );

        return () => {
            resetTimeout();
        };
    }, [currentIndex]);

    return (
        <section className="bg-secondary py-20 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
                    <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">Real experiences from homeowners who trust our services</p>
                </div>
                <div 
                    className="relative overflow-hidden"
                    onMouseEnter={() => resetTimeout()}
                    onMouseLeave={() => {
                        timeoutRef.current = setTimeout(
                             () => setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length),
                             5000
                        );
                    }}
                >
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {testimonialsData.map((testimonial, index) => (
                            <div key={index} className="w-full shrink-0 px-4">
                                <TestimonialCard testimonial={testimonial} />
                            </div>
                        ))}
                    </div>
                     <div className="flex justify-center gap-3 mt-8">
                        {testimonialsData.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    currentIndex === index ? 'w-8 bg-primary' : 'w-2 bg-gray-300 hover:bg-gray-400'
                                }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
                 <div className="text-center mt-16">
                    <a href="#" className="inline-flex items-center gap-2 font-semibold text-lg text-primary hover:text-primary-dark transition-colors group">
                        Read more reviews 
                        <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;