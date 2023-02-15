import LoginForm from "../components/LoginForm";
import compassLogo from "../assets/compassLogo.svg";
import { FormWrapper, ImageWrapper, GlobalWrapper } from "./styled";
import ModalError from "../components/ModalError";

interface ILoginProps {
  changeStateHandler: () => void;
  responseOk: boolean | null;
  errorMessage: string;
}

const Login = ({
  changeStateHandler,
  responseOk,
  errorMessage,
}: ILoginProps) => {
  return (
    <GlobalWrapper>
      {responseOk === false ? (
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
