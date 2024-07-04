import styled from "styled-components";

export const Wrapper = styled.nav`
    display: flex;
    padding: 24px 0;
    margin: 0 16px;
    position: absolute;
    top: 0;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    z-index: 100;
`;

export const Logo = styled.div`
    justify-self: flex-start;
    font-family: 'Comfortaa';
    font-size: 2.5rem;
    color: white;
    text-transform: lowercase;
    -webkit-text-stroke: 1px #ffffff;
    display: flex;

    &::after {
        content: '';
        display: inline-block;
        background-color: #ffffff;
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
    gap: 64px;
    height: fit-content;
    cursor: pointer;
`;

export const Link = styled.div`
    font-family: 'Comfortaa';
    font-size: 1.25rem;
    color: white;
    height: fit-content;
`;

export const Button = styled.button`
    background-color: white;
    font-family: 'Nunito Sans';
    color: #3B3D41;
    border: none;
    font-size: 1.25rem;
    border-radius: 10px;
    padding: 8px 20px;
    cursor: pointer;
`;