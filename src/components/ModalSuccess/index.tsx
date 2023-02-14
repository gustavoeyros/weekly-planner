import { Backdrop, ModalStyled, Actions, ActionButton } from "./styled";
import successRequest from "../../assets/successRequest.svg";

const ModalSuccess = () => {
  return (
    <Backdrop>
      <ModalStyled>
        <img src={successRequest} />
        <span>Success!</span>
        <h2>Account successfully created!</h2>
      </ModalStyled>
    </Backdrop>
  );
};

export default ModalSuccess;
