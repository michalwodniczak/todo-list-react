import styled from "styled-components";

export const FormBody = styled.form`
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 130px;
    grid-gap: 30px;

    @media (max-width:768px)
    {
        grid-template-columns: 1fr;
        grid-gap: 10px;
    };
`;

export const Button = styled.button`
    background-color: #008080;
    color: #fff;
    border: none;
    font-size: 16px;
    cursor: pointer;
    transition: background 1s, transform 1s;

    @media (max-width:768px) {
        padding: 10px;
    };

    &:focus{
        background-color: #00b3b3;
    };

    &:hover{
        background-color: #00b3b3;
        transform: scale(1.1);
    };

    &:active{
        background-color: #009999;
    };
`;