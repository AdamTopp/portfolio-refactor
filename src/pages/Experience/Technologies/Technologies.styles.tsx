import styled from "styled-components";

export const Section = styled.section`
    position: relative;
    display: flex;
    align-items: center;
    padding: 100px 0;
    overflow: hidden;

    background: ${({ theme }) => theme.colors.backgroundGrey};
    background-image: radial-gradient(circle at 50% 50%, #DDDDDD 2px, transparent 0);
    background-size: 70px 70px;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
`;

export const Title = styled.h3`
    position: relative;
    text-align: center;
    white-space: collapse balance;
    font-family: ${({ theme }) => theme.fonts.Nunito};
    line-height: 1;
    font-size: 3.5rem;
    font-weight: 400;
`;

export const Highlight = styled.i`
    position: relative;
    text-align: center;
    width: fit-content;
    white-space: collapse balance;
    font-family: ${({ theme }) => theme.fonts.Playfair};
    color: ${({ theme }) => theme.colors.orangeMain};
    font-size: 4.25rem;
    font-weight: 400;

    &::after {
        content: "";
        width: 110%;
        height: 2px;
        
        background: ${({ theme }) => theme.colors.orangeMain};
        
        position: absolute;
        left: -5%;
        bottom: 0;
        transform: rotate(-2deg);
    }
`;

export const Cards = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 64px 42px;
    width: 100%;
    margin: 100px 0;
`;

export const Card = styled.div`
    padding: 30px;
    min-width: 300px;
    border: 2px solid ${({ theme }) => theme.colors.lightGrey};
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    box-shadow: 0 20px 35px rgba(0, 0, 0, 0.05);
`;

export const Icon = styled.div`
    svg {
        color: ${({ theme }) => theme.colors.orangeMain};
        fill: ${({ theme }) => theme.colors.orangeMain};
        font-size: 4rem;
        z-index: 1;
    }
`;

export const CardTitle = styled.div`
    margin-top: 8px;
    font-family: ${({ theme }) => theme.fonts.Nunito};
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 1;
`;

export const CardSubTitle = styled.div`
    font-family: ${({ theme }) => theme.fonts.Playfair};
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: 2.5rem;
    font-weight: 400;
    line-height: 1;
`;

export const Vigniette = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    max-width: none;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
    background: radial-gradient(transparent 60%, ${({ theme }) => theme.colors.backgroundGrey} 80%);
`;
