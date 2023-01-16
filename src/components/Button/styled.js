import styled from "styled-components";

export const ButtonStyle = styled.button`
  font-size: 32px;
  height: 67px;
  cursor: pointer;
  border-radius: 50px;
  border: none;

  background: linear-gradient(90deg, #ff2d04 0%, #c13216 100%);
  box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
  color: #ffffff;

  ${(props) =>
    props.text === "Register Now" ? "width: 471px;" : "width 379px;"}
`;
