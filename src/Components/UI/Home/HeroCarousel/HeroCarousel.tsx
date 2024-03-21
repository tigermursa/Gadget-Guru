"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

const images = [
  "https://image01.realme.net/general/20240321/1710997938070acff2f5e5ae34faf8b0f5a25f599214e.jpg.webp",
  "https://d3fyizz0b46qgr.cloudfront.net/global/phones/SPARK_20_Pro_Plus/bd/detail-pc.jpg",
  "https://image01.realme.net/general/20240222/1708598111558acab809c36a947909098fb1c18daa2e5.png.webp",
  "https://d3fyizz0b46qgr.cloudfront.net/global/phones/SPARK_20_Pro_Plus/bd/detail-pc.jpg",
  "https://image01.realme.net/general/20240102/1704173798690ca1f3d06315d4859a0149c4f6cede768.jpg.webp",
];

const content = [
  "<h2>Experience Ultra Performance</h2>",
  "<h3>Get up to $800 trade-in credit</h3>",
  "<h4>Learn More</h4>",
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Optional: Set autoplay and transition time (customize as needed)
  const autoplayOptions = {
    enabled: true,
    interval: 1000, // Change interval for desired transition time (in milliseconds)
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Carousel
    showIndicators={true}
    showArrows={true}
    swipeable={true}
    emulateTouch={true}
    infiniteLoop={true}
    autoPlay={true}
    interval={5000}
    transitionTime={1000}
    showStatus={false}
    renderIndicator={(onClickHandler, isSelected, index, label) => {
      const indicatorStyle = {
        width: "40px", // Adjust the width of the line indicator
        height: "3px", // Adjust the height of the line indicator
        background: isSelected ? "#000" : "#ccc", // Set the color of the line indicator
        borderRadius: "1px", // Adjust the border radius for rounded ends
        display: "inline-block",
        margin: "0 5px", // Adjust the margin between indicators
        cursor: "pointer",
      };

      return (
        <div
          style={indicatorStyle}
          onClick={onClickHandler}
          onKeyDown={onClickHandler}
          role="button"
          tabIndex={0}
          title={`${label} ${index + 1}`}
          aria-label={`${label} ${index + 1}`}
        />
      );
    }}
  >
      {images.map((imageSrc, index) => (
        <div
          key={index}
          className="carousel-item max-w-full max-h-[700px] flex mx-auto relative"
        >
          <div className="h-[520px]">
            <Image
              src={imageSrc}
              width={1280}
              height={700}
              alt={`Slide ${index + 1}`}
            />
          </div>

          {/*  */}
        </div>
      ))}
    </Carousel>
  );
};

export default HeroCarousel;
