import styled from "styled-components";

export const Section = styled.section`
    background: ${({ theme }) => theme.colors.white};
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 80px 20px;
`;

export const Row = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 50px 50px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.lightBlack};
    transition: 0.1s ease-in-out;
    &, & * {
        cursor: pointer;
    }

    &:last-child {
        border: none;
    }

    &:hover {
        background-color: ${({ theme }) => theme.colors.lightBlack};
    }
`;

export const Year = styled.span`
    display: flex;
    align-items: center;

    font-size: 1.75rem;
    color: ${({ theme }) => theme.colors.grey};
    font-family: ${({ theme }) => theme.fonts.Nunito};

    &::before {
        content: '';
        display: block;
        width: 1cqh;
        margin-right: 2rem;
        aspect-ratio: 1/1;
        border-radius: 50%;
        background: linear-gradient(135deg, ${({ theme }) => theme.colors.orangeMain} 40%, ${({ theme }) => theme.colors.orangeSecondary}  100%);
    }
`;

export const Name = styled.span`
    padding-left: 5rem;
    font-size: 1.6rem;
    font-weight: 600;
    font-family: ${({ theme }) => theme.fonts.Nunito};
`;

export const Link = styled.div`
    margin-left: auto;
    font-size: 1.25rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.orangeMain};
    font-family: ${({ theme }) => theme.fonts.Comfortaa};
    text-decoration: none;
`;

export const LastLink = styled(Link)`
    margin-left: 0;
`;