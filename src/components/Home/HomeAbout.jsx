import React from 'react'
import SectionTitle from '../common/SectionTitle'

function HomeAbout() {
    return (
        <section className="py-20 lg:py-25 bg-bg-main">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <SectionTitle title="About Our Company" />
                </div>
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="animate-slide-up">
                        <img
                            src="https://images.unsplash.com/photo-1656646425022-3b4cff0bc8e2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Office"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>

                    <div>
                        <h2 className="font-display text-3xl lg:text-5xl font-bold text-text-primary mb-6 leading-tight">
                            Agroventures{' '}
                            <span className="text-gold-500">Property Development</span>
                        </h2>
                        <p className="text-text-secondary text-lg leading-relaxed mb-6">
                            Welcome to Agroventures Property Development (Pvt) Ltd, Sri Lanka’s emerging icon in
                            premium real estate and sustainable property development. As a proud subsidiary of
                            Agroventures Plantations (Pvt) Ltd, our foundation is rooted in the richness of the earth -
                            transforming agricultural heritage into thriving residential communities, luxury estates, and
                            eco-tourism destinations that redefine modern living.
                        </p>
                        <p className="text-text-secondary text-lg leading-relaxed mb-8">
                            Our philosophy is simple yet powerful - to create developments that harmonize nature,
                            architecture, and human aspiration. Every project we undertake is designed not just to build
                            on land, but to build a legacy that endures through generations.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeAbout
