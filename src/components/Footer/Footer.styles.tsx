import styled from "styled-components";

export const Section = styled.section`
    padding-top: 50px;
    padding-bottom: 125px;
    background: ${({ theme }) => theme.colors.white};
`;

export const VersionSection = styled.section`
    padding: 20px 0;
    background: ${({ theme }) => theme.colors.white};
    border-top: 2px solid ${({ theme }) => theme.colors.lightGrey};
`;

export const Version = styled.div`
    color: ${({ theme }) => theme.colors.grey};
    font-size: 1.15rem;
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Columns = styled.div`
    display: flex;
    gap: 6rem;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const LogoWrapper = styled.div`
    align-self: flex-start;
    height: fit-content;
`;

export const Title = styled.h4`
    color: ${({ theme }) => theme.colors.grey};
    font-size: 1.25rem;
`;

export const Link = styled.a`
    font-size: 1.5rem;
    cursor: pointer;
`;