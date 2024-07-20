import styled from "styled-components";

export const Section = styled.section`
    background: ${(props) => props.theme.colors.white};
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0 20px;
`;

export const Row = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 60px 20px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.lightGrey};
    transition: 0.1s ease-in-out;
    cursor: pointer;

    &:last-child {
        border: none;
    }

    &:hover {
        background-color: ${({ theme }) => theme.colors.lightGrey};
    }
`;

export const Year = styled.span`
    display: flex;
    align-items: center;

    font-size: 2.25rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.grey};
    font-family: ${({ theme }) => theme.fonts.Nunito};

    &::before {
        content: '';
        display: block;
        width: 1cqh;
        margin-right: 2rem;
        aspect-ratio: 1/1;
        border-radius: 50%;
        background: linear-gradient(135deg, ${(props) => props.theme.colors.orangeMain} 40%, ${(props) => props.theme.colors.orangeSecondary}  100%);
    }
`;

export const Name = styled.span`
    padding-left: 5rem;
    font-size: 2rem;
    font-weight: 600;
    font-family: ${({ theme }) => theme.fonts.Nunito};
`;

export const Link = styled.a`
    margin-left: auto;
    font-size: 1.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.orangeMain};
    font-family: ${({ theme }) => theme.fonts.Comfortaa};
    text-decoration: none;
`;

export const LastLink = styled(Link)`
    margin-left: 0;
`;