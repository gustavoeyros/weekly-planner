import RegisterForm from "../components/RegisterForm";
import compassLogo from "../assets/compassLogo.svg";
import { FormWrapper, ImageWrapper, GlobalWrapper } from "./styled";
import ModalError from "../components/ModalError";
import ModalSuccess from "../components/ModalSuccess";

interface IRegisterProps {
  changeStateHandler: () => void;
  registerResponse: boolean | null;
  errorMessage: string;
}

const Register = ({
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
      {registerResponse === true ? <ModalSuccess /> : ""}
      <FormWrapper>
        <RegisterForm />
      </FormWrapper>
      <ImageWrapper>
        <a href="https://compass.uol/en/home/" target="_blank">
          <img src={compassLogo} />
        </a>
      </ImageWrapper>
    </GlobalWrapper>
  );
};

export default Register;
