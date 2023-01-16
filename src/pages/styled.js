import background from "../assets/background.png";
import styled from "styled-components";

export const FormWrapper = styled.div`
  background: linear-gradient(180deg, #33383d 0%, #1c1d20 100%);
  width: 50%;
  height: 100vh;
`;

export const ImageWrapper = styled.div`
  background-image: url(${background});
  width: 50%;
  text-align: center;
`;

export const GlobalWrapper = styled.div`
  display: flex;
`;
