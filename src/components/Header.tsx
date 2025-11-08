import React, { useState, useEffect } from 'react';
import { megaMenuServices, ChevronDownIcon } from '../constants';
import { navigateTo } from '../utils/navigation';

const Logo: React.FC = () => {
    const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        navigateTo(href);
    };
    return (
        <a href="/" onClick={(e) => handleNav(e, '/')} className="flex items-center shrink-0">
            <div className="w-8 h-8 bg-primary flex items-center justify-center rounded-md">
                <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.375a6.375 6.375 0 006.375-6.375h.038a6.375 6.375 0 00-6.375-6.375a6.375 6.375 0 00-6.375 6.375h-.038a6.375 6.375 0 006.375 6.375z" />
                </svg>
            </div>
            <span className="ml-3 text-xl font-bold text-gray-900">KlimaPro PH</span>
        </a>
    )
};

const ChevronRightIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
);

interface HeaderProps {
    currentRoute: string;
    onCloseChatbot?: () => void;
    isMobileMenuOpen?: boolean;
    setIsMobileMenuOpen?: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ currentRoute, onCloseChatbot, isMobileMenuOpen: externalIsOpen, setIsMobileMenuOpen: externalSetIsOpen }) => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(externalIsOpen || false);
    const [isServicesOpen, setServicesOpen] = useState(false);
    const [openCategories, setOpenCategories] = useState<string[]>([]);
    const [isScrolled, setIsScrolled] = useState(false);
    const [announcementVisible, setAnnouncementVisible] = useState(true);

    // Use external state if provided, otherwise use internal state
    const currentIsMobileMenuOpen = externalIsOpen !== undefined ? externalIsOpen : isMobileMenuOpen;
    const currentSetMobileMenuOpen = externalSetIsOpen || setMobileMenuOpen;

    const toggleCategory = (categoryName: string) => {
        setOpenCategories(prev =>
            prev.includes(categoryName)
                ? prev.filter(name => name !== categoryName)
                : [...prev, categoryName]
        );
    };

    // Philippines contact info
    const contactInfo = {
        email: 'info@klimapro.ph',
        phone: '+63 917 890 1234',
        emergencyPhone: '+63 918 765 4321'
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 10;
            setIsScrolled(scrolled);

            // Hide announcement bar after scrolling 100px
            if (window.scrollY > 100) {
                setAnnouncementVisible(false);
            } else {
                setAnnouncementVisible(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Disable body scroll when mobile menu is open
    useEffect(() => {
        if (currentIsMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
            // Close chatbot when menu opens
            if (onCloseChatbot) {
                onCloseChatbot();
            }
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [currentIsMobileMenuOpen, onCloseChatbot]);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services', dropdown: true },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    const closeMobileMenu = () => {
        currentSetMobileMenuOpen(false);
        setServicesOpen(false);
    }

    const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        navigateTo(href);
    };

    const handleMobileNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        navigateTo(href);
        closeMobileMenu();
    };

    const getLinkStyles = (href: string, isDropdown = false) => {
        const isActive = isDropdown ? currentRoute.startsWith(href) : currentRoute === href;
        return {
            wrapper: `group relative px-3 py-6 inline-flex flex-col items-center text-sm font-semibold tracking-wide leading-none transition-colors duration-300 ${isActive ? 'text-primary' : 'text-gray-600 hover:text-primary'
                }`,
            indicator: `mt-2 h-0.5 rounded-full self-center transition-all duration-300 ${isActive ? 'w-8 bg-primary' : 'w-0 bg-primary/60 group-hover:w-8'
                }`
        };
    };

    return (
        <>
            {/* Announcement Bar */}
            <div className={`bg-primary text-white text-center py-2 px-4 transition-all duration-300 ${announcementVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
                }`}>
                <div className="container mx-auto flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <a href={`mailto:${contactInfo.email}`} className="hover:text-gray-200 transition-colors font-medium">
                            {contactInfo.email}
                        </a>
                    </div>
                    <div className="hidden sm:flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-medium">24/7 Emergency: {contactInfo.emergencyPhone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="hover:text-gray-200 transition-colors font-medium">
                            {contactInfo.phone}
                        </a>
                    </div>
                </div>
            </div>

            <header className={`bg-white/90 backdrop-blur-lg sticky top-0 z-50 border-b border-gray-100 transition-all duration-300 ${isScrolled ? 'shadow-md' : 'shadow-sm'
                } ${announcementVisible ? '' : 'top-0'}`}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <Logo />
                        <nav className="hidden lg:flex lg:items-center lg:space-x-8">
                            {navLinks.map((link) => {
                                if (link.dropdown) {
                                    const styles = getLinkStyles(link.href, true);
                                    return (
                                        <div key={link.name} className="relative group">
                                            <button
                                                type="button"
                                                onClick={(e) => handleNav(e, link.href)}
                                                className={styles.wrapper}
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                <span className="flex items-center gap-1.5">
                                                    <span>{link.name}</span>
                                                    <ChevronDownIcon className="w-3.5 h-3.5 text-current transition-transform duration-300 group-hover:rotate-180" />
                                                </span>
                                                <span className={styles.indicator}></span>
                                            </button>
                                            <div className="absolute top-full left-0 w-64 origin-top bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto transform scale-95 group-hover:scale-100">
                                                <div className="py-2">
                                                    {megaMenuServices.map((category) => (
                                                        <div key={category.category} className="relative group/submenu">
                                                            <div className="px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors flex justify-between items-center cursor-default">
                                                                <span>{category.category}</span>
                                                                <ChevronRightIcon className="w-4 h-4 text-gray-400" />
                                                            </div>
                                                            <div className="absolute top-0 left-full w-64 -mt-1 origin-top-left bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none opacity-0 group-hover/submenu:opacity-100 transition-all duration-300 pointer-events-none group-hover/submenu:pointer-events-auto transform scale-95 group-hover/submenu:scale-100">
                                                                <div className="py-2">
                                                                    {category.services.map((item) => (
                                                                        <a
                                                                            key={item.name}
                                                                            href={item.href}
                                                                            onClick={(e) => handleNav(e, item.href)}
                                                                            className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-primary transition-colors"
                                                                        >
                                                                            {item.name}
                                                                        </a>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }
                                const styles = getLinkStyles(link.href);
                                return (
                                    <a key={link.name} href={link.href} onClick={(e) => handleNav(e, link.href)} className={styles.wrapper}>
                                        <span>{link.name}</span>
                                        <span className={styles.indicator}></span>
                                    </a>
                                );
                            })}
                        </nav>
                        <div className="hidden lg:flex items-center">
                            <a href="/contact" onClick={(e) => handleNav(e, '/contact')} className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                                Book Service
                            </a>
                        </div>
                        <div className="lg:hidden flex items-center">
                            <button onClick={() => currentSetMobileMenuOpen(!currentIsMobileMenuOpen)} aria-label="Open menu" aria-expanded={currentIsMobileMenuOpen} className="text-gray-600 hover:text-primary focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-110">
                                <svg className="w-6 h-6 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={currentIsMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {currentIsMobileMenuOpen && (
                    <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-xl z-50 overflow-hidden transition-all duration-300 ease-out max-h-screen">
                        <div className="px-4 pt-4 pb-4 space-y-2 overflow-y-auto max-h-[calc(100vh-80px)]">
                            {navLinks.map((link, index) => (
                                link.dropdown ? (
                                    <div key={link.name} className="opacity-0 translate-y-2 animate-fadeInUp" style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'forwards' }}>
                                        <button
                                            onClick={() => setServicesOpen(!isServicesOpen)}
                                            className="w-full flex justify-between items-center text-left text-gray-700 hover:text-primary font-semibold py-3 px-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-200"
                                        >
                                            <span>{link.name}</span>
                                            <ChevronDownIcon className={`w-5 h-5 transition-all duration-300 ${isServicesOpen ? 'rotate-180 text-primary' : 'text-gray-400'}`} />
                                        </button>
                                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isServicesOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                            <div className="mt-2 space-y-1 bg-gray-50/50 rounded-lg p-3">
                                                {megaMenuServices.map((category, categoryIndex) => (
                                                    <div key={category.category} className="opacity-0 translate-y-1 animate-fadeInUp" style={{ animationDelay: `${categoryIndex * 30}ms`, animationFillMode: 'forwards' }}>
                                                        <button
                                                            onClick={() => toggleCategory(category.category)}
                                                            className="w-full flex justify-between items-center px-3 py-2 text-gray-700 font-semibold text-sm bg-white rounded-md mb-1 hover:bg-gray-50 transition-colors duration-200"
                                                        >
                                                            <span>{category.category}</span>
                                                            <ChevronDownIcon className={`w-4 h-4 transition-transform duration-300 ${openCategories.includes(category.category) ? 'rotate-180 text-primary' : 'text-gray-400'}`} />
                                                        </button>
                                                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openCategories.includes(category.category) ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                                            <div className="space-y-1 pl-2 pt-1">
                                                                {category.services.map((item) => (
                                                                    <a
                                                                        key={item.name}
                                                                        href={item.href}
                                                                        onClick={(e) => handleMobileNav(e, item.href)}
                                                                        className="block text-gray-600 hover:text-primary font-medium py-2.5 px-3 rounded-lg bg-white hover:bg-gray-50 transition-all duration-200 border border-gray-100 hover:border-primary/30"
                                                                    >
                                                                        <span className="text-sm">{item.name}</span>
                                                                    </a>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div key={link.name} className="opacity-0 translate-y-2 animate-fadeInUp" style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'forwards' }}>
                                        <a href={link.href} onClick={(e) => handleMobileNav(e, link.href)} className="block text-gray-700 hover:text-primary font-semibold py-3 px-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-200">
                                            <span>{link.name}</span>
                                        </a>
                                    </div>
                                )
                            ))}
                            <div className="opacity-0 translate-y-2 animate-fadeInUp mt-6 pt-2" style={{ animationDelay: `${navLinks.length * 50}ms`, animationFillMode: 'forwards' }}>
                                <a href="/contact" onClick={(e) => handleMobileNav(e, '/contact')} className="block w-full text-center bg-primary hover:bg-primary-dark text-white font-bold py-3 px-5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
                                    Book Service Now
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </header>
        </>
    );
};

export default Header;
