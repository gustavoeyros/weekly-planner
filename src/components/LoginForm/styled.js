import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 135px;
  margin-bottom: 115px;
`;

export const GlobalLoginWrapper = styled.div`
  & h2 {
    color: #e0e0e0;
    font-weight: 400;
  }
`;

export const IconContainer = styled.div`
  display: flex;

  & img {
    transition: 1s ease-in-out;
    transform: translateX(100%);
  }
  &:has(input:focus) + & img {
    transform: translateX(-40px);
    transition: 1s;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
