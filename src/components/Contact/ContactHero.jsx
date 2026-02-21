import React from 'react'
import Hero from '../common/Hero';

const ContactHero = () => {
    return (
        <Hero 
            page="contact"
            pageTitle="Contact Us"
            img="https://images.unsplash.com/photo-1729505305192-610539203144?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            imgAlt="Contact Us"
            badgeText="We're Here to Help"
            title="Get In"
            highlightedText="Touch"
            description="Have questions about buying, selling, or renting? Our expert team is ready to assist you every step of the way. Reach out today!"
        />
    );
};

export default ContactHero