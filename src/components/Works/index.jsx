import React from 'react'
import WorkContainer from "./style";
import Button from '../Button'

const Works = () => {
    const clients = [
        "https://placehold.co/350x500",
        "https://placehold.co/350x500",
        "https://placehold.co/350x500",
        "https://placehold.co/350x500",
        "https://placehold.co/350x500"
    ]

    return (

        <WorkContainer>
            <h2 className='title'>Nossos <span className='textHighlight'>Trabalhos</span></h2>
            
            <div className="container">
                {clients.map((element, index) => (
                    <div key={index}>
                        <img src={element} alt=""/>
                    </div>    
                ))}
            </div>

            <Button text={"Ver Mais"}></Button>

        </WorkContainer>
    );
}

export default Works;