import styled from "styled-components";

export const ButtonWrapper = styled.button`
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.Nunito};
    font-size: 2rem;
    border-radius: 10px;
    padding: 10px 32px;
    border: none;
    cursor: pointer;
    background: linear-gradient(135deg, ${(props) => props.theme.colors.orangeMain} 40%, ${(props) => props.theme.colors.orangeSecondary}  100%);
`;
