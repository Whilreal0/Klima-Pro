import React from 'react';
import { FaAward, FaCalendarCheck, FaClock, FaFan, FaFireAlt, FaHandsHelping, FaShieldAlt, FaSnowflake, FaStar, FaTools, FaWind } from 'react-icons/fa';

const assetMap = import.meta.glob('./assets/**/*', { eager: true, import: 'default' }) as Record<string, string>;

const imageAsset = (relativePath: string) => {
    const key = `./assets/${relativePath}`;
    const assetUrl = assetMap[key];
    if (!assetUrl) {
        console.warn(`Asset not found for path: ${key}`);
        return relativePath;
    }
    return assetUrl;
};

type IconComponentProps = { className?: string };

const iconClass = (className?: string) => className ?? '';

// --- SVG Icons ---
export const IconProps = { className: 'w-8 h-8 text-primary' };

export const ShieldCheckIcon: React.FC<IconComponentProps> = ({ className }) => (
    <svg
        className={iconClass(className)}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        strokeWidth={1.5}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 22c3.22-1.07 6-3.66 6-7.34V7.828a1 1 0 00-.621-.929l-5.25-2.1a1 1 0 00-.758 0l-5.25 2.1A1 1 0 005 7.828V12c0 3.68 2.78 6.27 6 7.34z"
        />
    </svg>
);

export const BadgeCheckIcon: React.FC<IconComponentProps> = ({ className }) => (
    <svg
        className={iconClass(className)}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        strokeWidth={1.5}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18.364 5.636l-1.414-1.414a3 3 0 00-4.242 0L12 4.93l-.708-.708a3 3 0 00-4.242 0L5.636 5.636a3 3 0 000 4.242L6.344 10l-.708.708a3 3 0 000 4.242l1.414 1.414a3 3 0 004.242 0L12 15.07l.708.708a3 3 0 004.242 0l1.414-1.414a3 3 0 000-4.242L17.656 10l.708-.708a3 3 0 000-4.242z"
        />
    </svg>
);

export const StarIcon: React.FC<IconComponentProps> = ({ className }) => (
    <svg
        className={iconClass(className)}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        strokeWidth={1.5}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.5l2.09 4.233 4.67.678-3.38 3.294.799 4.656-4.179-2.197-4.178 2.197.798-4.656-3.38-3.294 4.67-.678L11.48 3.5z"
        />
    </svg>
);

export const ClockIcon: React.FC<IconComponentProps> = ({ className }) => (
    <svg
        className={iconClass(className)}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        strokeWidth={1.5}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);
