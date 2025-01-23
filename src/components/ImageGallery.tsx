import React from 'react';

// Asume que tienes estas imágenes en tu carpeta de assets
const images = [
  '/assets/gallery1.png',
  '/assets/gallery2.png',
  '/assets/gallery3.png',
  '/assets/gallery4.png',
];

const ImageGallery: React.FC = () => {
  return (
    <div className="w-full px-4 py-8 bg-background text-black">
      <h2 className="text-4xl font-bold text-center mb-3">
        Consultas en el <br /> Hospital San Agustín
      </h2>
      <p>Guadalupe, Zacatecas</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-16">
        {images.map((image, index) => (
          <div key={index} className="relative aspect-square overflow-hidden group">
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;