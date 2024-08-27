import React, { useState } from 'react';

const Carrusel = () => {
  // Arreglo de imágenes
  const images = [
    'https://via.placeholder.com/800x300?text=Foto+1',
    'https://via.placeholder.com/800x300?text=Foto+2',
    'https://via.placeholder.com/800x300?text=Foto+3',
  ];

  // Estado para la imagen actual
  const [currentImage, setCurrentImage] = useState(0);

  // Función para ir a la siguiente imagen
  const nextImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === images.length - 1 ? 0 : prevImage + 1
    );
  };

  // Función para ir a la imagen anterior
  const prevImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
  };

  return (
    <div className="carrusel">
      <button onClick={prevImage}>Anterior</button>
      <img src={images[currentImage]} alt={`Imagen ${currentImage + 1}`} />
      <button onClick={nextImage}>Siguiente</button>
    </div>
  );
};

export default Carrusel;
