import styled from "styled-components";

export const Section = styled.section`
  background: linear-gradient(135deg, #FF7502 40%, #E4A70D 100%);;
  height: 100vh;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;

export const Banner = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    container-type: inline-size;
`;

export const Text = styled.div`
    text-transform: uppercase;
    white-space: nowrap;
    line-height: 0.95;
    font-size: 21cqw;
    font-feature-settings: "liga" 0, "clig" 0;
    letter-spacing: -0.5cqw !important;
`;

export const OutlineText = styled(Text)`
    font-family: 'Pathway Gothic One';
    color: transparent;
    -webkit-text-stroke: 0.15cqw #ffffff;
    opacity: 35%;
`;

export const MainText = styled(Text)`
    font-family: 'Anton';
    color: white;
    opacity: 85%;
`;

export const Scroll = styled.div`
    height: 80px;
    width: 40px;
    border: 2px solid white;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 32px;

    &::after {
        content: '';
        display: inline-block;
        top: 3px;
        height: 40%;
        aspect-ratio: 1/1;
        border-radius: 50%;
        background: white;
        position: absolute;
    }
`;