import React, { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const ExclamationCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const ContactSection: React.FC = () => {
    const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY as string | undefined;
    const recaptchaRef = useRef<ReCAPTCHA | null>(null);

    const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '', company: '' });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.name) newErrors.name = 'Full name is required.';
        if (!formData.phone) {
            newErrors.phone = 'Phone number is required.';
        } else if (!/^[0-9-()+ ]{10,15}$/.test(formData.phone)) {
            newErrors.phone = 'Please enter a valid phone number.';
        }
        if (!formData.email) {
            newErrors.email = 'Email address is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address.';
        }
        if (!formData.message) newErrors.message = 'Please describe the issue.';
        if (formData.company) newErrors.company = 'Bot submission detected.';
        if (siteKey && !captchaToken) newErrors.captcha = 'Please verify that you are human.';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (errors[name]) {
             // Clear error on change
            const newErrors = { ...errors };
            delete newErrors[name];
            setErrors(newErrors);
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formData.company) {
            // Honeypot filled; silently ignore submission
            return;
        }

        if (!validate()) return;
        
        setStatus('submitting');
        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', phone: '', email: '', message: '', company: '' });
            recaptchaRef.current?.reset();
            setCaptchaToken(null);
        }, 1500);
    };

    const getInputClass = (fieldName: string) => {
        const baseClasses = "w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 transition-colors";
        if (errors[fieldName]) {
            // Add padding-right to make space for the icon, and enhance error colors
            return `${baseClasses} border-red-400 text-red-900 placeholder-red-400/70 focus:ring-red-500 focus:border-red-500 pr-10`;
        }
        return `${baseClasses} border-gray-300 focus:ring-primary focus:border-primary`;
    };


    return (
        <section id="contact" className="bg-secondary py-20 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Request a Quote or Book Online</h2>
                            <p className="mt-4 text-lg text-gray-600">
                                Fill out the form and our team will get back to you shortly to confirm your appointment or provide a free, no-obligation quote.
                            </p>
                            <div className="mt-8 space-y-4 text-gray-700">
                                <p className="flex items-center">
                                    <img src="https://picsum.photos/seed/phoneicon/24/24" alt="Phone icon" className="w-6 h-6 mr-3 rounded" />
                                    <a href="tel:+639178901234" className="hover:text-primary">+63 917 890 1234</a>
                                </p>
                                <p className="flex items-center">
                                    <img src="https://picsum.photos/seed/emailicon/24/24" alt="Email icon" className="w-6 h-6 mr-3 rounded" />
                                    <a href="mailto:info@klimapro.ph" className="hover:text-primary">info@klimapro.ph</a>
                                </p>
                                <p className="flex items-center">
                                    <img src="https://picsum.photos/seed/locationicon/24/24" alt="Location icon" className="w-6 h-6 mr-3 rounded" />
                                    Metro Manila, Philippines
                                </p>
                            </div>
                        </div>
                        {status === 'success' ? (
                            <div className="flex flex-col items-center justify-center bg-green-50 text-green-800 p-8 rounded-lg text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                                <p>Your request has been submitted successfully. We will be in touch shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                                <div className="hidden" aria-hidden>
                                    <label htmlFor="company" className="sr-only">Company</label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        tabIndex={-1}
                                        autoComplete="off"
                                        value={formData.company}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="name" className="sr-only">Full Name</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            placeholder="Full Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={getInputClass('name')}
                                            aria-invalid={!!errors.name}
                                            aria-describedby={errors.name ? 'name-error' : undefined}
                                        />
                                        {errors.name && (
                                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                                <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                                            </div>
                                        )}
                                    </div>
                                    {errors.name && <p id="name-error" className="text-red-600 text-sm mt-1">{errors.name}</p>}
                                </div>
                                <div>
                                    <label htmlFor="phone" className="sr-only">Phone Number</label>
                                    <div className="relative">
                                        <input
                                            type="tel"
                                            name="phone"
                                            id="phone"
                                            placeholder="Phone Number"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className={getInputClass('phone')}
                                            aria-invalid={!!errors.phone}
                                            aria-describedby={errors.phone ? 'phone-error' : undefined}
                                        />
                                        {errors.phone && (
                                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                                <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                                            </div>
                                        )}
                                    </div>
                                    {errors.phone && <p id="phone-error" className="text-red-600 text-sm mt-1">{errors.phone}</p>}
                                </div>
                                <div>
                                    <label htmlFor="email" className="sr-only">Email Address</label>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Email Address"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={getInputClass('email')}
                                            aria-invalid={!!errors.email}
                                            aria-describedby={errors.email ? 'email-error' : undefined}
                                        />
                                        {errors.email && (
                                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                                <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                                            </div>
                                        )}
                                    </div>
                                    {errors.email && <p id="email-error" className="text-red-600 text-sm mt-1">{errors.email}</p>}
                                </div>
                                <div>
                                    <label htmlFor="message" className="sr-only">Briefly describe the issue...</label>
                                    <div className="relative">
                                        <textarea
                                            name="message"
                                            id="message"
                                            rows={4}
                                            placeholder="Briefly describe the issue..."
                                            value={formData.message}
                                            onChange={handleChange}
                                            className={getInputClass('message')}
                                            aria-invalid={!!errors.message}
                                            aria-describedby={errors.message ? 'message-error' : undefined}
                                        ></textarea>
                                        {errors.message && (
                                            <div className="absolute top-0 right-0 pr-3 pt-3 flex items-start pointer-events-none">
                                                <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                                            </div>
                                        )}
                                    </div>
                                    {errors.message && <p id="message-error" className="text-red-600 text-sm mt-1">{errors.message}</p>}
                                </div>
                                <div>
                                    {siteKey ? (
                                        <ReCAPTCHA
                                            ref={recaptchaRef}
                                            sitekey={siteKey}
                                            onChange={(token) => {
                                                setCaptchaToken(token);
                                                if (errors.captcha) {
                                                    const newErrors = { ...errors };
                                                    delete newErrors.captcha;
                                                    setErrors(newErrors);
                                                }
                                            }}
                                            onExpired={() => {
                                                setCaptchaToken(null);
                                                setErrors((prev) => siteKey ? { ...prev, captcha: 'Please verify that you are human.' } : prev);
                                            }}
                                        />
                                    ) : (
                                        <p className="text-sm text-yellow-600 font-medium">Add VITE_RECAPTCHA_SITE_KEY to enable spam protection.</p>
                                    )}
                                    {errors.captcha && <p className="text-red-600 text-sm mt-2">{errors.captcha}</p>}
                                </div>
                                <button type="submit" disabled={status === 'submitting'} className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center">
                                    {status === 'submitting' ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Submitting...
                                        </>
                                    ) : 'Submit Request'}
                                </button>
                                <p className="text-center text-xs text-gray-500 pt-2">
                                    We respect your privacy. Expect a call within 15 minutes.
                                </p>
                            </form>
                         )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;