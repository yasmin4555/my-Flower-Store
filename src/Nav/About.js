// src/AboutUs.js
import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import FlowersImage from "../images/Flowers.jpg";
import storeImage from "../images/store.jpg";
import teamImage from "../images/team.jpg";
import Image from "../images/flower 2.jpg";
import Image1 from "../images/flower 4.jpg";
import Image2 from "../images/flower 5.jpg";
import Image3 from "../images/flower3.jpg";

const About = () => {

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
    <div className="about">

      <h1>About Our Flower Store</h1>
      <p>Welcome to RoseFlower Shop!</p>

      <p>
        At our store, we believe that flowers are more than just decorations—they are a way to express emotions, celebrate milestones, and bring beauty into everyday life. Located in the heart of Unter Den Eichen 2, 40625 Dusseldorf, our store has been a beloved part of the community since 2022.
      </p>

      {/* FIXED */}
      <img src={storeImage} className="about-image" alt="Flower store interior" />

      <h2>Our Story</h2>
      <p>
        Rose Flower was founded out of a passion for floristry and a love for creating stunning floral arrangements.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li>Custom Floral Arrangements</li>
        <li>Wedding and Event Florals</li>
        <li>Same-Day Delivery</li>
        <li>Seasonal Specials</li>
      </ul>

      <Slider {...settings} className="about-us-slider">

        <div>
          <img src={FlowersImage} className='about-image' alt="Flower bouquet" />
        </div>

        <div>
          <img src={Image} className='about-image' alt="Flower arrangement 1" />
        </div>

        <div>
          <img src={Image1} className='about-image' alt="Flower arrangement 2" />
        </div>

        <div>
          <img src={Image2} className='about-image' alt="Flower arrangement 3" />
        </div>

        <div>
          <img src={Image3} className='about-image' alt="Flower arrangement 4" />
        </div>

      </Slider>

      <h2>Why Choose Us?</h2>
      <p>
        Passion for Flowers. Attention to Detail. Customer-Centric Service. Community Involvement.
      </p>

      <h2>Contact Us</h2>
      <p>
        For inquiries, contact us via email or social media.
      </p>

      {/* FIXED */}
      <img src={teamImage} className="about-image" alt="Our team" />

    </div>
  );
};

export default About;