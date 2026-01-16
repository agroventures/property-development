import React from 'react'
import Hero from '../common/Hero';

const AboutHero = () => {
    return (
        <Hero 
            page="about"
            pageTitle="About Us"
            img="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            imgAlt="Modern Architecture"
            badgeText="Established Since 2008"
            title="Redefining Luxury Living"
            highlightedText="AV Properties"
            description="For over 15 years, AV Properties has been the trusted name in premium real estate, connecting discerning clients with exceptional properties worldwide."
        />
    );
};


export default AboutHero
