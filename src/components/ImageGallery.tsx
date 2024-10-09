import React from 'react';

interface Image {
  id: number;
  url: string;
  alt: string;
}

interface ImageGalleryProps {
  images: Image[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((image) => (
        <div key={image.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={image.url} alt={image.alt} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{image.alt}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;