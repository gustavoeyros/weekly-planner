import RegisterForm from "../components/RegisterForm";
import compassLogo from "../assets/compassLogo.svg";
import { FormWrapper, ImageWrapper, GlobalWrapper } from "./styled";
const Register = () => {
  return (
    <GlobalWrapper>
      <FormWrapper>
        <RegisterForm />
      </FormWrapper>
      <ImageWrapper>
        <img src={compassLogo} />
      </ImageWrapper>
    </GlobalWrapper>
  );
};

export default Register;
