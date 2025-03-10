import React from "react";
import TeamContainer from "./style";
import CardTeam from "../CardTeam";
import barberWork1 from '../../assets/images/team/barbeiro1.png';
import barberWork2 from '../../assets/images/team/barbeiro2.png';
import barberWork3 from '../../assets/images/team/barbeiro3.png';

const Team = () => {
  const workers = [
    {
      image: barberWork1,
      worker: "Eduardo Vergnianini",
    },
    {
      image: barberWork2,
      worker: "Luan Matos",
    },
    {
      image: barberWork3,
      worker: "Lucas Reis",
    },

  ];

  return (
    <TeamContainer id="workers">
      <h1 className="title">
        Conheça <span className="textHighlight">nosso time</span>
      </h1>

      <div className="contentWorkers">
        {
            workers.map((element, index) => (
                <CardTeam worker={element.worker} pathImg={element.image}/>
            ))
        }
      </div>
    </TeamContainer>
  );
};

export default Team;
