import React from "react";
import PricesContent from "./style";
import ListPrice from "../ListPrice";
import Button from "../Button";
import Reviews from "../Reviews";
import ReviewsSlider from "../ReviewsSlider";
import Lideranca from "../../assets/images/lideranca.png";

const Prices = () => {
  const prices = [
    { service: "Barba Simples", price: "R$45,00" },
    { service: "Barboterapia", price: "R$55,00" },
    { service: "Bigode", price: "R$10,00" },
    { service: "Botox Capilar", price: "R$65,00" },
    { service: "Coloração", price: "R$55,00" },
    { service: "Corte", price: "R$55,00" },
    { service: "Corte + Bigode + Sombrancelha", price: "R$65,00" },
    { service: "Corte + Sombrancelha", price: "R$60,00" },
    { service: "Corte e Barba", price: "R$85,00" },
    { service: "Corte e Barba + Sombrancelha", price: "R$90,00" },
    { service: "Corte Infantil", price: "R$49,00" },
    { service: "Depilação da Orelha (Cera Quente)", price: "R$20,00" },
    { service: "Depilação no Nariz (Cera Quente)", price: "R$20,00" },
    { service: "Hidratação Capilar", price: "R$35,00" },
    { service: "Luzes", price: "R$85,00" },
    { service: "Máscara Black", price: "R$20,00" },
    { service: "Penteado", price: "R$20,00" },
    { service: "Pezinho (Somente Navalha)", price: "R$15,00" },
    { service: "Pigmentação", price: "R$10,00" },
    { service: "Platinado", price: "R$120,00" },
    { service: "Progressiva", price: "R$90,00" },
    { service: "Raspar a cabeça", price: "R$30,00" },
    { service: "Selagem Capilar", price: "R$80,00" },
    { service: "Sombrancelha", price: "R$10,00" },
  ];

  const reviews = [
    {
      text: "Sempre tive dificuldade em encontrar um barbeiro que entendesse meu estilo, mas na Liderança Barbers Shop encontrei o lugar perfeito. O atendimento é de primeira e os produtos que eles usam são de alta qualidade.",
      author: "Rafael Santos",
    },
    {
      text: "Levei meu filho para cortar o cabelo e ele adorou! Os barbeiros foram muito simpáticos e pacientes com ele. O corte ficou lindo e ele saiu de lá todo feliz.",
      author: "Fernanda Costa",
    },
    {
      text: "Fiz um tratamento capilar e meu cabelo ficou muito mais forte e brilhante. Os produtos que eles usam são realmente muito bons e o atendimento é impecável. Recomendo!",
      author: "Ricardo Souza",
    },
    {
      text: "Sempre fui muito exigente com meu visual, mas na Liderança Barbers Shop encontrei tudo o que preciso. Os barbeiros são muito profissionais e o ambiente é agradavel. Recomendo a todos os homens que se preocupam com a aparência.",
      author: "Gabriel Pereira",
    },
  ];

  const [showAll, setShowAll] = React.useState(false);

  return (
    <PricesContent>
      <div className="price">
        <h2 className="title">
          <span className="textHighlight">Nossos</span> Preços
        </h2>
        <p className="paragraph">
          Qualidade premium e preços justos. Na Liderança Barbers Shop, você
          encontra serviços de alto padrão com valores que cabem no seu bolso.
          Invista em você e desfrute de uma experiência única de cuidado e
          estilo.
        </p>

        {prices.slice(0, showAll ? prices.length : 5).map((element, index) => (
          <ListPrice
            service={element.service}
            price={element.price}
            key={index}
          />
        ))}

        <div className="seeAll">
          <Button
            text={showAll ? "Ver menos" : "Ver todos"}
            onClick={() => setShowAll(!showAll)}
          />
        </div>
      </div>

      <div className="reviews">
        <div>
          <img src={Lideranca} alt="Imagem da Barbearia" title="Imagem da Barbearia" width={"100%"}/>
        </div>
        <div className="coment">
          <h2>Avaliações de nossos clientes</h2>

          <div className="content">
            <ReviewsSlider reviews={reviews} />
          </div>
        </div>
      </div>
    </PricesContent>
  );
};

export default Prices;
