import { Backdrop, ModalStyled, Actions, ActionButton } from "./styled";
import errorRequest from "../../assets/errorRequest.svg";
interface IModalError {
  children: React.ReactNode;
  changeStateHandler: () => void;
  errorMessage: string;
}

const ModalError = ({
  children,
  changeStateHandler,
  errorMessage,
}: IModalError) => {
  return (
    <Backdrop>
      <ModalStyled>
        <img src={errorRequest} />
        <span>Error!</span>
        <h2>{errorMessage}</h2>
        <Actions>
          <ActionButton onClick={changeStateHandler}>Try again</ActionButton>
        </Actions>
      </ModalStyled>
    </Backdrop>
  );
};

export default ModalError;
