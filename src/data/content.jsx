import { Award, Clock, Eye, Facebook, Globe, Group, Instagram, Leaf, Linkedin, Mail, MapPin, Phone, Recycle, Shield, Youtube } from "lucide-react";

// Nav Links
export const navLinks = [
    { id: 1, name: 'Home', url: '/' },
    { id: 2, name: 'About', url: '/about' },
    { id: 3, name: 'Properties', url: '/properties' },
    { id: 4, name: 'Services', url: '/services' },
    { id: 5, name: 'Contact', url: '/contact' },
];

// Stats
export const stats = [
    { value: '500+', label: 'Luxury Properties' },
    { value: '50+', label: 'Expert Agents' },
    { value: '10K+', label: 'Happy Clients' },
]

// testimonials
export const testimonials = [
    {
        name: 'Sarah Johnson',
        role: 'Homeowner',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
        content: 'EstateHub made finding our dream home so easy! The team was incredibly helpful and guided us through every step of the process.',
        rating: 5,
    },
    {
        name: 'Michael Chen',
        role: 'Property Investor',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        content: 'As an investor, I appreciate their market insights and professional approach. They helped me find properties with great ROI potential.',
        rating: 5,
    },
    {
        name: 'Emily Davis',
        role: 'First-time Buyer',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        content: 'Being a first-time buyer was overwhelming, but the EstateHub team made it stress-free. I couldn\'t be happier with my new apartment!',
        rating: 5,
    },
];

// Team
export const team = [
    {
        name: 'Prabhath Gamage',
        role: 'General Manager',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80',
        // bio: 'Former VP at Christie\'s Real Estate',
    },
    {
        name: 'Dhammika Gunasena',
        role: 'Operations Manager',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        // bio: '$1B+ in career sales',
    },
    {
        name: 'Sithumini Perera',
        role: 'Human Resources Executive',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=761&q=80',
        // bio: 'Award-winning marketing strategist',
    },
];


// Why Choose Us
export const whyChooseUs = [
    { icon: '🏡', title: 'Trusted Legacy', desc: 'Backed by Agroventures Plantations - a leader in sustainable agribusiness and land management.', sub: 'Backed by Agroventures Plantations' },
    { icon: '🌱', title: 'Sustainable Growth', desc: 'We develop communities that thrive environmentally, socially, and economically.', sub: 'Eco-friendly developments' },
    { icon: '📍', title: 'Strategic Locations', desc: 'Our properties are handpicked in rapidly appreciating growth corridors across Sri Lanka.', sub: 'Prime growth corridors' },
    { icon: '💎', title: 'Investor Confidence', desc: 'Transparent dealings, ethical standards, and strong ROI-focused planning ensure peace of mind.', sub: 'Strong ROI planning' },
]

// Pillars
export const pillars = [
    {
        icon: <Globe size={32} />,
        title: 'Rooted in Heritage',
        description:
            'Born from the soil of our successful plantation business, our developments carry a legacy of respect for nature and community.',
    },
    {
        icon: <Eye size={32} />,
        title: 'Driven by Vision',
        description:
            "Guided by our 2030 vision to be Sri Lanka's most trusted and innovative property developer.",
    },
    {
        icon: <Leaf size={32} />,
        title: 'Committed to Sustainability',
        description:
            'Every project integrates eco-friendly practices — from green infrastructure to low-impact construction.',
    },
    {
        icon: <Award size={32} />,
        title: 'Inspired by Excellence',
        description:
            'We work with the finest architects, engineers, and environmental planners to deliver unmatched value.',
    },
];

// Features
export const features = [
    'Investors seeking future-ready opportunities',
    'Homeowners dreaming of the perfect sanctuary',
    'Organizations exploring sustainable tourism ventures',
]

// Social Links
export const socialLinks = [
    { url: 'https://www.facebook.com/agroventurespropertydevelopment/', icon: <Facebook size={20} /> },
    { url: 'https://www.instagram.com/agroventuresproperty/', icon: <Instagram size={20} /> },
    { url: 'https://www.linkedin.com/company/agro-ventures-property-development/', icon: <Linkedin size={20} /> },
];

