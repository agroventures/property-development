import { Link } from 'react-router-dom'
import RevealSection from '../common/RevealSection'

function HomeAbout() {
    return (
        <section id="about" className="py-24 sm:py-32 bg-bg-main">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Images */}
                    <RevealSection>
                        <div className="relative">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4">
                                    <div className="rounded-3xl overflow-hidden shadow-gold border border-border-muted/40">
                                        <img
                                            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=500&fit=crop"
                                            alt="Interior"
                                            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="rounded-3xl overflow-hidden shadow-gold border border-border-muted/40">
                                        <img
                                            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=300&fit=crop"
                                            alt="Pool"
                                            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-4 pt-8">
                                    <div className="rounded-3xl overflow-hidden shadow-gold border border-border-muted/40">
                                        <img
                                            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop"
                                            alt="Exterior"
                                            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="rounded-3xl overflow-hidden shadow-gold border border-border-muted/40">
                                        <img
                                            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=500&fit=crop"
                                            alt="Garden"
                                            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Floating badge */}
                            <div className="absolute -bottom-6 -right-4 bg-ivory-50 rounded-2xl shadow-gold-lg p-6 border border-border-muted hidden sm:block">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-gradient-gold rounded-xl flex items-center justify-center shadow-gold">
                                        <svg
                                            className="w-7 h-7 text-black-900"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-2xl font-display font-bold text-black-800">
                                            1+
                                        </p>
                                        <p className="text-sm text-text-secondary">
                                            Years of Excellence
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </RevealSection>

                    {/* Copy */}
                    <RevealSection delay="delay-150">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-50 border border-gold-200 rounded-full mb-6">
                                <span className="w-2 h-2 bg-gold-500 rounded-full" />
                                <span className="text-sm text-gold-700 font-semibold tracking-wide">
                                    About Our Company
                                </span>
                            </div>

                            <h2 className="text-4xl sm:text-5xl font-display font-bold text-black-800 leading-tight">
                                Building Dreams,{" "}
                                <span className="text-gradient">Delivering Excellence</span>
                            </h2>

                            <p className="mt-6 text-lg text-text-secondary leading-relaxed">
                                Founded in 2025,{" "}
                                <strong className="text-black-800">Prestige Realty</strong> has
                                grown to become one of the most trusted names in real estate.
                                We combine deep market expertise with a client-first approach
                                to deliver exceptional results.
                            </p>

                            <p className="mt-4 text-text-secondary leading-relaxed">
                                Our dedicated team of 50+ experienced agents works tirelessly
                                to match you with properties that align with your vision,
                                whether you're buying your first home, investing in commercial
                                real estate, or seeking a luxury retreat.
                            </p>

                            <div className="mt-8 grid grid-cols-2 gap-4">
                                {[
                                    "Licensed & Certified",
                                    "24/7 Customer Support",
                                    "Transparent Pricing",
                                    "Personalized Service",
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 bg-gold-100 rounded-full flex items-center justify-center shrink-0">
                                            <svg
                                                className="w-3.5 h-3.5 text-gold-600"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={3}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                        </div>
                                        <span className="text-sm font-medium text-text-secondary">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10 flex flex-wrap gap-4">
                                <Link
                                    to="/services"
                                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-gold text-black-900 font-bold rounded-xl shadow-gold hover:shadow-gold-lg hover:-translate-y-0.5 transition-all duration-300"
                                >
                                    Our Services
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </Link>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-ivory-200 text-text-secondary font-semibold rounded-xl hover:bg-ivory-300 transition-all duration-200"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </RevealSection>
                </div>
            </div>
        </section>
    )
}

export default HomeAbout
