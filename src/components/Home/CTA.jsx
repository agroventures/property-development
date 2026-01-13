import React from 'react'

const CTA = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[3rem] bg-linear-to-br from-primary-950 via-primary-900 to-primary-950 p-12 md:p-20">
          {/* Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"></div>
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 border border-primary-400 rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-48 h-48 border border-primary-400 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 w-64 h-64 border border-primary-400 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="text-center lg:text-left max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Begin Your Journey to
                <span className="block text-primary-400">Exceptional Living</span>
              </h2>
              <p className="text-gray-300 text-xl leading-relaxed">
                Schedule a private consultation with our expert advisors and discover properties that match your lifestyle and aspirations.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-linear-to-r from-primary-500 to-primary-600 text-white px-10 py-5 rounded-full font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-gold-lg transform hover:-translate-y-1 text-lg">
                Schedule Consultation
              </button>
              <button className="border-2 border-primary-400 text-primary-300 px-10 py-5 rounded-full font-semibold hover:bg-primary-500/10 transition-all duration-300 text-lg">
                View Collection
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA
