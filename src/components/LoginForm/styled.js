import iconPassword from "../../assets/icon-password.svg";
import iconUser from "../../assets/icon-user.svg";
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
  align-items: center;
  & input:focus ~ i {
    transform: translateX(-50px);
  }
  ${(props) =>
    props.empty
      ? `&  i {
    transform: translateX(-50px);
  }`
      : `&  i {
    transform: translateX(100%);
  }`}
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const Icon = styled.i`
  width: 20px;
  transform: translateX(100%);
  transition: 1.5s;
  //height
  height: ${(props) => (props.iconFor === "username" ? "20" : "25")}px;
  //25.1 20
  //image
  ${(props) =>
    props.iconFor === "password"
      ? `background: url(${iconPassword})`
      : `background: url(${iconUser})`}
`;
