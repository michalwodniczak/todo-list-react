import styled, { css } from "styled-components";

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
    border-bottom: 3px solid #eee;

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
    background-color: #008000;
    color: white;
    padding: 10px;
    border: none;
    min-height: 40px;
    cursor: pointer;
    transition: background 1s;
    font-size:13px;

    &:hover{
        background-color: #00b300;
    }

    ${({ remove }) => remove && css`
        background-color: #ff0000;

        &:hover{
            background-color: #ff5452;
        }
    `}
`