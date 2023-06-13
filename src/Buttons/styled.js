import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

@media (max-width:768px) {
        grid-template-columns: 1fr;
        grid-gap:20px;
        padding:10px;
    };
`;

export const Button = styled.button`
    border: none;
    max-height: 30px;
    background-color: #fff;
    color: #008080;
    transition: color 0.3s;
    cursor: pointer;

    &:hover {
        color: #00b3b3;
    }

    &:disabled {
        color: gray;
    }

`