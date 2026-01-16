import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import CTA from '../components/common/CTA'
import AboutHero from '../components/About/AboutHero'
import OurStory from '../components/About/OurStory'
import CoreValues from '../components/About/CoreValues'
import MissionVision from '../components/About/MissionVision'
import TeamSection from '../components/About/TeamSection'

function About() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <AboutHero />
            <OurStory />
            <MissionVision />
            <CoreValues />
            <TeamSection />
            <Footer />
        </div>
    )
}

export default About
