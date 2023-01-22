import plannerLogo from "../assets/plannerLogo.png";
import background from "../assets/background.png";
import styled from "styled-components";

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #33383d 0%, #1c1d20 100%);
  width: 50%;
  height: 100vh;
`;

export const ImageWrapper = styled.div`
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 50%;
  text-align: center;
  padding-top: 47.79px;
`;

export const GlobalWrapper = styled.div`
  display: flex;
`;

export const Background = styled.div`
  background-image: url(${plannerLogo});
  background-repeat: no-repeat;
  background-position: bottom right;
  height: 100vh;
  background-color: #f3f3f3;
  overflow-y: hidden;
`;
