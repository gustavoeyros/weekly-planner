import styled from "styled-components";

type TButton = {
  text: string;
};

export const ButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  height: 67px;
  cursor: pointer;
  border-radius: 50px;
  border: none;

  background: linear-gradient(90deg, #ff2d04 0%, #c13216 100%);
  box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
  color: #ffffff;

  & div {
    position: absolute;
    margin-top: 5px;
    margin-left: ${(props: TButton) =>
      props.text === "Register Now" ? 250 : 150}px;
  }

  ${(props: TButton) =>
    props.text === "Register Now" ? "width: 471px;" : "width 379px;"}
`;