// Contact Info
export const contactInfo = [
    {
        icon: Phone,
        title: 'Phone',
        details: ['+94 77 123 4567'],
        color: 'bg-blue-50 text-blue-600'
    },
    {
        icon: Mail,
        title: 'Email',
        details: ['info@avproperty.lk.com'],
        color: 'bg-green-50 text-green-600'
    },
    {
        icon: MapPin,
        title: 'Address',
        details: ['48, Sir Marcus Fernando Mawathe, Colombo 07'],
        color: 'bg-purple-50 text-purple-600'
    },
    {
        icon: Clock,
        title: 'Business Hours',
        details: ['Mon - Fri: 8:30 AM - 5:00 PM', 'Sat: 8.30 AM - 12:30 PM'],
        color: 'bg-orange-50 text-orange-600'
    }
]

// Mission 
export const mission = ['Client-first approach', 'Transparency in all dealings', 'Excellence in execution'];

// Vision
export const vision = ['Global market leadership', 'Innovation in real estate', 'Sustainable growth practices'];

// Values
export const values = [
    {
        icon: <Shield />,
        title: 'Integrity',
        description: 'The foundation of every decision we make.',
    },
    {
        icon: <Globe />,
        title: 'Innovation',
        description: 'Constantly redefining modern real estate through smart and sustainable design.',
    },
    {
        icon: <Recycle />,
        title: 'Sustainability',
        description: ' Respecting the land, conserving resources, and minimizing our footprint.',
    },
    {
        icon: <Award />,
        title: 'Excellence',
        description: 'Delivering unmatched quality and service in every project.',
    },
    {
        icon: <Group />,
        title: 'Community',
        description: 'Creating developments that foster human connection and well-being.',
    }
];

// FAQS
export const faqs = [
    {
        question: 'What services do you offer for first-time buyers?',
        answer: 'We offer comprehensive support for first-time buyers including property search, mortgage guidance, legal assistance, and complete hand-holding through the entire buying process. Our experts will help you understand the market and make informed decisions.'
    },
    {
        question: 'How long does the property buying process take?',
        answer: 'The typical property buying process takes 4-8 weeks from offer acceptance to completion. However, this can vary based on factors like chain length, mortgage approval, and legal checks. We work to expedite this process wherever possible.'
    },
    {
        question: 'Do you offer property management services?',
        answer: 'Yes, we offer full property management services including tenant finding, rent collection, maintenance coordination, regular inspections, and financial reporting. Our management packages are flexible to suit your needs.'
    },
    {
        question: 'What are your fees for selling a property?',
        answer: 'Our selling fees are competitive and transparent. We typically charge between 1-2% of the final sale price, depending on the property value and services required. Contact us for a personalized quote based on your property.'
    },
    {
        question: 'Can you help with commercial properties?',
        answer: 'Absolutely! We have a dedicated commercial property team that handles office spaces, retail units, warehouses, and investment properties. We offer buying, selling, leasing, and management services for commercial real estate.'
    },
    {
        question: 'Do you provide valuation services?',
        answer: 'Yes, we provide professional property valuations for various purposes including sales, purchases, remortgaging, and insurance. Our RICS-certified valuers ensure accurate and reliable assessments.'
    }
]

// Approaches
export const approaches = [
    {
        icon: (
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
            </svg>
        ),
        title: 'Market Research & Feasibility',
        description:
            'Comprehensive market research and feasibility analysis to ensure every project is positioned for success.',
    },
    {
        icon: (
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
        ),
        title: 'Environmental Planning',
        description:
            'Environmentally sensitive land and infrastructure planning that preserves natural beauty.',
    },
    {
        icon: (
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
            </svg>
        ),
        title: 'Expert Partnerships',
        description:
            'Strong partnerships with leading architects, engineers, and sustainability consultants.',
    },
    {
        icon: (
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
            </svg>
        ),
        title: 'Client-Focused Practices',
        description:
            'Transparent and client-focused development practices that prioritize your vision and investment.',
    },
];

// Service Process
export const process = [
    {
        step: '01',
        title: 'Consultation & Planning',
        desc: 'Understanding your vision, requirements, and investment goals.',
    },
    {
        step: '02',
        title: 'Site Analysis & Design',
        desc: 'Comprehensive site evaluation and architectural concept development.',
    },
    {
        step: '03',
        title: 'Development & Construction',
        desc: 'Expert execution with quality materials and sustainable practices.',
    },
    {
        step: '04',
        title: 'Handover & Support',
        desc: 'Seamless property handover with ongoing after-sales support.',
    },
]


