import React from  'react';
import CardTeamContainer from './style';

const CardTeam = ({pathImg, worker}) => {
    return (
        <CardTeamContainer>
            <img src={pathImg} alt={"Imagem do "+worker} />

            <div className='worker'>
                <p>
                    {worker}
                </p>
            </div>
        </CardTeamContainer>
    );
}

export default CardTeam;