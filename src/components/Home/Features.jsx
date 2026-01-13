import React from 'react'

const Features = () => {
  const features = [
    {
      icon: '🏠',
      title: 'Wide Range of Properties',
      description: 'From cozy apartments to luxurious villas, find the perfect property that suits your needs and budget.',
    },
    {
      icon: '💰',
      title: 'Best Price Guarantee',
      description: 'We ensure you get the best market value for every property with our price match promise.',
    },
    {
      icon: '🔒',
      title: 'Secure Transactions',
      description: 'Your safety is our priority. All transactions are protected with bank-level security.',
    },
    {
      icon: '👥',
      title: 'Expert Guidance',
      description: 'Our experienced agents guide you through every step of the buying or selling process.',
    },
    {
      icon: '📱',
      title: 'Easy Property Search',
      description: 'Advanced filters and intuitive search help you find your dream property in minutes.',
    },
    {
      icon: '🎯',
      title: 'Personalized Matches',
      description: 'AI-powered recommendations based on your preferences and search history.',
    },
  ];

  return (
    <section className="py-20 bg-linear-to-br from-blue-600 to-indigo-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-200 font-semibold">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            We Make Finding Your Dream Home Easy
          </h2>
          <p className="text-blue-100 mt-4 max-w-2xl mx-auto">
            With over 10 years of experience in real estate, we've helped thousands of families find their perfect home.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-blue-100">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features
