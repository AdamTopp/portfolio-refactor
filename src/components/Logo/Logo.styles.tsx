import styled from "styled-components";

export const Logo = styled.div<{ $logocolor?: string }>`
    display: flex;
    align-items: center;
    font-size: 2rem;
    color: ${({ $logocolor, theme }) => $logocolor ? $logocolor : theme.colors.black};
    font-family: ${({ theme }) => theme.fonts.Comfortaa};

    -webkit-text-stroke: 1px ${({ $logocolor, theme }) => $logocolor ? $logocolor : theme.colors.black};
    text-transform: lowercase;
    user-select: none;
    cursor: default;

    &::after {
        content: '';
        display: inline-block;
        background-color: ${({ $logocolor, theme }) => $logocolor ? $logocolor : theme.colors.black};
        height: 0.75rem;
        aspect-ratio: 1/1;
        border-radius: 50%;
        align-self: center;
        margin-top: 0.25rem;
        margin-left: 0.25rem;
    }
`;