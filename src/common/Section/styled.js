import styled from "styled-components";

export const Wrapper = styled.section`
    margin: 3px auto;
    background-color: ${({ theme }) => theme.color.white};
`
export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 300px;
    grid-gap: 20px;
    padding: 5px;
    align-items: center;
    border-bottom: 3px solid ${({ theme }) => theme.color.gallery};

    @media (max-width:${({ theme }) => theme.breakPoint.mobile}px) {
        grid-template-columns: 1fr;
    };
`;

export const Head = styled.h2`
    padding: 20px;
    margin: 0;
    font-size: 16px;
`;