import React from "react";
import WorkContainer from "./style";
import Button from "../Button";

const Works = () => {
  const clients = [
    "https://placehold.co/350x500",
    "https://placehold.co/350x500",
    "https://placehold.co/350x500",
    "https://placehold.co/350x500",
    "https://placehold.co/350x500",
    "https://placehold.co/350x500",
    "https://placehold.co/350x500",
    "https://placehold.co/350x500",
    "https://placehold.co/350x500",
    "https://placehold.co/350x500",
    "https://placehold.co/350x500",
    "https://placehold.co/350x500",
  ];

  const [visibleClients, setVisibleClients] = React.useState(false);

  const handleShowMore = () => {
    setVisibleClients(!visibleClients);
  };

  return (
    <WorkContainer>
      <h2 className="title">
        Nossos <span className="textHighlight">Trabalhos</span>
      </h2>

      <div className="containerWork">
        {clients
          .slice(0, visibleClients ? clients.length : 5)
          .map((element, index) => (
            <div key={index}>
              <img src={element} alt="" />
            </div>
          ))}
      </div>

      <Button text={visibleClients ? "Ver Menos" :"Ver Mais"} onClick={handleShowMore}></Button>
      
    </WorkContainer>
  );
};

export default Works;
