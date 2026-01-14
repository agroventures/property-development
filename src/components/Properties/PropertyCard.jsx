import React, { useState } from 'react'
import { 
    Heart, 
    Bed, 
    Bath, 
    Square, 
    Car, 
    MapPin, 
    Eye,
    Share2,
    ChevronLeft,
    ChevronRight
} from 'lucide-react'
import { Link } from 'react-router-dom'

const PropertyCard = ({ property }) => {
    const [isLiked, setIsLiked] = useState(false)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const formatPrice = (price, type) => {
        if (type === 'rent') {
            return `$${price.toLocaleString()}/mo`
        }
        return `$${price.toLocaleString()}`
    }

    const nextImage = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setCurrentImageIndex((prev) => 
            prev === property.images.length - 1 ? 0 : prev + 1
        )
    }

    const prevImage = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setCurrentImageIndex((prev) => 
            prev === 0 ? property.images.length - 1 : prev - 1
        )
    }

    return (
        <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100">
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
                <img
                    src={property.images[currentImageIndex]}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Image Navigation */}
                {property.images.length > 1 && (
                    <>
                        <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                        >
                            <ChevronLeft className="w-5 h-5 text-gray-700" />
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                        >
                            <ChevronRight className="w-5 h-5 text-gray-700" />
                        </button>
                        {/* Image Dots */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                            {property.images.map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`w-2 h-2 rounded-full transition-all ${
                                        idx === currentImageIndex 
                                            ? 'bg-white w-4' 
                                            : 'bg-white/50'
                                    }`}
                                />
                            ))}
                        </div>
                    </>
                )}

                {/* Top Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        property.status === 'For Sale' 
                            ? 'bg-green-500 text-white' 
                            : property.status === 'For Rent'
                            ? 'bg-blue-500 text-white'
                            : 'bg-red-500 text-white'
                    }`}>
                        {property.status}
                    </span>
                    {property.featured && (
                        <span className="px-3 py-1 bg-primary-500 text-white rounded-full text-xs font-semibold">
                            Featured
                        </span>
                    )}
                    {property.new && (
                        <span className="px-3 py-1 bg-orange-500 text-white rounded-full text-xs font-semibold">
                            New
                        </span>
                    )}
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <button
                        onClick={(e) => {
                            e.preventDefault()
                            setIsLiked(!isLiked)
                        }}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                            isLiked 
                                ? 'bg-red-500 text-white' 
                                : 'bg-white/90 text-gray-700 hover:bg-white'
                        }`}
                    >
                        <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                    </button>
                    <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition opacity-0 group-hover:opacity-100">
                        <Share2 className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition opacity-0 group-hover:opacity-100">
                        <Eye className="w-5 h-5" />
                    </button>
                </div>

                {/* Property Type */}
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="px-3 py-1 bg-white/90 text-gray-700 rounded-full text-xs font-medium">
                        {property.type}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                {/* Price */}
                <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold text-primary-600">
                        {formatPrice(property.price, property.priceType)}
                    </span>
                    {property.priceType === 'rent' && (
                        <span className="text-gray-500 text-sm">per month</span>
                    )}
                </div>

                {/* Title */}
                <Link to={`/properties/${property.id}`}>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-primary-600 transition-colors line-clamp-1">
                        {property.title}
                    </h3>
                </Link>

                {/* Address */}
                <div className="flex items-center gap-1.5 text-gray-500 mb-4">
                    <MapPin className="w-4 h-4 shrink-0" />
                    <span className="text-sm line-clamp-1">{property.address}</span>
                </div>

                {/* Features */}
                <div className="flex items-center justify-between py-4 border-t border-gray-100">
                    <div className="flex items-center gap-1.5 text-gray-600">
                        <Bed className="w-4 h-4 text-gray-400" />
                        <span className="text-sm font-medium">{property.beds}</span>
                        <span className="text-xs text-gray-400">Beds</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-600">
                        <Bath className="w-4 h-4 text-gray-400" />
                        <span className="text-sm font-medium">{property.baths}</span>
                        <span className="text-xs text-gray-400">Baths</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-600">
                        <Square className="w-4 h-4 text-gray-400" />
                        <span className="text-sm font-medium">{property.sqft.toLocaleString()}</span>
                        <span className="text-xs text-gray-400">sqft</span>
                    </div>
                </div>

                {/* Agent & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                        <img
                            src={property.agent.image}
                            alt={property.agent.name}
                            className="w-8 h-8 rounded-full object-cover"
                        />
                        <span className="text-sm text-gray-600">{property.agent.name}</span>
                    </div>
                    <Link 
                        to={`/properties/${property.id}`}
                        className="text-primary-600 font-medium text-sm hover:text-primary-700 transition"
                    >
                        View Details →
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PropertyCard