import React from "react";
import Banner from "../../components/Banner";
import Services from "../../components/Services";
import Location from "../../components/Location";
import About from "../../components/About";
import ContainerHome from "./style";
import Reviews from "../../components/Reviews";

const Home = () => {
  return (
    <>
      <Banner />
      <ContainerHome>
        <Services />
        <Location />
        <Reviews/>
        <About />
      </ContainerHome>
    </>
  );
};

export default Home;
