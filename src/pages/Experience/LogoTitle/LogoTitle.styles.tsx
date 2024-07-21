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

export const Title = styled.div`
    font-size: 17cqw;
    display: flex;
    align-items: start;
    -webkit-text-stroke: 1.6cqw ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.Comfortaa};
    color: ${({ theme }) => theme.colors.white};
    text-transform: lowercase;
    white-space: nowrap;
    user-select: none;
    overflow: hidden;
    height: 12.5cqw;
    letter-spacing: 0.5cqw;
    text-align: center;
    max-width: fit-content;

    &::after {
        content: '';
        display: block;
        align-self: flex-end;
        border-radius: 50%;
        transform: translateY(50%);
        background-color: white;
        height: 6cqw;
        aspect-ratio: 1/1;
        margin-left: 1cqw;
    }
`;

export const SubTitle = styled.div`
    align-self: flex-end;
    font-size: 2.5cqw;
    font-family: ${({ theme }) => theme.fonts.Playfair};
    color: ${({ theme }) => theme.colors.lightWhite};
    text-transform: uppercase;
`;