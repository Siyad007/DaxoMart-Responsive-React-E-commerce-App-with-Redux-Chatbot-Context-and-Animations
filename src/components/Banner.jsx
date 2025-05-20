import React, { useState, useEffect } from "react";
import "./Banner.css";
import mainBanner from "../assets/main banner.jpg";
import saleImage from "../assets/sale.jpg";
import fiftyOffImage from "../assets/50off.jpg";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: mainBanner,
      title: "Welcome to DaxoMart",
      description:
        "Your one-stop shop for exclusive deals and premium products. Start your journey with us today!",
    },
    {
      image: saleImage,
      title: "Discover Unbeatable Offers",
      description:
        "Find the best deals on top-notch products tailored to meet all your shopping needs.",
    },
    {
      image: fiftyOffImage,
      title: "Shop More, Save More!",
      description:
        "Enjoy up to 50% off on your favorite items. Experience happiness with every purchase!",
    },
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="banner-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`banner-slide ${index === currentSlide ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="banner-content">
            <h1>{slide.title}</h1>
            <p>{slide.description}</p>
            <button>Explore</button>
          </div>
        </div>
      ))}

      <button className="banner-prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="banner-next" onClick={nextSlide}>
        &#10095;
      </button>

      <div className="banner-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`banner-dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
