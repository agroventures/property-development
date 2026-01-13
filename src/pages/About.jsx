import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import CTA from '../components/Home/CTA'
import AboutHero from '../components/About/AboutHero'
import OurStory from '../components/About/OurStory'
import StatsSection from '../components/About/StatsSection'
import CoreValues from '../components/About/CoreValues'
import MissionVision from '../components/About/MissionVision'
import TeamSection from '../components/About/TeamSection'
import TimelineSection from '../components/About/TimelineSection'
import AwardsSection from '../components/About/AwardsSection'

function About() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <AboutHero />
            <OurStory />
            <StatsSection />
            <MissionVision />
            <CoreValues />
            <TeamSection />
            <TimelineSection />
            <AwardsSection />
            <CTA />
            <Footer />
        </div>
    )
}

export default About
