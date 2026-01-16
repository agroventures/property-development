import { Award, Eye, Facebook, Globe, Group, Instagram, Leaf, Linkedin, Recycle, Shield, Youtube } from "lucide-react";

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
        role: 'Chief Operating Officer',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80',
        bio: 'Former VP at Christie\'s Real Estate',
    },
    {
        name: 'Dhammika Dissanayake',
        role: 'Director of Sales',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        bio: '$1B+ in career sales',
    },
    {
        name: 'Sithumini Perera',
        role: 'Head of Marketing',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=761&q=80',
        bio: 'Award-winning marketing strategist',
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
    { url: 'https://facebook.com/agroventurespropertydevelopment', icon: <Facebook size={20} /> },
    { url: 'https://www.instagram.com/agroventurespropertydevelopment/', icon: <Instagram size={20} /> },
    { url: 'https://www.linkedin.com/company/agroventures-property-development', icon: <Linkedin size={20} /> },
    { url: 'https://www.youtube.com/@AgroVenturesPropertyDevelopment', icon: <Youtube size={20} /> },
];

// COntact Info
export const contactInfo = [
    { icon: '📍', label: 'Address', value: 'Colombo, Sri Lanka' },
    { icon: '📞', label: 'Phone', value: '+94 11 234 5678' },
    { icon: '✉️', label: 'Email', value: 'info@avproperty.lk', },
    { icon: '🕒', label: 'Hours', value: 'Mon - Sat: 9AM - 6PM' },
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