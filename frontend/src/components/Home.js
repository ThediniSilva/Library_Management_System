import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css'; // Ensure you have a CSS file for styling

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Change images every 2 seconds (2000 milliseconds)
  };

  const sliderStyle = {
    width: '75%', // Adjust width as needed
    margin: '0 auto', // Center horizontally
  };

  const carouselImageStyle = {
    width: '100%',
    height: '75vh', // Adjust the height as needed
    objectFit: 'cover',
  };

  return (
    <div>
      <div className="slider-container" style={sliderStyle}>
        <Slider {...settings}>
          <div>
            <img src="Image/11.jpg" alt="Image 1" style={carouselImageStyle} />
          </div>
          <div>
            <img src="Image/7.jpg" alt="Image 2" style={carouselImageStyle} />
          </div>
          <div>
            <img src="Image/8.jpg" alt="Image 3" style={carouselImageStyle} />
          </div>
        </Slider>
      </div>
      <h1 className="heading">Welcome to our E-Library..... </h1>
    </div>
  );
};

export default SliderComponent;
