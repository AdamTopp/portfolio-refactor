import styled from "styled-components";

export const Section = styled.section`
    background: ${(props) => props.theme.colors.white};
    padding: 450px 0;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h2`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    color: ${(props) => props.theme.colors.grey};
    font-size: 4rem;
    font-weight: 100;
    font-style: italic;
    font-family: ${(props) => props.theme.fonts.Playfair};

    &::before {
        content: '';
        display: inline-block;
        width: 16px;
        height: 16px;
        margin-right: 16px;
        border-radius: 50%;
        background: linear-gradient(135deg, ${(props) => props.theme.colors.orangeMain} 40%, ${(props) => props.theme.colors.orangeSecondary}  100%);

    }
`;

export const Text = styled.div`
    font-size: 5rem;
    line-height: 1;
`;

export const Highlight = styled.span<{ textValue: string }>`
    font-family: ${(props) => props.theme.fonts.Playfair};
    font-weight: 900;
    font-style: italic;
    position: relative;
    font-size: 6rem;
    background-image: linear-gradient(135deg, ${(props) => props.theme.colors.orangeMain} 40%, ${(props) => props.theme.colors.orangeSecondary}  100%);
    color: transparent;
    background-clip: text;
    text-shadow: 0 4px 8px ${(props) => props.theme.colors.orangeMain}7f;
    line-height: 1;

    &::before {
        content: '${(props) => props.textValue}';
        display: inline-block;
        position: absolute;
        left: 0;
        background-image: linear-gradient(135deg, ${(props) => props.theme.colors.orangeMain} 40%, ${(props) => props.theme.colors.orangeSecondary}  100%);
        text-shadow: none;
        color: transparent;
        background-clip: text;
    }
`;