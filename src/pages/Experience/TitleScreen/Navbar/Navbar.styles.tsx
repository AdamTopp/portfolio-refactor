import styled from "styled-components";

export const Wrapper = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 24px 0;
    position: absolute;
    top: 0;
    z-index: 100;
`;

export const Logo = styled.div`
    display: flex;
    justify-self: flex-start;
    position: absolute;
    left: 16px;

    font-size: 2.5rem;
    color: ${(props) => props.theme.colors.white};
    font-family: ${(props) => props.theme.fonts.Comfortaa};

    -webkit-text-stroke: 1px ${(props) => props.theme.colors.white};
    text-transform: lowercase;
    user-select: none;
    cursor: default;

    &::after {
        content: '';
        display: inline-block;
        background-color: ${(props) => props.theme.colors.white};
        height: 1rem;
        aspect-ratio: 1/1;
        border-radius: 50%;
        align-self: center;
        margin-top: 0.25rem;
        margin-left: 0.25rem;
    }
`;

export const Links = styled.div`
    display: flex;
    gap: 3rem;
    height: fit-content;
`;

export const Link = styled.div`
    height: fit-content;
    font-size: 1.25rem;
    color: ${(props) => props.theme.colors.white};
    font-family: ${(props) => props.theme.fonts.Comfortaa};
    cursor: pointer;
`;

export const Buttons = styled.div`
    display: flex;
    gap: 3rem;
    position: absolute;
    right: 16px;
`;

export const Button = styled.button`
    padding: 8px 20px;
    border: none;
    border-radius: 10px;

    font-size: 1.25rem;
    color: ${(props) => props.theme.colors.black};;
    font-family: ${(props) => props.theme.fonts.Nunito};
    background-color: ${(props) => props.theme.colors.white};
    cursor: pointer;
`;