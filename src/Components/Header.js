import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample images. Replace these URLs with your actual image paths or URLs
const images = [

    "/images/Slide 1.jpg",
    "/images/Slide 2.jpg",
    "/images/Slide 3.jpg",
    "/images/Slide 4.jpg",
    "/images/Slide 5.jpg",
    "/images/Slide 6.jpg",


];

function Header() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <header>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Slide ${index}`} style={{ width: '100%', height: 'auto' }} />
          </div>
        ))}
      </Slider>
    </header>
  );
}

export default Header;
