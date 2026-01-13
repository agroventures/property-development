// components/Properties/PropertyGrid.jsx
import React, { useState } from 'react'
import PropertyCard from './PropertyCard'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const properties = [
    {
        id: 1,
        title: 'Luxury Penthouse with Ocean View',
        address: '123 Ocean Drive, Miami Beach, FL',
        price: 2500000,
        priceType: 'sale',
        beds: 4,
        baths: 3,
        sqft: 3500,
        garage: 2,
        image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ],
        type: 'Penthouse',
        status: 'For Sale',
        featured: true,
        new: true,
        agent: {
            name: 'Sarah Johnson',
            image: 'https://randomuser.me/api/portraits/women/44.jpg'
        }
    },
    {
        id: 2,
        title: 'Modern Downtown Apartment',
        address: '456 Main Street, New York, NY',
        price: 4500,
        priceType: 'rent',
        beds: 2,
        baths: 2,
        sqft: 1200,
        garage: 1,
        image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ],
        type: 'Apartment',
        status: 'For Rent',
        featured: false,
        new: true,
        agent: {
            name: 'Michael Chen',
            image: 'https://randomuser.me/api/portraits/men/32.jpg'
        }
    },
    {
        id: 3,
        title: 'Elegant Family Villa',
        address: '789 Palm Avenue, Los Angeles, CA',
        price: 1850000,
        priceType: 'sale',
        beds: 5,
        baths: 4,
        sqft: 4200,
        garage: 3,
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ],
        type: 'Villa',
        status: 'For Sale',
        featured: true,
        new: false,
        agent: {
            name: 'Emily Davis',
            image: 'https://randomuser.me/api/portraits/women/68.jpg'
        }
    },
    {
        id: 4,
        title: 'Cozy Studio in Historic District',
        address: '321 Heritage Lane, Boston, MA',
        price: 1800,
        priceType: 'rent',
        beds: 1,
        baths: 1,
        sqft: 650,
        garage: 0,
        image: 'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ],
        type: 'Studio',
        status: 'For Rent',
        featured: false,
        new: false,
        agent: {
            name: 'David Wilson',
            image: 'https://randomuser.me/api/portraits/men/75.jpg'
        }
    },
    {
        id: 5,
        title: 'Waterfront Contemporary Home',
        address: '567 Lakeshore Drive, Chicago, IL',
        price: 3200000,
        priceType: 'sale',
        beds: 6,
        baths: 5,
        sqft: 5500,
        garage: 3,
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ],
        type: 'House',
        status: 'For Sale',
        featured: true,
        new: true,
        agent: {
            name: 'Jessica Brown',
            image: 'https://randomuser.me/api/portraits/women/90.jpg'
        }
    },
    {
        id: 6,
        title: 'Charming Suburban Townhouse',
        address: '890 Maple Street, Austin, TX',
        price: 475000,
        priceType: 'sale',
        beds: 3,
        baths: 2,
        sqft: 1800,
        garage: 2,
        image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ],
        type: 'Townhouse',
        status: 'For Sale',
        featured: false,
        new: false,
        agent: {
            name: 'Robert Taylor',
            image: 'https://randomuser.me/api/portraits/men/45.jpg'
        }
    },
    {
        id: 7,
        title: 'Luxury Condo with City Views',
        address: '234 Skyline Boulevard, Seattle, WA',
        price: 5500,
        priceType: 'rent',
        beds: 3,
        baths: 2,
        sqft: 2000,
        garage: 2,
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ],
        type: 'Condo',
        status: 'For Rent',
        featured: true,
        new: false,
        agent: {
            name: 'Amanda White',
            image: 'https://randomuser.me/api/portraits/women/33.jpg'
        }
    },
    {
        id: 8,
        title: 'Rustic Mountain Retreat',
        address: '678 Pine Ridge Road, Denver, CO',
        price: 925000,
        priceType: 'sale',
        beds: 4,
        baths: 3,
        sqft: 2800,
        garage: 2,
        image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ],
        type: 'House',
        status: 'For Sale',
        featured: false,
        new: true,
        agent: {
            name: 'Chris Martinez',
            image: 'https://randomuser.me/api/portraits/men/22.jpg'
        }
    },
    {
        id: 9,
        title: 'Beachfront Paradise Villa',
        address: '111 Coastal Highway, San Diego, CA',
        price: 4500000,
        priceType: 'sale',
        beds: 5,
        baths: 6,
        sqft: 6000,
        garage: 4,
        image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ],
        type: 'Villa',
        status: 'For Sale',
        featured: true,
        new: false,
        agent: {
            name: 'Lisa Anderson',
            image: 'https://randomuser.me/api/portraits/women/55.jpg'
        }
    }
]

const PropertyGrid = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = 10

    const handlePageChange = (page) => {
        setCurrentPage(page)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Property Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {properties.map((property) => (
                        <PropertyCard key={property.id} property={property} />
                    ))}
                </div>

                {/* Pagination */}
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-gray-600 text-sm">
                        Showing page <span className="font-semibold">{currentPage}</span> of{' '}
                        <span className="font-semibold">{totalPages}</span>
                    </p>

                    <div className="flex items-center gap-2">
                        {/* Previous Button */}
                        <button
                            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                            disabled={currentPage === 1}
                            className="p-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        {/* Page Numbers */}
                        <div className="flex items-center gap-1">
                            {[1, 2, 3].map((page) => (
                                <button
                                    key={page}
                                    onClick={() => handlePageChange(page)}
                                    className={`w-10 h-10 rounded-lg font-medium transition ${
                                        currentPage === page
                                            ? 'bg-primary-600 text-white'
                                            : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                                >
                                    {page}
                                </button>
                            ))}
                            <span className="px-2 text-gray-400">...</span>
                            <button
                                onClick={() => handlePageChange(totalPages)}
                                className={`w-10 h-10 rounded-lg font-medium transition ${
                                    currentPage === totalPages
                                        ? 'bg-primary-600 text-white'
                                        : 'text-gray-600 hover:bg-gray-100'
                                }`}
                            >
                                {totalPages}
                            </button>
                        </div>

                        {/* Next Button */}
                        <button
                            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                            disabled={currentPage === totalPages}
                            className="p-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PropertyGrid