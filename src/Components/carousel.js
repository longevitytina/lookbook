import React, { useState } from "react";

import Carousel from "react-bootstrap/Carousel";
import "./App/App.css";

import SLIDES from "./App/slides";

function CarouselSlides() {
  return (
    <>
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
          <div className="hotspot-one">product_id: 102021-404</div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={SLIDES[1].image_url}
            alt="Second slide"
          />
          <div className="hotspot-two">product_id: 102022-651</div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={SLIDES[2].image_url}
            alt="Third slide"
          />
          <div className="hotspot-three">product_id: 102011-410</div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default CarouselSlides;
