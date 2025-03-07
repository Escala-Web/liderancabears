import React from "react";
import Banner from "../../components/Banner";
import Services from "../../components/Services";
import About from "../../components/About";
import ContainerHome from "./style";
import Works from "../../components/Works";
import Prices from "../../components/Prices";
import Contact from "../../components/Contact";

const Home = () => {
  return (
    <>
      <Banner />
      <ContainerHome>
        <Services />
        <Works />
        <Prices/>
        <Contact />
      </ContainerHome>
    </>
        
  );
};

export default Home;
