import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
    margin: 0;
    list-style-type: none;
    padding: 10px;
`
export const Item = styled.li`
    display: grid;
    grid-template-columns: 40px 1fr 40px;
    align-items: center;
    word-break: break-word;
    padding: 10px;
    grid-gap: 10px;
    border-bottom: 3px solid ${({ theme }) => theme.color.gallery};

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`
export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`
export const Button = styled.button`
    background-color: ${({ theme }) => theme.color.japaneseLaurel};
    color: white;
    padding: 10px;
    border: none;
    min-height: 40px;
    cursor: pointer;
    transition: background 1s;
    font-size:13px;

    &:hover{
        background-color: ${({ theme }) => theme.color.green};
    }

    ${({ remove }) => remove && css`
        background-color: ${({ theme }) => theme.color.red};
        &:hover{
            background-color: ${({ theme }) => theme.color.sunsetOrange};
        }
    `}
`
export const StyledLink = styled(Link)`
    color:${({ theme }) => theme.color.teal};
    text-decoration: none;
    transition: color 1s;
    &:hover {
        color: ${({ theme }) => theme.color.bondiBlue};
    }
`