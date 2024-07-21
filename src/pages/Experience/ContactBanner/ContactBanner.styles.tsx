import styled from "styled-components";

export const Section = styled.section`
    padding: 80px 0;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.orangeMain} 40%, ${({ theme }) => theme.colors.orangeSecondary}  100%);
`;

export const Content = styled.div`
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
`;

export const Title = styled.h2`
    margin-bottom: 2rem;
    text-align: center;
    white-space: collapse balance;
    font-family: ${({ theme }) => theme.fonts.Nunito};
    color: ${({ theme }) => theme.colors.white};
    line-height: 1;
    font-size: 3.5rem;
    font-weight: 400;
    cursor: default;
`;

export const Highlight = styled.i`
    padding-left: 0.5rem;
    text-align: center;
    width: fit-content;
    white-space: collapse balance;
    font-family: ${({ theme }) => theme.fonts.Playfair};
    color: ${({ theme }) => theme.colors.white};
    font-size: 4.25rem;
    font-weight: 400;
`;