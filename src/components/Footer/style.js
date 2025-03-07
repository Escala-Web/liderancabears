import styled from 'styled-components';

const FooterContent = styled.footer`
    width: 100%;
    padding: 2rem 0;
    background-color: aliceblue;
    background-color: #0c0c0c;
    color: white;
    color: ${({ theme }) => theme.paragraphColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    .containerFooter{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-content: center;
        align-items: center;
        padding: 0 6rem;
    }

    .footer-content{
        text-align: center;
        display: flex;
        gap: 1rem;
        margin: 1rem 0px;
    }

    a{
        color: ${({ theme }) => theme.paragraphColor};
    }

    .iconFooter{
        color: ${({ theme }) => theme.primaryText};
        font-size: 2rem;
    }

    .footerContact, .footerAddress, .footerEmail{
        color: ${({ theme }) => theme.secondaryText};
        text-transform: uppercase;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        
    }

    h3{
        a{
            color: ${({ theme }) => theme.secondaryText};
            text-decoration: none;
        }
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
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;

        @media (max-width: 425px) {
            bottom: 1.5rem;
            right: 1.5rem;
            height: 55px;
            width: 55px;
        }
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

    @media (max-width: 1024px){
        .containerFooter{
            display: flex;
            flex-direction: column;

            .footerEmail {
                order: 1;
            }

            .footerAddress {
                order: 2;
            }

            .footerContact {
                order: 3;
            }
        }
    }

    @media (max-width: 768px){
        .footer-content{
            flex-direction: column;
            padding: 1rem;
            gap: 0;
            margin: 0;
        }

        .containerFooter{
            padding: 0 16px;
            gap: 1rem;

            .footerContact, .footerAddress, .footerEmail{
                flex-direction: column;
                gap: 0;

                h3{
                    margin: 0;
                    text-align: center;
                }
            }
        }

        h3{
            a{
                font-size: 0.8rem;
            }
        }
    }
    
`;

export default FooterContent;