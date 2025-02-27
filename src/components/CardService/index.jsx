import React from 'react';
import ContainerCard from './style';

const CardService = ({icone, titulo, desc})=>{
    return (
        <ContainerCard>
            <div className="icon">
                {icone}
            </div>
            <h3>{titulo}</h3>
            <p>{desc}</p>
        </ContainerCard>
    )
}
export default CardService;