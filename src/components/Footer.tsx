import React from 'react';
import { navigateTo } from '../utils/navigation';

const Logo: React.FC<{ onClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void }> = ({ onClick }) => (
    <a href="/" onClick={(e) => onClick(e, '/')} className="flex items-center shrink-0">
        <div className="w-8 h-8 bg-primary flex items-center justify-center rounded-md">
           <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.375a6.375 6.375 0 006.375-6.375h.038a6.375 6.375 0 00-6.375-6.375a6.375 6.375 0 00-6.375 6.375h-.038a6.375 6.375 0 006.375 6.375z" />
            </svg>
        </div>
        <span className="ml-3 text-xl font-bold text-gray-900">KlimaPro PH</span>
    </a>
);

const FacebookIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
    </svg>
);

const TwitterIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
    </svg>
);

const Footer: React.FC = () => {
    const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        navigateTo(href);
    };
    
    const quickLinks = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services/ac-installation' },
        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <footer className="bg-gray-100 border-t border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <Logo onClick={handleNav} />
                        <p className="mt-4 text-gray-600 max-w-sm">
                            Your trusted partner for home comfort in the Philippines. Serving Metro Manila and surrounding areas.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900">Quick Links</h3>
                        <ul className="mt-4 space-y-2">
                            {quickLinks.map(link => (
                                <li key={link.name}>
                                    <a href={link.href} onClick={(e) => handleNav(e, link.href)} className="text-gray-600 hover:text-primary">{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900">Contact Us</h3>
                         <ul className="mt-4 space-y-2 text-gray-600">
                            <li>+63 917 890 1234</li>
                            <li>info@klimapro.ph</li>
                            <li>Metro Manila, Philippines</li>
                        </ul>
                        <div className="flex space-x-4 mt-4">
                            <a
                                href="#"
                                className="text-gray-500 hover:text-primary"
                                aria-label="Visit KlimaPro PH on Facebook"
                            >
                                <FacebookIcon />
                            </a>
                            <a
                                href="#"
                                className="text-gray-500 hover:text-primary"
                                aria-label="Visit KlimaPro PH on X"
                            >
                                <TwitterIcon />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-200 py-4">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
                    &copy; {new Date().getFullYear()} KlimaPro PH. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
