import styled from "styled-components";

export const Logo = styled.div<{ logoColor?: string }>`
    display: flex;
    align-items: center;
    font-size: 2.5rem;
    color: ${({ logoColor, theme }) => logoColor ? logoColor : theme.colors.black};
    font-family: ${(props) => props.theme.fonts.Comfortaa};

    -webkit-text-stroke: 1px ${({ logoColor, theme }) => logoColor ? logoColor : theme.colors.black};
    text-transform: lowercase;
    user-select: none;
    cursor: default;

    &::after {
        content: '';
        display: inline-block;
        background-color: ${({ logoColor, theme }) => logoColor ? logoColor : theme.colors.black};
        height: 1rem;
        aspect-ratio: 1/1;
        border-radius: 50%;
        align-self: center;
        margin-top: 0.25rem;
        margin-left: 0.25rem;
    }
`;