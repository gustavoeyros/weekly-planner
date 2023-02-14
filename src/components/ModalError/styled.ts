import styled from "styled-components";

interface IModalError {
  effect: boolean | null;
}

export const Backdrop = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const ModalStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  width: 400px;
  height: 400px;
  border-radius: 10px;
  padding: 50px;
  background-color: white;

  h2 {
    text-align: center;
  }
  span {
    color: red;
    font-size: 50px;
    font-weight: 700;
  }

  & img {
    width: 100px;
  }

  animation: openModal 1s ease-out forwards;

  @keyframes openModal {
    0% {
      opacity: 0;
      transform: translateY(-120%);
    }
    50% {
      opacity: 1;
      transform: translateY(20%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  /*  width: 100%; */
  gap: 50px;
`;

export const ActionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
  border-radius: 5px;
  border: none;
  color: white;
  cursor: pointer;
  gap: 5px;

  img {
    width: 15px;
  }

  background-color: #f21e1e;
`;
