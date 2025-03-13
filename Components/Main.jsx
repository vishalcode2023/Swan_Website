"use client";
import React, { useEffect, useRef, useState } from "react";
import Hero from "./LandingPages/Hero";
import TechnologyPage from "./LandingPages/TechnologyPage";
import ProductsPage from "./LandingPages/ProductsPage";
import AboutUsPage from "./LandingPages/AboutUsPage";
import Footerpage from "./LandingPages/Footerpage";
import Gallery from "./LandingPages/Gallery";


const Main = () => {
  return (
    <div >
      <Hero  />
      <TechnologyPage  />
      <ProductsPage  />
      <AboutUsPage/>
      <Gallery/>
      <Footerpage/>
    </div>
  );
};

export default Main;
