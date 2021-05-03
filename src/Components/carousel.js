import React, { useState } from "react";

import Carousel from "react-bootstrap/Carousel";
import "./App/App.css";

import SLIDES from "./App/slides";

function CarouselSlides() {
  return (
    <Carousel
      interval={10000}
      style={{ maxWidth: "1200px", margin: "20px auto" }}
    >
      <Carousel.Item className="image-one">
        <img
          className="d-block w-100"
          src={SLIDES[0].image_url}
          alt="First slide"
        />
        <div className="hotspot-one">
          Product: {SLIDES[0].hotspots.product_id}
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={SLIDES[1].image_url}
          alt="Second slide"
        />
        <div className="hotspot-two">
          Product: {SLIDES[1].hotspots.product_id}
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={SLIDES[2].image_url}
          alt="Third slide"
        />
        <div className="hotspot-three">
          Product: {SLIDES[2].hotspots.product_id}
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSlides;
