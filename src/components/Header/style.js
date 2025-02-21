import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #333;
    color: #fff;
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
    font-size: 1em;

    &:hover {
        text-decoration: underline;
    }
`;