import styled, { css } from "styled-components";

export const ButtonWrapper = styled.button<{ $simple?: boolean, $small?: boolean }>`
    color: ${({ theme, $simple }) => $simple ? theme.colors.black : theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.Nunito};
    font-size: ${({ $small }) => $small ? '1.25rem' : '1.5rem'};
    border-radius: 10px;
    padding: 8px 24px;
    border: none;
    box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
    transition: all 0.3s;

    ${({ $simple }) => $simple ? css`
        background: ${({ theme }) => theme.colors.white};
    ` : css`
        background: linear-gradient(135deg, ${({ theme }) => theme.colors.orangeMain} 40%, ${({ theme }) => theme.colors.orangeSecondary}  100%);
    `}

    &:hover {
        filter: brightness(90%);
    }

    &, & * {
        cursor: pointer;
    }
`;
