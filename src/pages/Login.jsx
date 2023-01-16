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
        <img src={compassLogo} />
      </ImageWrapper>
    </GlobalWrapper>
  );
};

export default Register;
