import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import PropertyCard from '../common/PropertyCard'
import PropertyFilters from './PropertyFilters'
import { properties } from '../../data/properties'

const PropertyGrid = () => {
    const [currentPage, setCurrentPage] = useState(1)

    const [filters, setFilters] = useState({ status: 'all', location: 'all', tag: 'all' });

    const filteredProperties = properties.filter(p => {
        const statusMatch = filters.status === 'all' || p.status === filters.status;
        const locationMatch = filters.location === 'all' || p.location === filters.location;
        const tagMatch = filters.tag === 'all' || p.tag === filters.tag;
        return statusMatch && locationMatch && tagMatch;
    });
    
    // Calculate Pagination
    const itemsPerPage = 6;
    const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
    const currentProperties = filteredProperties.slice(
        (currentPage - 1) * itemsPerPage, 
        currentPage * itemsPerPage
    );

    const handlePageChange = (page) => {
        setCurrentPage(page)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <><PropertyFilters onFilterChange={(newFilters) => {
            setFilters(newFilters);
            setCurrentPage(1);
        }} />

        <section className="py-16 bg-ivory-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Property Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {currentProperties.map((property, index) => (
                        <PropertyCard
                            key={property.id || index} 
                            property={property}
                        />
                    ))}
                </div>

                {/* Pagination Control */}
                {totalPages > 1 && (
                    <div className="mt-16 flex flex-col sm:row items-center justify-between gap-6 border-t border-gold-200 pt-8">
                        <p className="text-text-secondary text-sm">
                            Showing <span className="font-semibold">{startIndex + 1}</span> to{' '}
                            <span className="font-semibold">
                                {Math.min(startIndex + itemsPerPage, properties.length)}
                            </span> of{' '}
                            <span className="font-semibold">{properties.length}</span> properties
                        </p>

                        <div className="flex items-center gap-2">
                            {/* Previous Button */}
                            <button
                                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                                disabled={currentPage === 1}
                                className="p-2 rounded-full border border-gold-300 text-gold-600 hover:bg-gold-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>

                            {/* Page Numbers */}
                            <div className="flex items-center gap-1">
                                {[...Array(totalPages)].map((_, i) => {
                                    const page = i + 1
                                    return (
                                        <button
                                            key={page}
                                            onClick={() => handlePageChange(page)}
                                            className={`w-10 h-10 rounded-full font-medium transition-all ${
                                                currentPage === page
                                                    ? 'bg-gold-500 text-white shadow-gold'
                                                    : 'text-text-secondary hover:bg-gold-100'
                                            }`}
                                        >
                                            {page}
                                        </button>
                                    )
                                })}
                            </div>

                            {/* Next Button */}
                            <button
                                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                                disabled={currentPage === totalPages}
                                className="p-2 rounded-full border border-gold-300 text-gold-600 hover:bg-gold-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
        </>
    )
}

export default PropertyGrid