import LoginForm from "../components/LoginForm";
import compassLogo from "../assets/compassLogo.svg";
import { FormWrapper, ImageWrapper, GlobalWrapper } from "./styled";
import ModalError from "../components/ModalError";

interface IRegisterProps {
  changeStateHandler: () => void;
  registerResponse: boolean | null;
  errorMessage: string;
}

const Login = ({
  changeStateHandler,
  registerResponse,
  errorMessage,
}: IRegisterProps) => {
  return (
    <GlobalWrapper>
      {registerResponse === false ? (
        <ModalError
          changeStateHandler={changeStateHandler}
          errorMessage={errorMessage}
        />
      ) : (
        ""
      )}
      <FormWrapper>
        <LoginForm />
      </FormWrapper>
      <ImageWrapper>
        <a href="https://compass.uol/en/home/" target="_blank">
          <img src={compassLogo} />
        </a>
      </ImageWrapper>
    </GlobalWrapper>
  );
};

export default Login;
