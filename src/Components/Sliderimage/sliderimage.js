import React from 'react'
 import { Carousel } from 'react-bootstrap';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import './sliderimage.css';

function sliderimage() {
  return (
    <div className='crsl'>
       <Carousel fade  variant="dark" className='imgCarousel'>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src="1.jpeg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h1 className='slideTitle'>Yükünü Cepten Bul</h1>
      <p className='slideP1'>Lojistiği Cepten Yönet</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src="2.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h1 className='slideTitle2'>Yük Taşıyanlar İçin S.S.S</h1>
      <p className='slideP2'>Herzaman Sizlerleyiz</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item  >
    <img
      className="d-block w-100 " style={{maxHeight:600}}
      src="3.png"
      alt="mobile-app-mockup.svg"
    />

    <Carousel.Caption>
      <h1 className='slideTitle'>Mobil Uygulama İle...</h1>
      <p className='slideP3'>Lojistiği Cepten Yönetin</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> 
    </div>
  )
}

export default sliderimage