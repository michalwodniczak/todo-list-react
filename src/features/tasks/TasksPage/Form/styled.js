import styled from "styled-components";

export const FormBody = styled.form`
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 130px;
    grid-gap: 30px;

    @media (max-width:${({theme}) => theme.breakPoint.mobile}px)
    {
        grid-template-columns: 1fr;
        grid-gap: 10px;
    };
`;

export const Button = styled.button`
    background-color: ${({ theme }) => theme.color.teal};
    color: #fff;
    border: none;
    font-size: 16px;
    cursor: pointer;
    transition: background 1s, transform 1s;

    @media (max-width:768px) {
        padding: 10px;
    };

    &:focus{
        background-color: ${({ theme }) => theme.color.bondieBlue};
    };

    &:hover{
        background-color: ${({ theme }) => theme.color.bondieBlue};
        transform: scale(1.1);
    };

    &:active{
        background-color: ${({ theme }) => theme.color.persianGreen};
    };
`;