import React from 'react'

const Newsletter = () => {
  return (
    <section className="py-16 bg-primary-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-primary-950 mb-4">
          Stay Updated with Exclusive Listings
        </h3>
        <p className="text-gray-600 mb-8">
          Subscribe to receive updates on new luxury properties and market insights.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          <button className="bg-linear-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-gold whitespace-nowrap">
            Subscribe Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter
