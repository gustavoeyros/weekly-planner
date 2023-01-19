import LoginForm from "../components/LoginForm";
import compassLogo from "../assets/compassLogo.svg";
import { FormWrapper, ImageWrapper, GlobalWrapper } from "./styled";
const Register = () => {
  return (
    <GlobalWrapper>
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

export default Register;