export const SnowflakeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.34 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.931l.893.372c.521.218.845.764.764 1.286l-.218.893a1.125 1.125 0 01-.931.78l-.894.149c-.424.07-.764.384-.931.78l-.372.893c-.218.521-.764.845-1.286-.764l-.893-.218a1.125 1.125 0 01-.78-.931l-.149-.894a1.125 1.125 0 01.78-.931l.372-.893c.396-.167.71-.507.78-.931l.149-.893zM18 10.34c.542.09.94.56.94 1.11v1.093c0 .55-.398 1.02-.94 1.11l-.894.149a1.125 1.125 0 01-.931.78l-.372.893c-.218.521-.764.845-1.286.764l-.893-.218a1.125 1.125 0 01-.78-.931l-.149-.894a1.125 1.125 0 01.931-.78l.893-.372c.424-.177.764-.507.931-.78l.149-.894c.09-.542.56-.94 1.11-.94h1.093zM10.34 18c.09.542.56.94 1.11.94h1.093c.55 0 1.02-.398 1.11-.94l.149-.894c.07-.424.384-.764.78-.931l.893-.372c.521.218.845.764.764-1.286l-.218-.893a1.125 1.125 0 01-.931-.78l-.894-.149c-.424-.07-.764-.384-.931-.78l-.372-.893c-.218-.521-.764-.845-1.286-.764l-.893.218a1.125 1.125 0 01-.78.931l-.149.894a1.125 1.125 0 01.78.931l.372.893c.396.167.71-.507.78.931l.149.893zM6 10.34c.542-.09.94-.56.94-1.11V8.137c0-.55-.398-1.02-.94-1.11l-.894-.149a1.125 1.125 0 01-.931-.78l-.372-.893c-.218-.521-.764-.845-1.286-.764l-.893.218a1.125 1.125 0 01-.78.931l-.149.894a1.125 1.125 0 01.931.78l.893.372c.424.177.764.507.931-.78l.149.894c.09.542.56.94 1.11.94h1.093z" /></svg>
);
export const WrenchScrewdriverIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.528-1.036.94-2.131 1.153-3.294l.206-1.031c.253-.988.228-2.017-.068-2.968l-1.54-2.846a2.25 2.25 0 00-2.13-1.548l-2.846-1.541a2.25 2.25 0 00-2.968-.068l-1.031.206c-1.163.213-2.258.625-3.294 1.153l-3.03 2.496m5.877 5.877l-5.877 5.877a2.652 2.652 0 000 3.75s3.75 0 3.75 0l5.877-5.877m0 0l5.877-5.877" /></svg>
);
export const FireIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 00-1.426-1.516c-.713-.65-1.053-.546-1.386.03A9.01 9.01 0 006 12a9.034 9.034 0 003 7.5a9.05 9.05 0 005.862-2.333 9.012 9.012 0 001.5-4.425a8.913 8.913 0 00-1.5-4.425z" /></svg>
);
export const SparklesIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.572L16.5 21.75l-.398-1.178a3.375 3.375 0 00-2.455-2.456L12.75 18l1.178-.398a3.375 3.375 0 002.455-2.456L16.5 14.25l.398 1.178a3.375 3.375 0 002.456 2.456l1.178.398-1.178.398a3.375 3.375 0 00-2.456 2.456z" /></svg>
);
export const CalendarDaysIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18" /></svg>
);
export const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
);

// --- Data Arrays ---

export const trustBadges = [
    { icon: <FaShieldAlt size={24} color="#2563eb" aria-hidden />, text: 'DTI Licensed & DTI Insured' },
    { icon: <FaAward size={24} color="#2563eb" aria-hidden />, text: 'BIR Accredited' },
    { icon: <FaStar size={24} color="#2563eb" aria-hidden />, text: '5-Star Google Reviews' },
    { icon: <FaClock size={24} color="#2563eb" aria-hidden />, text: '24/7 Emergency Service' }
];

export const services = [
    {
        icon: <FaSnowflake aria-hidden />,
        name: "AC Installation",
        slug: "ac-installation",
        description: 'High-efficiency air conditioner installation for ultimate tropical comfort.',
    },
    {
        icon: <FaTools aria-hidden />,
        name: "AC Repair",
        slug: "ac-repair",
        description: "Fast, reliable repairs to get your AC running smoothly again.",
    },
    {
        icon: <FaFireAlt aria-hidden />,
        name: "Heating & Furnace Repair",
        slug: "furnace-repair",
        description: 'Expert furnace and heating system repairs to keep you warm during cool seasons.',
    },
    {
        icon: <FaFan aria-hidden />,
        name: "Heat Pump Services",
        slug: "heat-pump-services",
        description: "Efficient all-in-one systems for both heating and cooling your home.",
    },
    {
        icon: <FaWind aria-hidden />,
        name: "Duct Cleaning",
        slug: "duct-cleaning",
        description: "Improve your indoor air quality with our professional duct cleaning services.",
    },
    {
        icon: <FaCalendarCheck aria-hidden />,
        name: "Maintenance Plans",
        slug: "maintenance-plans",
        description: "Join our Comfort Plan for regular tune-ups and priority service.",
    },
];

