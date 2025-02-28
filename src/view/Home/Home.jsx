import React from "react";
import Banner from "../../components/Banner";
import Services from "../../components/Services";
import About from "../../components/About";
import ContainerHome from "./style";
import Works from "../../components/Works";

const Home = () => {
  return (
    <>
      <Banner />
      <ContainerHome>
        <Services />
        <Works />
        <About />
      </ContainerHome>
    </>
  );
};

export default Home;
