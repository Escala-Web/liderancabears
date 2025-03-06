import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background-color: ${({ active,theme }) => (active ? "#0c0c0c" : "transparent")};
    color: #fff;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    transition: background-color 0.3s ease-in-out;


    .containerHeader{
        min-width: 1400px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo img{
        width: 100%;
        display: block;
    }

    .menu{
        display: flex;
        text-transform: uppercase;

        nav{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0 4rem;
            margin-right: 4rem;

            ul{
                list-style: none;
                display: flex;
                width: 100%;
                gap: 0 4rem;
            }
        }

        .agendar{
            background-color: #BE9661;
            border: none;
            width: 100%;
            height: 80%;
            padding: 1rem;
            font-size: 1rem;
            border-radius: 4px;
            color:rgb(240, 240, 240);
            cursor: pointer;
        }

        .agendar:hover{
            background-color:rgb(192, 154, 105);
        }
    }

    @media (max-width: 768px){
        .menu{
            display: none;
        }
    }

    @media (min-width: 769px){
        .toggleMenu{
            display: none;
        }
    }
`;

export const Logo = styled.div`
    font-size: 1.5em;
    font-weight: bold;
`;

export const Nav = styled.nav`
    display: flex;
    gap: 15px;
`;

export const NavLink = styled.a`
    color: #fff;
    text-decoration: none;
    font-size: 12px;

    &:hover {
        text-decoration: underline;
    }
`;