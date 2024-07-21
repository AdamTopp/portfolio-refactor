import styled from "styled-components";

export const Wrapper = styled.button`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: ${({ theme }) => theme.colors.white};
    background: none;
    border: none;

    font-size: 1.25rem;
    font-family: ${({ theme }) => theme.fonts.Nunito};
    cursor: pointer;

    svg {
        width: 1.5rem;
        height: 1.5rem;
        color: ${({ theme }) => theme.colors.white};
        fill: ${({ theme }) => theme.colors.white};
    }
`;
