import ContainerBanner from "./style";
import Button from "../Button";
import { Container } from "../../styles/GlobalStyle";

const Banner = () => {
  return (
    <ContainerBanner>
      <Container>
        <h1 className="title">Sempre trabalhando <span className="textHighlight">no seu estilo</span></h1>

        <div>
          <p className="since">Desde 2024</p>
        </div>

        <Button text={"Faça seu Agendamento"}></Button>
      </Container>
    </ContainerBanner>
  );
};

export default Banner;
