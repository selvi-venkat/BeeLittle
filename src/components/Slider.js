import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {ArrowLeftCircle, ArrowRightCircle} from 'react-bootstrap-icons';

const Slider = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    console.log(selectedIndex);
  };
    return (
    <Carousel variant='dark' nextIcon={<ArrowRightCircle/>} prevIcon={<ArrowLeftCircle/>}
      activeIndex={index} onSelect={handleSelect} style={{top:12}}>
      <Carousel.Item className='carousel-slides'>
        <img
          className="d-block w-100 carousel-img"
          src='images/Slider4.webp'
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className='carousel-slides'>
        <img
          className="d-block w-100 carousel-img"
          src='images/Slider2.webp'
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item className='carousel-slides'>
        <img
          className="d-block w-100 carousel-img"
          src='images/Slider3.jpg'
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item className='carousel-slides'>
        <img
          className="d-block w-100 carousel-img"
          src='images/Slider1.webp'
          alt="Fourth slide"
        />
      </Carousel.Item>
    </Carousel>
    )

}
export default Slider;