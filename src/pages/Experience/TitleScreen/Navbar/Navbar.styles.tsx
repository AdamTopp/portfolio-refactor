import styled from "styled-components";

export const Wrapper = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 32px 0;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
`;

export const LogoWrapper = styled.div`
    position: absolute;
    left: 16px;
`;

export const Links = styled.div`
    display: flex;
    gap: 3rem;
    height: fit-content;
`;

export const Link = styled.a`
    height: fit-content;
    font-size: 1.15rem;
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.Comfortaa};
    cursor: pointer;
`;

export const Buttons = styled.div`
    display: flex;
    gap: 3rem;
    position: absolute;
    right: 16px;
`;
