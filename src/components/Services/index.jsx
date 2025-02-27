import React from "react";
import ServicesContainer from "./style";
import CardService from "../CardService";

const Services = () => {
  const servicos = [
    {
      titulo: "Corte de Cabelo premium",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos accusantium id, dignissimos exercitationem dolorem placeat rem ipsum minima reiciendis est earum tempore deleniti! Iste, corporis delectus architecto officiis hic maxime!",
      icone: "path",
    },
    {
      titulo: "Barba e finalizações especiais",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos accusantium id, dignissimos exercitationem dolorem placeat rem ipsum minima reiciendis est earum tempore deleniti! Iste, corporis delectus architecto officiis hic maxime!",
      icone: "path",
    },
    {
      titulo: "Tratamentos capilares",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos accusantium id, dignissimos exercitationem dolorem placeat rem ipsum minima reiciendis est earum tempore deleniti! Iste, corporis delectus architecto officiis hic maxime!",
      icone: "path",
    },
    {
      titulo: "Massagem facial e cuidados com a pele",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos accusantium id, dignissimos exercitationem dolorem placeat rem ipsum minima reiciendis est earum tempore deleniti! Iste, corporis delectus architecto officiis hic maxime!",
      icone: "path",
    },
  ];

  return (
    <ServicesContainer>
      <h2 className="title">Conheça Nossos Serviços</h2>
      <p className="subtitle">
        Nossa barbearia é Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Vero tempora, illum culpa itaque voluptas soluta at beatae
        pariatur illo ipsam quod est praesentium labore dolores libero neque?
        Fuga, porro architecto!
      </p>

      <div className="containerServices">
        {servicos.map((servico) => (
          <CardService
            titulo={servico.titulo}
            desc={servico.desc}
            icone={servico.icone}
          />
        ))}
      </div>
    </ServicesContainer>
  );
};

export default Services;
