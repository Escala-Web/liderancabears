import React from "react";
import WorkContainer from "./style";
import Button from "../Button";

import work1 from "../../assets/images/trabalhos/1.png";
import work2 from "../../assets/images/trabalhos/2.png";
import work3 from "../../assets/images/trabalhos/3.png";
import work4 from "../../assets/images/trabalhos/4.png";
import work5 from "../../assets/images/trabalhos/5.png";
import work6 from "../../assets/images/trabalhos/6.png";
import work7 from "../../assets/images/trabalhos/7.png";
import work8 from "../../assets/images/trabalhos/8.png";
import work9 from "../../assets/images/trabalhos/9.png";
import work10 from "../../assets/images/trabalhos/10.png";
import work11 from "../../assets/images/trabalhos/11.png";
import work12 from "../../assets/images/trabalhos/12.png";
import work13 from "../../assets/images/trabalhos/13.png";
import work14 from "../../assets/images/trabalhos/14.png";
import work15 from "../../assets/images/trabalhos/15.png";

const Works = () => {
  const clients = [
    work1,
    work2,
    work3,
    work4,
    work5,
    work6,
    work7,
    work8,
    work9,
    work10,
    work11,
    work12,
    work13,
    work14,
    work15,
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
              <img src={element} alt="Imagem de um dos trabalhos da Liderança Barber" title="Imagem de um dos trabalhos da Liderança Barber"/>
            </div>
          ))}
      </div>

      <Button text={visibleClients ? "Ver Menos" :"Ver Mais"} onClick={handleShowMore}></Button>
      
    </WorkContainer>
  );
};

export default Works;
