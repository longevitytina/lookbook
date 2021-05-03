import React, { useEffect, useState } from "react";
import "./App.css";
import CarouselSlides from "../carousel";
import NavigationBar from "../nav";

const App = () => {
  useEffect(() => {
    console.log("test");
  });
  return (
    <>
      <NavigationBar />
      <CarouselSlides />
    </>
  );
};

export default App;
