import ContainerBanner from "./style";
import Button from "../Button";
import { Container } from "../../styles/GlobalStyle";
import {CONFIG} from '../../config/config';

const Banner = () => {

  function redirectWhatsapp(){
    const LINK = CONFIG.getLinkWpp();
    window.open(LINK, '_blank');
  }

  return (
    <ContainerBanner>
      <Container>
        <h1 className="title">Sempre trabalhando <span className="textHighlight">no seu estilo</span></h1>

        <div>
          <p className="since">Desde 2024</p>
        </div>

        <Button text={"Faça seu Agendamento"} onClick={()=> redirectWhatsapp()}></Button>
      </Container>
    </ContainerBanner>
  );
};

export default Banner;
