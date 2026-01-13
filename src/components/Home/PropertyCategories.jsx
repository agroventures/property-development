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
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-flex items-center justify-center space-x-2 text-primary-600 font-semibold">
                        <span className="w-12 h-0.5 bg-primary-500"></span>
                        <span>Browse Categories</span>
                        <span className="w-12 h-0.5 bg-primary-500"></span>
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary-950 mt-4">
                        Explore by Property Type
                    </h2>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-3xl cursor-pointer h-96"
                        >
                            <img
                                src={category.image}
                                alt={category.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-primary-950 via-primary-950/50 to-transparent"></div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <div className="transform group-hover:-translate-y-2 transition-transform duration-300">
                                    <span className="inline-block px-3 py-1 bg-primary-500/80 text-white text-sm rounded-full mb-3">
                                        {category.count} Properties
                                    </span>
                                    <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                                    <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {category.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PropertyCategories
