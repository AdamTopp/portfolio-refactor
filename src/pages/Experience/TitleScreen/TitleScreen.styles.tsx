import styled from "styled-components";

export const Section = styled.section`
    min-height: 100vh;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.orangeMain} 40%, ${({ theme }) => theme.colors.orangeSecondary}  100%);
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;

export const Banner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    container-type: inline-size;
`;

export const Text = styled.div`
    line-height: 0.95;
    font-size: 21cqw;
    letter-spacing: -0.5cqw;
    text-transform: uppercase;
    white-space: nowrap;
    user-select: none;
`;

export const OutlineText = styled(Text)`
    color: transparent;
    font-family: ${({ theme }) => theme.fonts.Pathway};
    -webkit-text-stroke: 0.1cqw ${({ theme }) => theme.colors.lighterWhite};
`;

export const MainText = styled(Text)`
    position: relative;
    font-family: ${({ theme }) => theme.fonts.Anton};
    color: ${({ theme }) => theme.colors.white};

    &::before, &::after {
        display: inline-block;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);

        line-height: 1;
        letter-spacing: 0;
        font-size: 3.85cqw;
        font-family: ${({ theme }) => theme.fonts.Playfair};
        color: ${({ theme }) => theme.colors.white};
        text-transform: none;
    }

    &::before {
        content: 'Do you need a website?';
        top: -7.5cqw;
    }

    &::after {
        content: 'Let me help!';
        bottom: -7.5cqw;
    }
`;

export const Scroll = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 32px;
    height: 70px;
    width: 40px;
    border: 2px solid ${({ theme }) => theme.colors.white};
    border-radius: 100px;

    &::after {
        content: '';
        display: inline-block;
        position: absolute;
        top: 5px;
        height: 40%;
        aspect-ratio: 1/1;
        border-radius: 50%;
        background: ${({ theme }) => theme.colors.white};
    }
`;