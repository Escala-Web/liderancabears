import styled from "styled-components";

const CardTeamContainer = styled.div`

position: relative;
    height: 500px;
    width: 350px;
    display: flex;
    cursor: pointer;

    img{
        width: 100%;
        height: 100%;
    }
    
    .worker{
        position: absolute;
        z-index: 1;
        bottom: 0;
        background-image: linear-gradient(rgba(0, 0, 0, 0.38), rgba(0, 0, 0));
        width: 100%;
        text-align: center;
        text-transform: uppercase;
        opacity: 0;
        transition: opacity .6s ease-in;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        color: white;
        font-size: 1.5rem;
    }

    &:hover .worker{
        opacity: 1;
    }

    @media (max-width: 425px) {

        height: 70%;
        width: 70%;

        img{
            width: 100%;
            height: 100%;
        }
    }

`;

export default CardTeamContainer;