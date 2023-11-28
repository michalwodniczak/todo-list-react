import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

@media (max-width:${({theme}) => theme.breakPoint.mobile}px) {
        grid-template-columns: 1fr;
        grid-gap:20px;
        padding:10px;
    };
`;

export const Button = styled.button`
    border: none;
    min-height: 30px;
    background-color: ${({theme}) => theme.color.white};
    color: ${({theme}) => theme.color.teal};
    transition: color 0.3s;
    cursor: pointer;

    &:hover {
        color: ${({theme}) => theme.color.bondiBlue};
    }

    &:disabled {
        color: ${({theme}) => theme.color.gray};
    }

`