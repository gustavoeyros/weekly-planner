import Button from "../Button";
import DataInput from "../DataInput";
import Title from "../Title";
import {
  LoginWrapper,
  GlobalLoginWrapper,
  IconContainer,
  Icon,
  TitleContainer,
} from "./styled";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../store/user-context";

const LoginForm = () => {
  const { userInput } = useContext(UserContext);
  const navigate = useNavigate();
  console.log(userInput);

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
            <Icon for={"username"} />
          </IconContainer>
          <IconContainer>
            <DataInput placeholder="password" type="password" />
            <Icon for={"password"} />
          </IconContainer>
        </LoginWrapper>
        <Button text="Log in" />
      </form>
    </GlobalLoginWrapper>
  );
};

export default LoginForm;
