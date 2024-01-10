
import React, { useState } from "react";
// import "./ImageSlider.css"; // Make sure to create this CSS file

const ImageSlider = ({ slides }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const nextSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="image-slider">
      <button onClick={prevSlide}>Previous</button>
      <div className="slide-container">
        <img
          src={slides[currentSlideIndex].imageUrl}
          alt={`Slide ${currentSlideIndex + 1}`}
        />
        <div className="quote-overlay">
          <p>{slides[currentSlideIndex].quote}</p>
        </div>
      </div>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default ImageSlider;
