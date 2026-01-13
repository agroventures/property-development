import React from 'react'

const CTA = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-blue-600 to-indigo-600 p-12 md:p-20">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white"></div>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Find Your Dream Home?
              </h2>
              <p className="text-blue-100 text-lg max-w-xl">
                Join thousands of happy homeowners. Let us help you find the perfect property today.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition transform hover:scale-105">
                Browse Properties
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition">
                Contact Agent
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA
