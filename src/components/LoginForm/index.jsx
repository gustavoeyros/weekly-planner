import Button from "../Button";
import DataInput from "../DataInput";
import Title from "../Title";
import { LoginWrapper, GlobalLoginWrapper, IconContainer } from "./styled";
import iconPassword from "../../assets/icon-password.svg";
import iconUser from "../../assets/icon-user.svg";
const LoginForm = () => {
  return (
    <GlobalLoginWrapper>
      <Title
        title="Welcome,"
        subtitle="To continue browsing safely, log in to the network."
      />
      <form>
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
