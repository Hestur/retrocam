import React from "react";
import HeroSlider, { Slide } from "hero-slider";


import pic1 from "../assets/Slideshow billeder/camera-1.jpg";
import pic2 from "../assets/Slideshow billeder/camera-2.jpg";
import pic3 from "../assets/Slideshow billeder/camera-3.jpg";
import pic4 from "../assets/Slideshow billeder/camera-4.jpg";
import pic5 from "../assets/Slideshow billeder/camera-5.jpg";
import pic6 from "../assets/Slideshow billeder/camera-6.jpg";


export default function BasicSlider() {
  return (
    <HeroSlider
      slidingAnimation="left_to_right"
      orientation="horizontal"
      initialSlide={1}
      style={{
        color: "#FFF"
      }}
      settings={{
        slidingDuration: 250,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: true,
        autoplayDuration: 5000,
        height: "60vmin"
      }}>
    
      <Slide
        background={{
          backgroundImage: pic1,
          backgroundPosition: "center center"
        }}/>
      <Slide
        background={{
          backgroundImage: pic2,
          backgroundPosition: "center center"
        }}/>
      <Slide
        background={{
          backgroundImage: pic3,
          backgroundPosition: "center center"
        }}/>
      <Slide
        background={{
          backgroundImage: pic4,
          backgroundPosition: "center center"
        }}/>
        <Slide
        background={{
          backgroundImage: pic5,
          backgroundPosition: "center center"
        }}/>
        <Slide
        background={{
          backgroundImage: pic6,
          backgroundPosition: "center center"
        }}/>
    </HeroSlider>
  );
}