export const megaMenuServices = [
    {
        category: 'Cooling',
        services: [
            { name: 'AC Installation', href: '/services/ac-installation' },
            { name: 'AC Repair', href: '/services/ac-repair' },
            { name: 'Ductless Systems', href: '/services/ductless-systems' },
            { name: 'Heat Pump Services', href: '/services/heat-pump-services' },
        ]
    },
    {
        category: 'Heating',
        services: [
            { name: 'Furnace Installation', href: '/services/furnace-installation' },
            { name: 'Furnace Repair', href: '/services/furnace-repair' },
            { name: 'Boiler Services', href: '/services/boiler-services' },
        ]
    },
    {
        category: 'Air Quality',
        services: [
            { name: 'Duct Cleaning', href: '/services/duct-cleaning' },
            { name: 'Air Purifiers', href: '/services/air-purifiers' },
            { name: 'Humidifiers & Dehumidifiers', href: '/services/humidifiers' },
        ]
    },
    {
        category: 'Maintenance & Commercial',
        services: [
            { name: 'System Tune-Up', href: '/services/system-tune-up' },
            { name: 'Maintenance Plans', href: '/services/maintenance-plans' },
            { name: 'Commercial HVAC', href: '/services/commercial-hvac' },
        ]
    }
];

interface ServiceDetail {
    name: string;
    slug: string;
    tagline: string;
    imageUrl: string;
    description: string;
    benefits: string[];
    processSteps: { number: number; title: string; description: string }[];
    galleryImages: string[];
}

