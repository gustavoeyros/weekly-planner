import iconPassword from "../../assets/icon-password.svg";
import iconUser from "../../assets/icon-user.svg";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

type propslogin = {
  hasError?: boolean | null;
  empty?: boolean | null;
  iconFor?: string | null;
};

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 135px;
  margin-bottom: ${({ hasError }: propslogin) => (hasError ? "47px" : "115px")};

  & div:nth-child(4) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
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
  ${(props: propslogin) =>
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
  height: ${(props: propslogin) =>
    props.iconFor === "username" ? "20" : "25"}px;
  //25.1 20
  //image
  ${(props) =>
    props.iconFor === "password"
      ? `background: url(${iconPassword})`
      : `background: url(${iconUser})`}
`;
export const Error = styled.div`
  text-align: center;

  color: #e9b425;
  width: 100%;
  font-weight: 600;
  font-size: 16px;

  & span {
    width: 283px;
  }
`;

export const TextRegister = styled.div`
  display: flex;
  justify-content: center;
  padding: 9px;
  & span {
    color: white;
  }
  & span > span {
    color: orange;
    cursor: pointer;
  }
`;
