const HomeHero = () => {
  return (
    <section
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        {/* bg image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop"
            alt="Luxury home"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black-900/90 via-black-900/70 to-black-900/40" />
          <div className="absolute inset-0 bg-linear-to-t from-black-900/60 via-transparent to-transparent" />
        </div>

        {/* Decorative glow */}
        <div className="absolute top-24 right-20 w-80 h-80 bg-gold-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold-600/8 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          <div className="max-w-3xl animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-gold-500/30 rounded-full mb-8">
              <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
              <span className="text-sm text-gold-200 font-medium tracking-wide">
                Trusted by 2,500+ Happy Homeowners
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-ivory-50 leading-tight tracking-tight">
              Discover Your
              <br />
              <span className="text-gradient">Dream Home</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-ivory-300 leading-relaxed max-w-2xl">
              Experience luxury living with Prestige Realty. We connect you with
              exceptional properties that match your lifestyle, aspirations, and
              investment goals.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#properties"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-gold text-black-900 font-bold rounded-2xl shadow-gold hover:shadow-gold-lg hover:-translate-y-1 transition-all duration-300"
              >
                Explore Properties
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-ivory-400/25 text-ivory-100 font-semibold rounded-2xl hover:bg-white/20 transition-all duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Watch Video
              </a>
            </div>

            {/* Quick search */}
            <div className="mt-14 p-2 bg-white/10 backdrop-blur-md border border-ivory-400/15 rounded-2xl max-w-2xl">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex-1 relative">
                  <svg
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ivory-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search by location..."
                    className="w-full pl-12 pr-4 py-3.5 bg-ivory-50 rounded-xl text-black-800 placeholder-ivory-400 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                  />
                </div>
                <select className="px-4 py-3.5 bg-ivory-50 rounded-xl text-text-secondary text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 cursor-pointer">
                  <option>All Types</option>
                  <option>Villa</option>
                  <option>Penthouse</option>
                  <option>Apartment</option>
                  <option>Cottage</option>
                </select>
                <button className="px-8 py-3.5 bg-gradient-gold text-black-900 font-bold rounded-xl shadow-gold hover:shadow-gold-lg transition-all duration-200">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-linear-to-t from-bg-main to-transparent" />
      </section>
  );
};

export default HomeHero;