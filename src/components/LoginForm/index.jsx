import Button from "../Button";
import DataInput from "../DataInput";
import Title from "../Title";
import {
  LoginWrapper,
  GlobalLoginWrapper,
  IconContainer,
  TitleContainer,
} from "./styled";
import iconPassword from "../../assets/icon-password.svg";
import iconUser from "../../assets/icon-user.svg";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };
  return (
    <GlobalLoginWrapper>
      <TitleContainer>
        <Title title="Welcome," />
        <Title subtitle="To continue browsing safely, log in to the network." />
      </TitleContainer>
      <form onSubmit={submitHandler}>
        <LoginWrapper>
          <h2>Login</h2>
          <IconContainer>
            <DataInput placeholder="user name" type="text" />
            <img src={iconUser} />
          </IconContainer>
          <IconContainer>
            <DataInput placeholder="password" type="password" />
            <img src={iconPassword} />
          </IconContainer>
        </LoginWrapper>
        <Button text="Log in" />
      </form>
    </GlobalLoginWrapper>
  );
};

export default LoginForm;
