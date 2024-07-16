import styled from "styled-components";

export const Wrapper = styled.button`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: ${(props) => props.theme.colors.white};
    background: none;
    border: none;

    font-size: 1.25rem;
    font-family: ${(props) => props.theme.fonts.Nunito};
    cursor: pointer;

    svg {
        width: 1.5rem;
        height: 1.5rem;
        color: ${(props) => props.theme.colors.white};
        fill: ${(props) => props.theme.colors.white};
    }
`;
