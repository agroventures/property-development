import React from 'react'

const PropertyCategories = () => {
  const categories = [
    {
      name: 'Houses',
      count: '2,500+',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    },
    {
      name: 'Apartments',
      count: '3,200+',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1035&q=80',
    },
    {
      name: 'Villas',
      count: '800+',
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    },
    {
      name: 'Condos',
      count: '1,500+',
      image: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80',
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold">Browse By</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Property Categories
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                <p className="text-gray-300">{category.count} listings</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyCategories
