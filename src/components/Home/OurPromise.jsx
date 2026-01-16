import { Heart } from 'lucide-react'
import React from 'react'
import SectionTitle from '../common/SectionTitle'

function OurPromise() {
    return (
        <section className="py-20 lg:py-25 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `linear-gradient(45deg, rgba(163, 150, 98, 0.3) 25%, transparent 25%), 
                               linear-gradient(-45deg, rgba(163, 150, 98, 0.3) 25%, transparent 25%), 
                               linear-gradient(45deg, transparent 75%, rgba(163, 150, 98, 0.3) 75%), 
                               linear-gradient(-45deg, transparent 75%, rgba(163, 150, 98, 0.3) 75%)`,
                        backgroundSize: '60px 60px',
                        backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px',
                    }}
                />
            </div>

            <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
                {/* <div className="inline-flex items-center gap-3 bg-gold-500/10 text-text-secondary border border-gold-500/30 rounded-full px-6 py-3 mb-8"> */}
                    <SectionTitle title="Our Promise" />
                {/* </div> */}

                <h2 className="font-display text-3xl lg:text-5xl font-bold text-text-primary mb-8 leading-tight">
                    We Create{' '}
                    <span className="text-gradient">Meaningful Spaces</span> That
                    <br className="hidden lg:block" /> Empower Lifestyles & Preserve
                    Nature
                </h2>

                <p className="text-text-secondary text-xl leading-relaxed max-w-3xl mx-auto mb-12">
                    At Agroventures Property Development, we do not just sell land or build
                    homes - we create meaningful spaces that empower lifestyles, preserve
                    nature, and deliver long-term value. Our promise is to keep every
                    development grounded in sustainability while elevating the standards of
                    real estate excellence in Sri Lanka.
                </p>

                <div className="font-display text-2xl text-gold-400 italic">
                    "Discover the future of living - the Agroventures way."
                </div>
            </div>
        </section>

    )
}

export default OurPromise
