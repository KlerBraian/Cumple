// Carousel.jsx
import React, { useState, useEffect } from 'react';


const Carru = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    '/public/images/img1.jpeg',
    '/public/images/img2.jpeg',
    '/public/images/img1.jpeg',

  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // Cambia de imagen cada 3 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, [images.length]);


  return (
    <div className="carousel">
      <img src={images[currentIndex]} alt="Carousel" className="carousel-image" />
 
    </div>
  );
};

export default Carru;