export const allServicesData: Record<string, ServiceDetail> = {
    'ac-installation': {
        name: 'AC Installation',
        slug: 'ac-installation',
        tagline: 'Stay Cool with Expert AC Installation',
        imageUrl: imageAsset('images/services/ac-installation.webp'),
        description: 'When the tropical heat hits, a reliable air conditioner isn\'t a luxury—it\'s a necessity. At KlimaPro PH, we specialize in seamless, high-efficiency AC installations tailored to your home\'s specific needs. Our certified technicians will help you choose the right system, ensuring optimal performance, energy savings, and ultimate comfort.',
        benefits: ['Lower Energy Bills', 'Improved Air Quality', 'Consistent Cooling', 'Increased Home Value', 'Quiet Operation'],
        processSteps: [
            { number: 1, title: 'Sizing', description: 'We perform a professional load calculation to determine the perfect size unit for your home.' },
            { number: 2, title: 'Selection', description: 'Choose from a range of high-efficiency models from trusted brands.' },
            { number: 3, title: 'Installation', description: 'Our certified technicians install your new AC system to manufacturer specifications.' },
            { number: 4, title: 'Testing', description: 'We test the system to ensure it runs at peak performance and efficiency.' },
        ],
        galleryImages: [
            imageAsset('images/gallery/hvac-1.webp'),
            imageAsset('images/gallery/hvac-2.webp'),
            imageAsset('images/gallery/hvac-3.webp'),
            imageAsset('images/gallery/hvac-4.webp'),
        ],
    },
    'ac-repair': {
        name: 'AC Repair',
        slug: 'ac-repair',
        tagline: 'Fast, Reliable Air Conditioner Repair',
        imageUrl: imageAsset('images/services/ac-repair.webp'),
        description: 'A broken AC on a hot tropical day is an emergency. Our team is ready to respond quickly with 24/7 emergency service. We diagnose issues accurately and provide transparent, upfront pricing before any work begins. From simple fixes to complex repairs, we have the tools and expertise to get your system back up and running in no time.',
        benefits: ['Restore Comfort Quickly', 'Prevent Further Damage', 'Improve System Efficiency', 'Extend Lifespan of Unit', 'Peace of Mind'],
        processSteps: [
            { number: 1, title: 'Diagnose', description: 'We\'ll perform a thorough inspection to pinpoint the exact cause of the problem.' },
            { number: 2, title: 'Quote', description: 'We provide a clear explanation of the issue and an upfront, transparent price quote.' },
            { number: 3, title: 'Repair', description: 'Our certified technicians use quality parts to perform the necessary repairs efficiently.' },
            { number: 4, title: 'Testing', description: 'We test the system thoroughly to ensure it\'s running safely and effectively before we leave.' },
        ],
        galleryImages: [
            imageAsset('images/gallery/hvac-3.webp'),
            imageAsset('images/gallery/hvac-4.webp'),
            imageAsset('images/gallery/hvac-2.webp'),
            imageAsset('images/gallery/hvac-1.webp'),
        ],
    },
    'ductless-systems': {
        name: 'Ductless Systems',
        slug: 'ductless-systems',
        tagline: 'Flexible, Efficient Zone Cooling & Heating',
        imageUrl: imageAsset('images/services/ductless-systems.webp'),
        description: 'Ductless mini-split systems offer a flexible and energy-efficient alternative to traditional HVAC. Perfect for home additions, older homes without ductwork, or for zoning specific areas, these systems provide targeted comfort where you need it most.',
        benefits: ['Energy Efficiency', 'Zoned Comfort', 'Easy Installation', 'Improved Air Quality', 'Quiet Operation'],
        processSteps: [
            { number: 1, title: 'Consultation', description: 'Assess your space and needs to determine the best ductless configuration.' },
            { number: 2, title: 'Placement', description: 'Strategically place indoor and outdoor units for optimal performance and aesthetics.' },
            { number: 3, title: 'Installation', description: 'Connect the units with minimal disruption to your home.' },
            { number: 4, title: 'Review', description: 'Demonstrate the system’s operation and remote control features.' },
        ],
        galleryImages: [
            imageAsset('images/gallery/hvac-2.webp'),
            imageAsset('images/gallery/hvac-1.webp'),
            imageAsset('images/gallery/hvac-3.webp'),
            imageAsset('images/gallery/hvac-4.webp'),
        ],
    },
    'heat-pump-services': {
        name: 'Heat Pump Services',
        slug: 'heat-pump-services',
        tagline: 'All-in-One Heating and Cooling Solution',
        imageUrl: imageAsset('images/services/heat-pump.webp'),
        description: 'Heat pumps are an incredibly efficient way to both heat and cool your home. They work by transferring heat, rather than creating it, providing year-round comfort in a single system. We offer expert installation, repair, and maintenance for all types of heat pumps.',
        benefits: ['Single System for Heating & Cooling', 'High Energy Efficiency', 'Lower Utility Bills', 'Reduced Carbon Footprint', 'Consistent Comfort'],
        processSteps: [
            { number: 1, title: 'Sizing', description: 'Properly size and select the right heat pump for your home’s specific requirements.' },
            { number: 2, title: 'Installation', description: 'Install the outdoor and indoor units and ensure proper refrigerant levels.' },
            { number: 3, title: 'Integration', description: 'Connect and configure the smart thermostat for optimal performance.' },
            { number: 4, title: 'Testing', description: 'Run the system in both heating and cooling modes to verify correct operation.' },
        ],
        galleryImages: [
            imageAsset('images/gallery/hvac-4.webp'),
            imageAsset('images/gallery/hvac-1.webp'),
            imageAsset('images/gallery/hvac-3.webp'),
            imageAsset('images/gallery/hvac-2.webp'),
        ],
    },
    'furnace-installation': {
        name: 'Furnace Installation',
        slug: 'furnace-installation',
        tagline: 'Reliable Heating for a Warm, Cozy Home',
        imageUrl: imageAsset('images/services/ac-repair.webp'),
        description: 'A dependable furnace is key to surviving cool seasons. We provide professional installation of high-efficiency gas and electric furnaces. Our experts will ensure your new system is sized correctly and installed for maximum safety and performance.',
        benefits: ['Improved Energy Efficiency', 'Reliable & Consistent Heat', 'Enhanced Safety Features', 'Long-Term Cost Savings', 'Quiet Performance'],
        processSteps: [
            { number: 1, title: 'Assessment', description: 'Evaluate your existing system, ductwork, and heating needs.' },
            { number: 2, title: 'Selection', description: 'Help you select a high-efficiency furnace that fits your home and budget.' },
            { number: 3, title: 'Installation', description: 'Remove the old unit and install the new furnace, ensuring all connections are secure.' },
            { number: 4, title: 'Checks', description: 'Perform thorough safety checks for gas leaks and carbon monoxide.' },
        ],
        galleryImages: [
            imageAsset('images/gallery/hvac-3.webp'),
            imageAsset('images/gallery/hvac-4.webp'),
            imageAsset('images/gallery/hvac-1.webp'),
            imageAsset('images/gallery/hvac-2.webp'),
        ],
    },
    'furnace-repair': {
        name: 'Furnace Repair',
        slug: 'furnace-repair',
        tagline: 'Expert Furnace Repair to Keep You Warm',
        imageUrl: imageAsset('images/services/heat-pump.webp'),
        description: 'When your furnace fails, you need fast, reliable service. Our certified technicians are available 24/7 to diagnose and fix any furnace issue. We service all makes and models, ensuring your heat is restored quickly and safely.',
        benefits: ['Fast Emergency Service', 'Safe & Reliable Repairs', 'Extend Furnace Lifespan', 'Improved Heating Performance', 'Upfront Pricing'],
        processSteps: [
            { number: 1, title: 'Diagnosis', description: 'Identify the root cause of the furnace problem using advanced diagnostic tools.' },
            { number: 2, title: 'Explanation', description: 'Explain the issue and provide a detailed quote before any work begins.' },
            { number: 3, title: 'Repair', description: 'Use high-quality parts to complete the repair and restore your heat.' },
            { number: 4, title: 'Testing', description: 'Ensure the furnace is operating safely and efficiently.' },
        ],
        galleryImages: [
            imageAsset('images/gallery/hvac-4.webp'),
            imageAsset('images/gallery/hvac-3.webp'),
            imageAsset('images/gallery/hvac-1.webp'),
            imageAsset('images/gallery/hvac-2.webp'),
        ],
    },
    'boiler-services': {
        name: 'Boiler Services',
        slug: 'boiler-services',
        tagline: 'Comprehensive Boiler Installation & Repair',
        imageUrl: imageAsset('images/services/ac-installation.webp'),
        description: 'Boilers provide comfortable, radiant heat that is gentle and consistent. Our team specializes in the installation, repair, and maintenance of residential boiler systems. Trust our experts for all your hydronic heating needs.',
        benefits: ['Comfortable Radiant Heat', 'Quiet Operation', 'High Efficiency', 'Long System Lifespan', 'Excellent Air Quality'],
        processSteps: [
            { number: 1, title: 'Assessment', description: 'Inspect your current boiler system or assess your home for a new installation.' },
            { number: 2, title: 'Service', description: 'Perform expert repairs or install a new high-efficiency boiler system.' },
            { number: 3, title: 'Check', description: 'Ensure all radiators or in-floor heating loops are functioning correctly.' },
            { number: 4, title: 'Testing', description: 'Test the system for leaks and ensure it is operating at the correct pressure.' },
        ],
        galleryImages: [
            imageAsset('images/gallery/hvac-1.webp'),
            imageAsset('images/gallery/hvac-2.webp'),
            imageAsset('images/gallery/hvac-3.webp'),
            imageAsset('images/gallery/hvac-4.webp'),
        ],
    },
    'duct-cleaning': {
        name: 'Duct Cleaning',
        slug: 'duct-cleaning',
        tagline: 'Breathe Cleaner, Healthier Air',
        imageUrl: imageAsset('images/services/ductless-systems.webp'),
        description: 'Over time, your home\'s air ducts can accumulate dust, debris, allergens, and mold. Our professional duct cleaning service removes these contaminants, improving your indoor air quality and helping your HVAC system run more efficiently.',
        benefits: ['Removes Allergens & Dust', 'Improves Airflow', 'Enhances HVAC Efficiency', 'Reduces Odors', 'Healthier Living Environment'],
        processSteps: [
            { number: 1, title: 'Inspection', description: 'Inspect the ductwork to assess the level of contamination.' },
            { number: 2, title: 'Vacuum', description: 'Connect a high-powered vacuum system to create negative pressure.' },
            { number: 3, title: 'Agitation', description: 'Use specialized tools to agitate and dislodge debris from duct walls.' },
            { number: 4, title: 'Cleaning', description: 'Clean registers, grilles, and the furnace blower for a complete service.' },
        ],
        galleryImages: [
            imageAsset('images/gallery/hvac-2.webp'),
            imageAsset('images/gallery/hvac-1.webp'),
            imageAsset('images/gallery/hvac-3.webp'),
            imageAsset('images/gallery/hvac-4.webp'),
        ],
    },
    'air-purifiers': {
        name: 'Air Purifiers',
        slug: 'air-purifiers',
        tagline: 'Whole-Home Air Purification Systems',
        imageUrl: imageAsset('images/services/ac-repair.webp'),
        description: 'Go beyond standard filtration with a whole-home air purifier. These systems integrate directly with your HVAC system to remove airborne contaminants like viruses, bacteria, pollen, and VOCs, providing cleaner air in every room of your house.',
        benefits: ['Removes Up to 99% of Contaminants', 'Reduces Allergies & Asthma', 'Neutralizes Odors', 'Captures Viruses & Bacteria', 'Low Maintenance'],
        processSteps: [
            { number: 1, title: 'Testing', description: 'Assess your indoor air quality to recommend the right purification system.' },
            { number: 2, title: 'Integration', description: 'Professionally install the air purifier into your existing HVAC system.' },
            { number: 3, title: 'Sealing', description: 'Ensure all connections are sealed and the system is operating correctly.' },
            { number: 4, title: 'Maintenance', description: 'Explain filter replacement schedules and ongoing maintenance.' },
        ],
        galleryImages: [
            imageAsset('images/gallery/hvac-3.webp'),
            imageAsset('images/gallery/hvac-4.webp'),
            imageAsset('images/gallery/hvac-1.webp'),
            imageAsset('images/gallery/hvac-2.webp'),
        ],
    },
    'humidifiers': {
        name: 'Humidifiers & Dehumidifiers',
        slug: 'humidifiers',
        tagline: 'Control Your Home\'s Humidity Levels',
        imageUrl: imageAsset('images/services/heat-pump.webp'),
        description: 'Proper humidity levels are crucial for comfort and health. Dry winter air can cause irritated sinuses and static electricity, while humid summer air can promote mold growth. We install whole-home systems to maintain optimal humidity year-round.',
        benefits: ['Increase Comfort', 'Protect Wood Floors & Furniture', 'Reduce Viruses & Bacteria', 'Prevent Mold & Mildew', 'Improve Energy Efficiency'],
        processSteps: [
            { number: 1, title: 'Analysis', description: 'Measure your home’s humidity levels and discuss your comfort goals.' },
            { number: 2, title: 'Selection', description: 'Recommend the best humidifier or dehumidifier for your home size and HVAC system.' },
            { number: 3, title: 'Installation', description: 'Integrate the unit with your ductwork and water supply (if applicable).' },
            { number: 4, title: 'Setup', description: 'Set up the humidistat and show you how to maintain your desired humidity level.' },
        ],
        galleryImages: [
            imageAsset('images/gallery/hvac-4.webp'),
            imageAsset('images/gallery/hvac-1.webp'),
            imageAsset('images/gallery/hvac-3.webp'),
            imageAsset('images/gallery/hvac-2.webp'),
        ],
    },
    'system-tune-up': {
        name: 'System Tune-Up',
        slug: 'system-tune-up',
        tagline: 'Preventative Maintenance for Peak Performance',
        imageUrl: imageAsset('images/services/ac-installation.webp'),
        description: 'Regular maintenance is the key to a long-lasting and efficient HVAC system. Our comprehensive tune-up service inspects, cleans, and adjusts your system to ensure it\'s ready for the season ahead, helping to prevent costly breakdowns and lower energy bills.',
        benefits: ['Prevent Breakdowns', 'Increase Efficiency', 'Lower Energy Costs', 'Improve Safety', 'Extend System Lifespan'],
        processSteps: [
            { number: 1, title: 'Inspection', description: 'Perform a multi-point inspection of all electrical and mechanical components.' },
            { number: 2, title: 'Cleaning', description: 'Clean condenser coils, blower components, and other critical parts.' },
            { number: 3, title: 'Calibration', description: 'Calibrate the thermostat and check refrigerant levels.' },
            { number: 4, title: 'Reporting', description: 'Provide a detailed report of your system’s health and any recommendations.' },
        ],
        galleryImages: [
            imageAsset('images/gallery/hvac-1.webp'),
            imageAsset('images/gallery/hvac-2.webp'),
            imageAsset('images/gallery/hvac-3.webp'),
            imageAsset('images/gallery/hvac-4.webp'),
        ],
    },
    'maintenance-plans': {
        name: 'Maintenance Plans',
        slug: 'maintenance-plans',
        tagline: 'Peace of Mind with Our Comfort Plan',
        imageUrl: imageAsset('images/services/ductless-systems.webp'),
        description: 'Protect your investment with our Comfort Plan. For a low annual fee, you get two precision tune-ups per year (one for heating, one for cooling), priority service, and discounts on any necessary repairs. It\'s the easiest way to keep your system running at its best.',
        benefits: ['Two Annual Tune-Ups', 'Priority Scheduling', 'Discounts on Repairs', 'No Overtime Charges', 'Transferable Plan'],
        processSteps: [
            { number: 1, title: 'Select', description: 'Select the maintenance plan that best fits your needs and equipment.' },
            { number: 2, title: 'Schedule', description: 'We’ll schedule your first maintenance visit at a time that works for you.' },
            { number: 3, title: 'Enjoy', description: 'Relax knowing your system is protected and you have priority access to our team.' },
            { number: 4, title: 'Reminders', description: 'We\'ll remind you when it\'s time for your next scheduled tune-up.' },
        ],
        galleryImages: [
            imageAsset('images/gallery/hvac-2.webp'),
            imageAsset('images/gallery/hvac-1.webp'),
            imageAsset('images/gallery/hvac-3.webp'),
            imageAsset('images/gallery/hvac-4.webp'),
        ],
    },
    'commercial-hvac': {
        name: 'Commercial HVAC',
        slug: 'commercial-hvac',
        tagline: 'Reliable HVAC Solutions for Your Business',
        imageUrl: imageAsset('images/services/ac-repair.webp'),
        description: 'We provide comprehensive HVAC services for commercial properties, including rooftop units, multi-zone systems, and preventative maintenance contracts. Our goal is to keep your business comfortable for employees and customers, while minimizing downtime and operational costs.',
        benefits: ['Rooftop Unit Expertise', 'Customized Maintenance Plans', 'Fast, Reliable Service', 'Energy Management Solutions', 'Improved Tenant/Employee Comfort'],
        processSteps: [
            { number: 1, title: 'Evaluation', description: 'Thoroughly assess your commercial property’s unique HVAC requirements.' },
            { number: 2, title: 'Proposal', description: 'Provide a detailed proposal for new installations, retrofits, or maintenance contracts.' },
            { number: 3, title: 'Execution', description: 'Our certified commercial technicians perform the work efficiently and to code.' },
            { number: 4, title: 'Support', description: 'Offer ongoing maintenance and priority support to keep your business running smoothly.' },
        ],
        galleryImages: [
            imageAsset('images/gallery/hvac-3.webp'),
            imageAsset('images/gallery/hvac-4.webp'),
            imageAsset('images/gallery/hvac-1.webp'),
            imageAsset('images/gallery/hvac-2.webp'),
        ],
    },
};


