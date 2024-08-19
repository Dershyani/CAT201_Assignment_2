import React, { useState } from "react";
import HomeSection from "../components/HomeSection";
import DiscoverSection from "../components/DiscoverSection";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ProductsSection from "../components/ProductsSection";
import TimelapseSection from "../components/TimelapseSection";
import { FooterContainer } from "../components/FooterSection";
import TeamSection from "../components/TeamSection"; // Import the TeamSection component

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HomeSection />
      <DiscoverSection />
      <ProductsSection />
      <TeamSection /> 
      <TimelapseSection />
      <FooterContainer />
    </>
  );
};

export default Home;
