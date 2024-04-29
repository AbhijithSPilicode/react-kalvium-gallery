import React, { useState } from 'react';

const Gallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container">
      <div className="gallery">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.url}
            onClick={() => handleImageClick(image)}
            className="gallery-image"
          />
        ))}
      </div>
      {selectedImage && (
        <div className="modal" onClick={handleCloseModal}>
          <img src={selectedImage.url} alt={selectedImage.alt} className="modal-image" />
        </div>
      )}
    </div>
  );
};

export default Gallery;
