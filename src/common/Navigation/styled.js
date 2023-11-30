import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "active";

export const NaviList = styled.ul`
    margin:0 auto;
    list-style-type: none;
    background-color: ${({ theme }) => theme.color.teal};
    display: flex;
    padding:20px;
    font-size:20px;
    justify-content: center;

    @media (max-width:${({ theme }) => theme.breakPoint.mobile}px){
        flex-direction: column;
        align-items:center;
        gap:10px;
    }
    
`
export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName
}))`
    color:white;
    text-decoration: none;
    padding:20px;
    
    &.${activeClassName}{
    font-weight: bold;
    }   
    
`