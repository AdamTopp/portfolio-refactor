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

export const Title = styled.h2`
    display: flex;
    flex-direction: column;

    text-align: center;
    font-family: ${({ theme }) => theme.fonts.Nunito};
    font-size: 3.5rem;
    font-weight: 400;
    white-space: collapse balance;
`;

export const Subtitle = styled.h3`
    display: flex;
    flex-direction: column;
    width: fit-content;
    margin-top: 2rem;
    padding: 0.5rem 2rem;
    border: 3px solid ${({ theme }) => theme.colors.lightGrey};
    border-radius: 5rem;

    color: ${({ theme }) => theme.colors.grey};
    font-family: ${({ theme }) => theme.fonts.Nunito};
    font-size: 2rem;
    font-weight: 400;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.white};
`;

export const Cards = styled.div`
    display: flex;
    gap: 8px 42px;
    width: 100%;
    margin: 100px 0;
`;

export const Card = styled.div<{ $number: string }>`
    flex: 1;
    position: relative;
    height: 450px;
    padding: 30px 20px;
    border: 2px solid ${({ theme }) => theme.colors.lightGrey};
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.white};
    overflow: hidden;
    z-index: 0;
    box-shadow: 0 20px 35px rgba(0, 0, 0, 0.05);

    &:nth-child(odd) {
        margin-bottom: 100px;
    }

    &:nth-child(even) {
        margin-top: 100px;
    }

    &::before {
        content: '${({ $number }) => $number}';
        display: inline;
        position: absolute;
        top: 0;
        left: -1.5cqw;
        line-height: 1;
        color: ${({ theme }) => theme.colors.lightBlack};
        font-size: 15cqh;
        font-family: ${({ theme }) => theme.fonts.Anton};
        z-index: -1;
    }
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
    background-color: #ff000036;
    pointer-events: none;
    z-index: 0;
    background: radial-gradient(transparent 60%, ${({ theme }) => theme.colors.backgroundGrey} 80%);
`;
