import React, { useState } from 'react'
import { 
    SlidersHorizontal, 
    Grid3X3, 
    List, 
    ChevronDown,
    X,
    Bed,
    Bath,
    Square,
    Car
} from 'lucide-react'

const PropertyFilters = () => {
    const [viewMode, setViewMode] = useState('grid')
    const [showFilters, setShowFilters] = useState(false)
    const [filters, setFilters] = useState({
        status: 'all',
        bedrooms: '',
        bathrooms: '',
        minArea: '',
        maxArea: '',
        amenities: []
    })

    const propertyStatus = [
        { value: 'all', label: 'All Properties' },
        { value: 'sale', label: 'For Sale' },
        { value: 'rent', label: 'For Rent' },
        { value: 'sold', label: 'Sold' }
    ]

    const amenitiesList = [
        'Swimming Pool',
        'Garage',
        'Garden',
        'Gym',
        'Security',
        'Balcony',
        'Fireplace',
        'Central AC'
    ]

    const toggleAmenity = (amenity) => {
        setFilters(prev => ({
            ...prev,
            amenities: prev.amenities.includes(amenity)
                ? prev.amenities.filter(a => a !== amenity)
                : [...prev.amenities, amenity]
        }))
    }

    return (
        <section className="py-8 bg-white border-b border-gray-200 sticky top-20 z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top Bar */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    {/* Left - Results & Status Filter */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <p className="text-gray-600">
                            Showing <span className="font-semibold text-gray-900">1-12</span> of{' '}
                            <span className="font-semibold text-gray-900">256</span> properties
                        </p>
                        
                        {/* Status Tabs */}
                        <div className="flex items-center bg-gray-100 rounded-lg p-1">
                            {propertyStatus.map((status) => (
                                <button
                                    key={status.value}
                                    onClick={() => setFilters(prev => ({ ...prev, status: status.value }))}
                                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                                        filters.status === status.value
                                            ? 'bg-white text-primary-600 shadow-sm'
                                            : 'text-gray-600 hover:text-gray-900'
                                    }`}
                                >
                                    {status.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right - View Toggle & Filter Button */}
                    <div className="flex items-center gap-4">
                        {/* Sort Dropdown */}
                        <div className="relative">
                            <select className="appearance-none bg-gray-100 border-0 rounded-lg px-4 py-2.5 pr-10 text-sm font-medium text-gray-700 focus:ring-2 focus:ring-primary-500 cursor-pointer">
                                <option value="newest">Newest First</option>
                                <option value="oldest">Oldest First</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="popular">Most Popular</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                        </div>

                        {/* View Toggle */}
                        <div className="hidden sm:flex items-center bg-gray-100 rounded-lg p-1">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-2 rounded-md transition-all ${
                                    viewMode === 'grid' 
                                        ? 'bg-white text-primary-600 shadow-sm' 
                                        : 'text-gray-600 hover:text-gray-900'
                                }`}
                            >
                                <Grid3X3 className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-2 rounded-md transition-all ${
                                    viewMode === 'list' 
                                        ? 'bg-white text-primary-600 shadow-sm' 
                                        : 'text-gray-600 hover:text-gray-900'
                                }`}
                            >
                                <List className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Filter Button */}
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all ${
                                showFilters 
                                    ? 'bg-primary-600 text-white' 
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            <SlidersHorizontal className="w-5 h-5" />
                            Filters
                            {filters.amenities.length > 0 && (
                                <span className="w-5 h-5 bg-primary-500 text-white text-xs rounded-full flex items-center justify-center">
                                    {filters.amenities.length}
                                </span>
                            )}
                        </button>
                    </div>
                </div>

                {/* Expanded Filters */}
                {showFilters && (
                    <div className="mt-6 pt-6 border-t border-gray-200 animate-in slide-in-from-top duration-300">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* Bedrooms */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Bedrooms
                                </label>
                                <div className="relative">
                                    <Bed className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <select 
                                        value={filters.bedrooms}
                                        onChange={(e) => setFilters(prev => ({ ...prev, bedrooms: e.target.value }))}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none bg-white"
                                    >
                                        <option value="">Any</option>
                                        <option value="1">1+</option>
                                        <option value="2">2+</option>
                                        <option value="3">3+</option>
                                        <option value="4">4+</option>
                                        <option value="5">5+</option>
                                    </select>
                                </div>
                            </div>

                            {/* Bathrooms */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Bathrooms
                                </label>
                                <div className="relative">
                                    <Bath className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <select 
                                        value={filters.bathrooms}
                                        onChange={(e) => setFilters(prev => ({ ...prev, bathrooms: e.target.value }))}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none bg-white"
                                    >
                                        <option value="">Any</option>
                                        <option value="1">1+</option>
                                        <option value="2">2+</option>
                                        <option value="3">3+</option>
                                        <option value="4">4+</option>
                                    </select>
                                </div>
                            </div>

                            {/* Min Area */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Min Area (sq ft)
                                </label>
                                <div className="relative">
                                    <Square className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="number"
                                        placeholder="Min"
                                        value={filters.minArea}
                                        onChange={(e) => setFilters(prev => ({ ...prev, minArea: e.target.value }))}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                                    />
                                </div>
                            </div>

                            {/* Max Area */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Max Area (sq ft)
                                </label>
                                <div className="relative">
                                    <Square className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="number"
                                        placeholder="Max"
                                        value={filters.maxArea}
                                        onChange={(e) => setFilters(prev => ({ ...prev, maxArea: e.target.value }))}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Amenities */}
                        <div className="mt-6">
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                                Amenities
                            </label>
                            <div className="flex flex-wrap gap-2">
                                {amenitiesList.map((amenity) => (
                                    <button
                                        key={amenity}
                                        onClick={() => toggleAmenity(amenity)}
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                            filters.amenities.includes(amenity)
                                                ? 'bg-primary-600 text-white'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                    >
                                        {amenity}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Filter Actions */}
                        <div className="mt-6 flex items-center justify-between pt-6 border-t border-gray-200">
                            <button
                                onClick={() => setFilters({
                                    status: 'all',
                                    bedrooms: '',
                                    bathrooms: '',
                                    minArea: '',
                                    maxArea: '',
                                    amenities: []
                                })}
                                className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium"
                            >
                                <X className="w-4 h-4" />
                                Clear All Filters
                            </button>
                            <button className="inline-flex items-center gap-2 bg-linear-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-6 py-2.5 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl">
                                Apply Filters
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default PropertyFilters