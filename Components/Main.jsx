"use client";
import React, { useEffect, useRef, useState } from "react";
import Hero from "./LandingPages/Hero";
import TechnologyPage from "./LandingPages/TechnologyPage";
import ProductsPage from "./LandingPages/ProductsPage";
import AboutUsPage from "./LandingPages/AboutUsPage";
import Footerpage from "./LandingPages/Footerpage";
import Gallery from "./LandingPages/Gallery";
import ChatBot from "./ChatBot/ChatBot";


const Main = () => {
  return (
    <div className="w-full h-auto overflow-hidden">
      <Hero  />
      <TechnologyPage  />
      <ProductsPage  />
      <AboutUsPage/>
      <Gallery/>
      <Footerpage/>
      <ChatBot/>
    </div>
  );
};

export default Main;
