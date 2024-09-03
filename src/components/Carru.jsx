import React from 'react'

const Carru = () => {
 
  return (
    <Carousel className='carrusel-cont'>
    <Carousel.Item>
    <img className='d-block w-100 image' src="./public/images/img1.jpeg" alt="" />
      <Carousel.Caption>
        <h3>Locos pero lindos</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img className='d-block w-100 image' src="./public/images/img2.jpeg"  alt="" />
      <Carousel.Caption>
        <h3>Felices</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className='d-block w-100 image' src="./public/images/img1.jpeg"  alt="" />
      <Carousel.Caption>
        <h3>Third slide label</h3>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  );
}

export default Carru