export const processSteps = [
    { number: 1, title: 'Diagnose', description: 'We\'ll perform a thorough inspection to pinpoint the exact cause of the problem.' },
    { number: 2, title: 'Quote', description: 'We provide a clear explanation of the issue and an upfront, transparent price quote.' },
    { number: 3, title: 'Repair', description: 'Our certified technicians use quality parts to perform the necessary repairs efficiently.' },
    { number: 4, title: 'Test', description: 'We test the system thoroughly to ensure it\'s running safely and effectively before we leave.' },
];

export const whyChooseUsPoints = [
    { 
        icon: <FaShieldAlt size={28} color="#2563eb" aria-hidden />,
        title: 'Safety Certified', 
        description: 'Our technicians are fully certified and trained to handle all repairs safely, protecting your home and family.' 
    },
    { 
        icon: <FaHandsHelping size={28} color="#2563eb" aria-hidden />,
        title: 'Warranty on Parts', 
        description: 'We stand by our work with a comprehensive warranty on all parts and labor for your peace of mind.' 
    },
    { 
        icon: <FaStar size={28} color="#2563eb" aria-hidden />,
        title: 'Increased Efficiency', 
        description: 'A professional repair can improve your furnace\'s efficiency, lowering your energy bills.' 
    },
];

export const testimonialsData = [
    {
        quote: "KlimaPro PH was a lifesaver! Our AC went out during the hot season, and they had a technician here the same day. Professional, quick, and reasonably priced. Highly recommend!",
        name: "Maria Santos",
        location: "Quezon City, Metro Manila",
        rating: 5,
    },
    {
        quote: "The team that installed our new AC system was fantastic. They were clean, respectful of our home, and explained everything clearly. The new system works perfectly.",
        name: "Jose Reyes",
        location: "Makati City, Metro Manila",
        rating: 5,
    },
    {
        quote: "I signed up for their maintenance plan last year and it's been great. Two check-ups a year gives me peace of mind, and the priority service is a nice perk. Great value.",
        name: "Ana Cruz",
        location: "Cebu City, Cebu",
        rating: 5,
    },
];

