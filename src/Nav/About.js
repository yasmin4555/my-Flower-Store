// src/AboutUs.js
import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import FlowersImage from"../images/Flowers.jpg";
import storeImage from"../images/store.jpg";
import teamImage from"../images/team.jpg";
import Image from"../images/flower 2.jpg";
import Image1  from"../images/flower 4.jpg";
import Image2 from"../images/flower 5.jpg";
import Image3 from"../images/flower3.jpg";

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
            <p>Welcome to RoseFlower Shop !</p>
            <p>
                At our store, we believe that flowers are more than just decorations—they are a way to express emotions, celebrate milestones, and bring beauty into everyday life. Located in the heart of [Unter Den Eichen 2, 40625 Dusseldorf], our store has been a beloved part of the community since 2022.
            </p>
<img src={storeImage}  className="about-image">

</img>
            <h2>Our Story</h2>
            <p>
                Rose Flower was founded by [Founder’s Name] out of a passion for floristry and a love for creating stunning floral arrangements. From humble beginnings as a small local shop, we have grown into a full-service florist known for our exceptional quality, creativity, and dedication to customer satisfaction.
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
                <img src={FlowersImage} className='about-image'/>


                </div>
                <div>
                  <img src ={Image}  className='about-image'/>

                  </div>

              <div>
                <img src ={Image1}  className='about-image'/>

                    </div>
                    <div>
                    <img src ={Image2}  className='about-image'/>

                    </div>
                    <div>
                    <img src ={Image3}  className='about-image'/>



              </div>

              </Slider>

            <h2>Why Choose Us?</h2>
            <p>
                Passion for Flowers: Our love for what we do shines through in every bouquet we create.
                Attention to Detail: From the selection of flowers to the final arrangement, we pay meticulous attention to every detail.
                Customer-Centric Service: Your satisfaction is our top priority. We listen to your needs and go the extra mile to exceed your expectations.
                Community Involvement: We are proud to support local events and charities, giving back to the community that has supported us.
            </p>


            <h2>Contact Us</h2>
            <p>
                For inquiries, custom orders, or to schedule a consultation, please contact us at [Your Email Address]. You can also follow us on [Social Media Links] to stay updated on our latest offerings and floral inspirations.
            </p>

            <img src={teamImage} className="about-image"></img>
</div>

    );
};

export default About;
