import styled from "styled-components";

export const NavBar = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 1em 0;
    overflow: hidden;
    background-color: ${(props) => props.theme.primary.main};
    width: 100%;
`;

export const NavItem = styled.li`
    display: inline;
`;

export const NavLink = styled.a`
    color: ${(props) => props.theme.primary.textColor};
    padding: 1em 1em;
    text-align: center;
    font-size: 1.25em;
    text-decoration: none;

    :hover {
        background-color: ${(props) => props.theme.primary.light};
    }

    .active {
        background-color: ${(props) => props.theme.primary.dark};
    }
`;
