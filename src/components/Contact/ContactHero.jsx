import React from 'react'
import Hero from '../common/Hero';

const ContactHero = () => {
    return (
        <Hero 
            page="contact"
            pageTitle="Contact Us"
            img="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            imgAlt="Contact Us"
            badgeText="We're Here to Help"
            title="Get In"
            highlightedText="Touch"
            description="Have questions about buying, selling, or renting? Our expert team is ready to assist you every step of the way. Reach out today!"
        />
    );
};

export default ContactHero