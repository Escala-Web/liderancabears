import styled from 'styled-components';
import banner from '../../assets/images/banner.png'

const ContactContainer = styled.section`
 display: grid;
 grid-template-columns: 1fr 1fr;
 width: 100%;
  background-color: ${({ theme }) => theme.backgroundContrast};

 @media (max-width: 1024px){
    grid-template-columns: 1fr;
    .buttonAction{
        display: flex;
        justify-content: center;
        align-items: center;
    }
 }

    .textHighlight {
        color: ${({ theme }) => theme.primaryText};
    }

    .title {
        font-size: ${({ theme }) => theme.title};
        color: ${({ theme }) => theme.secondaryText};
        text-transform: uppercase;
        line-height: 100%;
        margin: 1rem 0;

        @media (max-width: 1024px) {
            text-align: center;
        }

        @media (max-width: 425px){
            font-size: 2.2rem;
        }
    }

    .title::after{
        content: "";
        width: 40%;
        background-color: ${({ theme }) => theme.colorGray};
        height: 2px;
        display: block;
        right: 100%;
        margin-top: 1rem;
        @media (max-width: 1024px) {
            width: 50;
            margin: 1rem auto;

        }
    }

    .paragraph {
        font-size: ${({ theme }) => theme.paragraphSize};
        color: ${({ theme }) => theme.paragraphColor};
        @media (max-width: 1024px) {
            text-align: center;
        }
    }

    .form{
        display: flex;
        flex-direction: column;
        padding: 5rem 5rem 5rem 18rem;

        @media (max-width: 1024px) {
            padding: 5rem 6rem !important;
        }

        @media (max-width: 425px){
            padding: 4rem 2rem !important;
        }

        .form-group{
                width: 100%;
                margin: 1rem 0;
                box-sizing: border-box;
            }
            
            .form-group > input, textarea{
                width: 99%;
                font-family: 'Poppins';
                border: 4px solid ${({ theme }) => theme.borderGray};
                padding: 1rem;
                font-size: 1.3rem;
                background-color: transparent;
                color: ${({ theme }) => theme.secondaryText};

                @media (max-width: 425px) {
                    width: 93%;
                    font-size: 1.1rem;
                }
            }
            
            textarea{
                resize: none;
        }

        input::placeholder, textarea::placeholder{
                color: ${({ theme }) => theme.secondaryText};
        }

        input:focus, textarea:focus{
                outline: none;
        }
    }

    .imageContact{
        width: 100%;
        background-image: url(${banner});
        background-size: cover;
    }

    @media (max-width: 1440px){
        .form{
            padding-left: 10rem;
        }
    }
`;

export default ContactContainer;