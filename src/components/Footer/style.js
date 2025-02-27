import styled from 'styled-components';

const FooterContent = styled.footer`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: aliceblue;
    background-color: #000;
    color: white;

    .footer-content{
        text-align: center;
    }


    .whatsapp{
        position: fixed;
        bottom: 2.5rem;
        right: 2.5rem;
        z-index: 1000;
        animation: pulse 2s infinite;
        background-color: #00c800;
        color: white;
        height: 65px;
        width: 65px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
    }

    @keyframes pulse {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    }
`;

export default FooterContent;