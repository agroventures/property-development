import React from 'react';
import { X, MapPin, Tag, CheckCircle2 } from 'lucide-react';

const PropertyModal = ({ property, isOpen, onClose }) => {
  if (!isOpen || !property) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-ivory-100 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-gold-lg animate-scale-in border border-gold-200">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 bg-white/80 hover:bg-white rounded-full text-black-800 transition-colors shadow-sm"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Image Side */}
          <div className="md:w-1/2 h-64 md:h-auto bg-linear-to-br from-gold-100 to-ivory-300 relative">
             <div className="absolute inset-0 flex items-center justify-center">
                <Tag className="w-20 h-20 text-gold-500/20" />
             </div>
             <div className="absolute bottom-6 left-6">
                <span className="bg-gold-500 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                  {property.status}
                </span>
             </div>
          </div>

          {/* Details Side */}
          <div className="md:w-1/2 p-8 md:p-12">
            <div className="flex items-center gap-2 text-gold-600 mb-4">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide uppercase">{property.location}</span>
            </div>

            <h2 className="font-display text-4xl font-bold text-black-800 mb-6 leading-tight">
              {property.title}
            </h2>

            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold text-gold-600 uppercase tracking-widest mb-2">Project Overview</h4>
                <p className="text-text-secondary leading-relaxed">
                  {property.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gold-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-gold-500" />
                  <span className="text-sm text-black-700 font-medium">Sustainable Living</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-gold-500" />
                  <span className="text-sm text-black-700 font-medium">Prime Location</span>
                </div>
              </div>

              <button className="w-full mt-8 bg-black-900 text-ivory-100 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-gold-900 transition-colors shadow-lg">
                Inquire Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyModal;