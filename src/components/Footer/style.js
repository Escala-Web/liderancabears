import styled from 'styled-components';

const FooterContent = styled.footer`
    width: 100%;
    padding: 2rem 0;
    background-color: aliceblue;
    background-color: #0c0c0c;
    color: white;
    color: ${({theme}) => theme.paragraphColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    .containerFooter{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-content: center;
        align-items: center;

    }

    .footer-content{
        text-align: center;
        display: flex;
        gap: 1rem;
        margin: 1rem 0px;
    }

    a{
        color: ${({theme}) => theme.paragraphColor};
    }

    .iconFooter{
        color: ${({theme}) => theme.primaryText};
        font-size: 2rem;
    }

    .footerContact, .footerAddress, .footerEmail{
        color: ${({theme}) => theme.secondaryText};
        text-transform: uppercase;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        
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