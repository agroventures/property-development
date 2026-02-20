import React, { useState, useMemo } from 'react'
import { 
    ChevronDown,
    X,
    MapPin,
    Tag
} from 'lucide-react'
import { properties } from '../../data/properties'

const PropertyFilters = ({ onFilterChange }) => {
    const [viewMode, setViewMode] = useState('grid')
    const [showFilters, setShowFilters] = useState(false)
    const [filters, setFilters] = useState({
        status: 'all',
        location: 'all',
        tag: 'all'
    })

    // Dynamically derive unique options from properties data
    const locations = useMemo(() => 
        ['all', ...new Set(properties.map(p => p.location))], 
    [properties])

    const tags = useMemo(() => 
        ['all', ...new Set(properties.map(p => p.tag))], 
    [properties])

    const handleFilterUpdate = (key, value) => {
        const newFilters = { ...filters, [key]: value };
        setFilters(newFilters);
        // Pass the updated filters back to the parent Grid component
        if (onFilterChange) onFilterChange(newFilters);
    };

    return (
        <section className="py-6 border-b border-gold-200 sticky top-0 z-40 backdrop-blur-md bg-ivory-100/90">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top Bar */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    
                    {/* Left - Luxury Status Tabs */}
                    <div className="flex items-center bg-white/50 p-1 rounded-full border border-gold-200 w-fit">
                        {['all', 'Ongoing', 'Completed'].map((status) => (
                            <button
                                key={status}
                                onClick={() => handleFilterUpdate('status', status)}
                                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                                    filters.status === status
                                        ? 'bg-gold-500 text-white shadow-gold'
                                        : 'text-text-secondary hover:text-gold-600'
                                }`}
                            >
                                {status}
                            </button>
                        ))}
                    </div>

                    {/* Right - Selectors */}
                    <div className="flex flex-wrap items-center gap-4">
                        {/* Location Dropdown */}
                        <div className="relative min-w-40">
                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-500" />
                            <select 
                                value={filters.location}
                                onChange={(e) => handleFilterUpdate('location', e.target.value)}
                                className="w-full appearance-none bg-white border border-gold-200 rounded-xl pl-10 pr-10 py-2.5 text-sm font-medium text-black-800 focus:ring-2 focus:ring-gold-500 outline-none cursor-pointer"
                            >
                                {locations.map(loc => (
                                    <option key={loc} value={loc}>
                                        {loc === 'all' ? 'All Locations' : loc}
                                    </option>
                                ))}
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-400 pointer-events-none" />
                        </div>

                        {/* Tag/Type Dropdown */}
                        <div className="relative min-w-40">
                            <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-500" />
                            <select 
                                value={filters.tag}
                                onChange={(e) => handleFilterUpdate('tag', e.target.value)}
                                className="w-full appearance-none bg-white border border-gold-200 rounded-xl pl-10 pr-10 py-2.5 text-sm font-medium text-black-800 focus:ring-2 focus:ring-gold-500 outline-none cursor-pointer"
                            >
                                {tags.map(tag => (
                                    <option key={tag} value={tag}>
                                        {tag === 'all' ? 'All Types' : tag}
                                    </option>
                                ))}
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-400 pointer-events-none" />
                        </div>

                        {/* Reset Button */}
                        <button
                            onClick={() => handleFilterUpdate('status', 'all') || handleFilterUpdate('location', 'all') || handleFilterUpdate('tag', 'all')}
                            className="p-2.5 text-gold-600 hover:bg-gold-100 rounded-xl transition-colors"
                            title="Clear Filters"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PropertyFilters