// Services
export const services = [
    {
        id: 1,
        title: 'Land Development',
        subtitle: 'Transforming Land into Legacy',
        description:
            'We specialize in identifying and transforming strategically located land into premium, investment-ready plots and sustainable residential communities.',
        details:
            'Our development process integrates modern infrastructure planning, green landscaping, and long-term land value appreciation.',
        icon: (
            <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
            </svg>
        ),
        image: "https://images.pexels.com/photos/2314021/pexels-photo-2314021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        features: [
            'Strategic location identification',
            'Infrastructure planning & development',
            'Green landscaping integration',
            'Investment-ready plot creation',
            'Community masterplanning',
            'Utility & road network development',
        ],
        project: {
            name: 'Green Valley Estate',
            location: 'Melsiripura',
            description:
                'A sustainable mixed-use land development combining residential, agricultural, and leisure spaces for a balanced lifestyle.',
            status: 'Ongoing',
            highlights: ['50+ Acres', 'Mixed-Use Development', 'Organic Living'],
        },
    },
    {
        id: 2,
        title: 'Residential Construction',
        subtitle: 'Building Dreams into Reality',
        description:
            'We design and build homes that embody luxury, functionality, and environmental harmony. Every project reflects architectural sophistication, smart living, and enduring craftsmanship.',
        details:
            'From contemporary villas to premium housing estates, our residential developments set new standards in modern living while respecting traditional values.',
        icon: (
            <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
            </svg>
        ),
        image: "https://images.pexels.com/photos/11827595/pexels-photo-11827595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        features: [
            'Architectural design excellence',
            'Smart home integration',
            'Sustainable building materials',
            'Premium interior finishes',
            'Energy-efficient systems',
            'Landscaped surroundings',
        ],
        project: {
            name: 'AgroHomes Enclave',
            location: 'Kurunegala',
            description:
                'A curated collection of modern homes and serviced plots that offer residents a premium lifestyle within a natural, serene environment.',
            status: 'Phase 2',
            highlights: ['Premium Villas', 'Serviced Plots', 'Gated Community'],
        },
    },
    {
        id: 3,
        title: 'Eco-Tourism Development',
        subtitle: 'Where Nature Meets Luxury',
        description:
            'Our eco-tourism ventures merge real estate with sustainability, creating exclusive destinations where nature and comfort coexist beautifully.',
        details:
            'We design experiences that nurture the environment while offering unique hospitality value, setting new benchmarks in responsible tourism.',
        icon: (
            <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
            </svg>
        ),
        image: "https://images.pexels.com/photos/1110656/pexels-photo-1110656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        features: [
            'Sustainable architecture',
            'Nature conservation integration',
            'Wellness & retreat facilities',
            'Eco-friendly operations',
            'Local community engagement',
            'Unique guest experiences',
        ],
        project: {
            name: 'The Nature Retreat',
            location: 'Matale',
            description:
                'An eco-luxury retreat that integrates conservation, wellness, and sustainable architecture in one breathtaking destination.',
            status: 'Coming Soon',
            highlights: ['Eco-Luxury', 'Wellness Center', 'Conservation Focus'],
        },
    },
];

// Service Summary
export const serviceSummary = [
    {
        icon: '🔍',
        title: 'Site Selection',
        desc: 'Strategic identification of high-potential land parcels.',
    },
    {
        icon: '📐',
        title: 'Master Planning',
        desc: 'Comprehensive planning for optimal land utilization.',
    },
    {
        icon: '🏛️',
        title: 'Architectural Design',
        desc: 'Innovative designs that blend form and function.',
    },
    {
        icon: '🌿',
        title: 'Sustainable Development',
        desc: 'Eco-friendly practices integrated at every stage.',
    },
    {
        icon: '🔨',
        title: 'Quality Construction',
        desc: 'Premium materials and expert craftsmanship.',
    },
    {
        icon: '🤝',
        title: 'Client Support',
        desc: 'Dedicated support from inquiry to handover.',
    },
]