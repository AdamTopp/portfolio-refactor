import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    align-items: center;
    padding: 350px 0;
    background: ${({ theme }) => theme.colors.white};
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h2`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    color: ${({ theme }) => theme.colors.grey};
    font-size: 2.5rem;
    font-weight: 100;
    font-family: ${({ theme }) => theme.fonts.Comfortaa};

    &::before {
        content: '';
        display: inline-block;
        width: 16px;
        height: 16px;
        margin-right: 16px;
        border-radius: 50%;
        background: linear-gradient(135deg, ${({ theme }) => theme.colors.orangeMain} 40%, ${({ theme }) => theme.colors.orangeSecondary}  100%);
    }
`;

export const Text = styled.div`
    font-size: 4.5rem;
    line-height: 1;
`;

export const Highlight = styled.span`
    position: relative;

    line-height: 1;
    color: transparent;
    font-size: 5rem;
    font-weight: 900;
    font-family: ${({ theme }) => theme.fonts.Playfair};
    font-style: italic;

    background-image: linear-gradient(135deg, ${({ theme }) => theme.colors.orangeMain} 40%, ${({ theme }) => theme.colors.orangeSecondary}  100%);
    background-clip: text;
    text-shadow: 0 4px 8px ${({ theme }) => theme.colors.orangeMain}7f;
`;

export const Subtitle = styled.div`
    margin-top: 100px;
    padding-top: 16px;
    border-top: 2px solid ${({ theme }) => theme.colors.lightGrey};

    color: ${({ theme }) => theme.colors.lightGrey};
    font-size: 1.5rem;
    font-family: ${({ theme }) => theme.fonts.Comfortaa};
    text-align: end;
    text-transform: uppercase;
`;