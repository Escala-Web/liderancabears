import styled from 'styled-components';
import banner from '../../assets/images/banner.png'

const ContactContainer = styled.section`
 display: grid;
 grid-template-columns: 1fr 1fr;
 width: 100%;

    .textHighlight {
        color: ${({ theme }) => theme.primaryText};
    }

    .title {
        font-size: ${({ theme }) => theme.title};
        color: ${({ theme }) => theme.secondaryText};
        text-transform: uppercase;
        line-height: 100%;
        margin: 1rem 0;
    }

    .title::after{
        content: "";
        width: 40%;
        background-color: ${({ theme }) => theme.colorGray};
        height: 2px;
        display: block;
        right: 100%;
        margin-top: 1rem;
    }

    .paragraph {
        font-size: ${({ theme }) => theme.paragraphSize};
        color: ${({ theme }) => theme.paragraphColor};
    }

    .form{
        display: flex;
        flex-direction: column;
        padding: 5rem 5rem 5rem 18rem;

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