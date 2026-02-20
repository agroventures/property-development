import React, { useState } from 'react';
import { ImageIcon, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

const PropertyGallery = ( { images } ) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="mt-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-3xl font-bold text-slate-900">Property Gallery</h3>
          <p className="text-gray-500 mt-1">Explore the beauty of our property</p>
        </div>
        <div className="hidden md:flex gap-2">
           <span className="flex items-center gap-2 bg-yellow-50 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold">
            <ImageIcon size={18} /> {images.length} Photos
          </span>
        </div>
      </div>

      {/* Modern Grid Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-150">
        
        {/* Featured Large Image */}
        <div onClick={() => openModal(0)} className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl cursor-pointer shadow-lg">
          <img 
            src={images[0].src} 
            alt={images[0].title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <div className="flex justify-between w-full items-center">
              <span className="text-white font-medium text-lg">{images[0].title}</span>
              <Maximize2 className="text-white" size={24} />
            </div>
          </div>
        </div>

        {/* Secondary Images */}
        {images.slice(1, 5).map((img, index) => (
          <div key={img.id} onClick={() => openModal(index + 1)} className="relative group overflow-hidden rounded-2xl cursor-pointer shadow-md">
            <img 
              src={img.src} 
              alt={img.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
               <Maximize2 className="text-white opacity-80" size={32} />
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black-900/95 flex items-center justify-center" onClick={closeModal}>
          <button onClick={closeModal} className="absolute top-4 right-4 text-white hover:text-gold-400 transition-colors">
            <X size={32} />
          </button>
          
          <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-4 text-white hover:text-gold-400 transition-colors">
            <ChevronLeft size={48} />
          </button>
          
          <div className="max-w-5xl max-h-[90vh] px-16" onClick={(e) => e.stopPropagation()}>
            <img src={images[currentIndex].src} alt={images[currentIndex].title} className="w-full h-full object-contain rounded-lg" />
            <p className="text-white text-center mt-4 text-lg">{images[currentIndex].title}</p>
            <p className="text-ivory-300 text-center text-sm">{currentIndex + 1} / {images.length}</p>
          </div>
          
          <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-4 text-white hover:text-gold-400 transition-colors">
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </section>
  );
};

export default PropertyGallery;