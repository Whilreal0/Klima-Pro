import React, { useState, useEffect } from 'react';

interface LightboxProps {
    images: string[];
    startIndex: number;
    onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ images, startIndex, onClose }) => {
    const [currentIndex, setCurrentIndex] = useState(startIndex);
    const [isLoaded, setIsLoaded] = useState(false);

    const goToPrevious = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
    
    useEffect(() => {
        const animationFrame = requestAnimationFrame(() => setIsLoaded(true));
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') {
                setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
            } else if (e.key === 'ArrowLeft') {
                setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
            } else if (e.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            cancelAnimationFrame(animationFrame);
            setIsLoaded(false);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [images.length, onClose]);

    return (
        <div 
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} 
            onClick={onClose}
            aria-modal="true"
            role="dialog"
        >
            <button 
                className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors z-50" 
                onClick={onClose}
                aria-label="Close image viewer"
            >
                &times;
            </button>

            {images.length > 1 && (
                 <button 
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/30 p-2 rounded-full hover:bg-black/50 transition-colors z-50" 
                    onClick={goToPrevious}
                    aria-label="Previous image"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
            )}

            <div className="relative max-w-4xl max-h-[90vh] w-full p-4" onClick={e => e.stopPropagation()}>
                 <img 
                    src={images[currentIndex]} 
                    alt={`Gallery image ${currentIndex + 1}`} 
                    className="w-full h-full object-contain rounded-lg shadow-2xl"
                />
            </div>
           
            {images.length > 1 && (
                <button 
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/30 p-2 rounded-full hover:bg-black/50 transition-colors z-50" 
                    onClick={goToNext}
                    aria-label="Next image"
                >
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            )}
             <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/30 px-3 py-1 rounded-full text-sm">
                {currentIndex + 1} / {images.length}
            </div>
        </div>
    );
};

export default Lightbox;