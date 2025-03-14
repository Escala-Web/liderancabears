import React from 'react';
import ContainerCard from './style';

const CardService = ({icone, titulo, desc})=>{
    return (
        <ContainerCard className='cardService'>
            <div className="icon">
                <img src={icone} alt={titulo} title={titulo}/>
            </div>
            <h3 className="titulo">{titulo}</h3>
            <p>{desc}</p>
        </ContainerCard>
    )
}
export default CardService;