export const faqData = [
    {
        question: "How often should I get my HVAC system serviced?",
        answer: "We recommend professional maintenance twice a year. An AC tune-up in the spring and a furnace check-up in the fall ensures your system runs efficiently and helps prevent costly breakdowns."
    },
    {
        question: "What are the signs that I might need a new AC unit?",
        answer: "Common signs include your unit being over 10-15 years old, frequent and costly repairs, high energy bills, inconsistent temperatures, and strange noises. We can provide a free consultation to assess your system."
    },
    {
        question: "Do you offer 24/7 emergency services?",
        answer: "Yes, we do! We understand that HVAC emergencies can happen at any time. Our technicians are on-call 24/7 to provide prompt and reliable emergency repair services for your heating and cooling systems."
    },
    {
        question: "What is a ductless mini-split system?",
        answer: "A ductless mini-split is a highly efficient heating and cooling system that doesn't require traditional ductwork. It's an excellent solution for home additions, older homes, or for creating specific temperature zones within your house."
    },
    {
        question: "What are the benefits of joining the Comfort Plan?",
        answer: "Our Comfort Plan members enjoy two annual tune-ups, priority scheduling for service calls, exclusive discounts on repairs and parts, and no overtime charges. It's the best way to ensure your system's longevity and performance."
    }
];
