import styled from "styled-components";

export const Loading = styled.div`
  width: 25px;
  height: 25px;
  border: 3px solid white;
  border-top-color: #fdcc01;
  animation: rotation 1s infinite;
  border-radius: 50%;

  @keyframes rotation {
    to {
      transform: rotate(1turn);
    }
  }
`;
