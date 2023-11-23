import styled from "styled-components";

export const StyledButton = styled.button`
    border: none;
    min-height: 30px;
    background-color: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.teal};
    transition: color 0.3s;
    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.color.bondiBlue};
    }

    &:disabled {
        color: ${({ theme }) => theme.color.gray};
    }
`