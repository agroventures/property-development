import React from 'react'
import { 
  Home, 
  Key, 
  Building, 
  TrendingUp, 
  FileText, 
  Palette, 
  Calculator, 
  Handshake,
  ArrowRight
} from 'lucide-react'

const services = [
  {
    id: 1,
    icon: Home,
    title: 'Property Sales',
    description: 'Expert assistance in buying and selling residential and commercial properties with maximum value.',
    features: ['Market Analysis', 'Price Negotiation', 'Closing Support'],
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600'
  },
  {
    id: 2,
    icon: Key,
    title: 'Property Rentals',
    description: 'Find the perfect rental property or tenant with our comprehensive rental services.',
    features: ['Tenant Screening', 'Lease Preparation', 'Rent Collection'],
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600'
  },
  {
    id: 3,
    icon: Building,
    title: 'Property Management',
    description: 'Complete property management solutions for landlords and property investors.',
    features: ['Maintenance', '24/7 Support', 'Financial Reports'],
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600'
  },
  {
    id: 4,
    icon: TrendingUp,
    title: 'Investment Consulting',
    description: 'Strategic investment advice to maximize your real estate portfolio returns.',
    features: ['ROI Analysis', 'Market Trends', 'Risk Assessment'],
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-600'
  },
  {
    id: 5,
    icon: FileText,
    title: 'Legal Services',
    description: 'Comprehensive legal support for all real estate transactions and documentation.',
    features: ['Contract Review', 'Title Search', 'Compliance'],
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50',
    iconColor: 'text-red-600'
  },
  {
    id: 6,
    icon: Palette,
    title: 'Home Staging',
    description: 'Professional staging services to showcase your property at its absolute best.',
    features: ['Interior Design', 'Photography', 'Virtual Tours'],
    color: 'from-pink-500 to-pink-600',
    bgColor: 'bg-pink-50',
    iconColor: 'text-pink-600'
  },
  {
    id: 7,
    icon: Calculator,
    title: 'Valuation Services',
    description: 'Accurate property valuations based on market data and expert analysis.',
    features: ['Market Comparison', 'Detailed Reports', 'Expert Opinion'],
    color: 'from-teal-500 to-teal-600',
    bgColor: 'bg-teal-50',
    iconColor: 'text-teal-600'
  },
  {
    id: 8,
    icon: Handshake,
    title: 'Mortgage Assistance',
    description: 'Navigate the mortgage process with our expert guidance and lender connections.',
    features: ['Loan Comparison', 'Pre-Approval', 'Documentation'],
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'bg-indigo-50',
    iconColor: 'text-indigo-600'
  }
]

const ServicesList = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Our Premium Services
          </h2>
          <p className="text-gray-600 text-lg">
            We provide a full spectrum of real estate services designed to make 
            your property journey seamless and successful.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className={`${service.bgColor} w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`w-7 h-7 ${service.iconColor}`} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-5">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <button className="inline-flex items-center text-primary-600 font-medium text-sm group/btn">
                Learn More
                <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesList