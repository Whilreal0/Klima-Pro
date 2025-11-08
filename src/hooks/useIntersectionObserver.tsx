// Fix: Import `React` to make the React namespace available for type annotations like `React.RefObject`.
import React, { useState, useEffect, useRef } from 'react';

interface ObserverOptions {
    root?: Element | null;
    rootMargin?: string;
    threshold?: number | number[];
}

const useIntersectionObserver = (options: ObserverOptions): [React.RefObject<HTMLDivElement>, boolean] => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    // Memoize the options to prevent the effect from re-running unnecessarily.
    const optionsRef = useRef(options);

    useEffect(() => {
        optionsRef.current = options;
    }, [options]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // No need to observe anymore once it's visible
                    if (elementRef.current) {
                        observer.unobserve(elementRef.current);
                    }
                }
            },
            optionsRef.current
        );

        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, []);

    return [elementRef, isVisible];
};

export default useIntersectionObserver;
