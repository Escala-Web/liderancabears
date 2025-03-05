import React from "react";
import ServicesContainer from "./style";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineSmartphone } from "react-icons/md";
import { CONFIG } from "../../config/config";
import CardService from "../CardService";
import tesourasIcon from "../../assets/icons/tesouras.png";
import navalhaIcon from "../../assets/icons/navalha.png";
import cabeloCurtoIcon from "../../assets/icons/cabelo-masculino-curto.png";
import mascaraIcon from "../../assets/icons/mascara-de-folha.png";

const Services = () => {
  const servicos = [
    {
      titulo: "Corte de Cabelo premium",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos accusantium id, dignissimos exercitationem dolorem placeat rem ipsum minima reiciendis est earum tempore deleniti! Iste, corporis delectus architecto officiis hic maxime!",
      icone: tesourasIcon,
    },
    {
      titulo: "Barba e finalizações",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos accusantium id, dignissimos exercitationem dolorem placeat rem ipsum minima reiciendis est earum tempore deleniti! Iste, corporis delectus architecto officiis hic maxime!",
      icone: navalhaIcon,
    },
    {
      titulo: "Tratamentos capilares",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos accusantium id, dignissimos exercitationem dolorem placeat rem ipsum minima reiciendis est earum tempore deleniti! Iste, corporis delectus architecto officiis hic maxime!",
      icone: cabeloCurtoIcon,
    },
    {
      titulo: "Cuidados com a pele",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos accusantium id, dignissimos exercitationem dolorem placeat rem ipsum minima reiciendis est earum tempore deleniti! Iste, corporis delectus architecto officiis hic maxime!",
      icone: mascaraIcon,
    },
  ];

  return (
    <ServicesContainer>
      <div className="aboutService">
        <h2 className="title">
          Serviços <span className="textHighlight">Além da Expectativa</span>
        </h2>
        <p className="paragraph">
          Na nossa barbearia, não é apenas sobre cortes de cabelo, mas sim sobre
          criar experiências. Um espaço para quem busca serviços impecáveis em
          um ambiente relaxante e acolhedor. Na nossa barbearia, não é apenas
          sobre cortes de cabelo, mas sim sobre criar experiências. Um espaço
          para quem busca serviços impecáveis em um ambiente relaxante e
          acolhedor.
        </p>
      </div>

      <div className="local">
        <div className="location">
          <div className="address">
            <div className="titleHead">
              <span>
                <IoLocationSharp />
              </span>
              <h3>Location</h3>
            </div>
            <p className="descriptionLocal">{CONFIG.address}</p>
          </div>

          <div className="schedule">
            <div className="titleHead">
              <span>
                <MdOutlineSmartphone />
              </span>
              <h3>
                <a href={CONFIG.getLinkWpp()} target="_blank">
                  {CONFIG.whatsapp}
                </a>
              </h3>
            </div>
            <p className="descriptionLocal">Seg à Sex 08h às 18h</p>
            <p className="descriptionLocal">Sáb 09h às 14h</p>
          </div>
        </div>

        <div className="iframeContainer">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2586.9519635435267!2d-46.583792737973425!3d-23.514420592294393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5f46970eb71f%3A0xbace5d4290aa1374!2sLIDERAN%C3%87A%20BARBERS%20SHOP!5e0!3m2!1spt-BR!2sbr!4v1740749962422!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="contentServices">
          {servicos.map((element, index) => (
            
            <CardService
              key={index}
              desc={element.desc}
              titulo={element.titulo}
              icone={element.icone}
            />
          ))}
      </div>
    </ServicesContainer>
  );
};

export default Services;
