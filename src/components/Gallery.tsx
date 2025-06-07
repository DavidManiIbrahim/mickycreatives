import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { portfolioItems, PortfolioItem } from '../data/portfolio';

interface GalleryProps {
  category?: string;
  limit?: number;
}

const Gallery: React.FC<GalleryProps> = ({ category, limit }) => {
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredItems = category 
    ? portfolioItems.filter(item => item.category === category)
    : portfolioItems;

  const displayItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  const openLightbox = (item: PortfolioItem) => {
    setSelectedImage(item);
    setLightboxIndex(displayItems.findIndex(i => i.id === item.id));
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (lightboxIndex + 1) % displayItems.length;
    setLightboxIndex(nextIndex);
    setSelectedImage(displayItems[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (lightboxIndex - 1 + displayItems.length) % displayItems.length;
    setLightboxIndex(prevIndex);
    setSelectedImage(displayItems[prevIndex]);
  };

  const formatCategoryName = (cat: string) => {
    return cat === 'prewedding' ? 'Pre-Wedding' : 
           cat.charAt(0).toUpperCase() + cat.slice(1);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayItems.map((item) => (
<div
            key={item.id}
            className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-all duration-300"
            onClick={() => openLightbox(item)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-charcoalBlack/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 right-4 text-textcolor-white">
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-sm text-textcolor-white/80">{formatCategoryName(item.category)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
        {selectedImage && (
        <div className="fixed inset-0 z-50 bg-primary-charcoalBlack/90 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 bg-textcolor-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-textcolor-white hover:bg-textcolor-white/30 transition-all duration-300"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-textcolor-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-textcolor-white hover:bg-textcolor-white/30 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-textcolor-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-textcolor-white hover:bg-textcolor-white/30 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl max-h-full">
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain"
            />
            <div className="text-center mt-4 text-textcolor-white">
              <h3 className="text-xl font-semibold mb-2">{selectedImage.title}</h3>
              <p className="text-textcolor-white/80">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;