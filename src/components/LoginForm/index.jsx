import Button from "../Button";
import DataInput from "../DataInput";
import Title from "../Title";
import { RegisterWrapper, GlobalLoginWrapper } from "./styled";
const LoginForm = () => {
  return (
    <GlobalLoginWrapper>
      <Title
        title="Welcome,"
        subtitle="To continue browsing safely, log in to the network."
      />
      <form>
        <h2>Login</h2>
        <RegisterWrapper>
          <DataInput placeholder="user name" type="text" />
          <DataInput placeholder="password" type="password" />
        </RegisterWrapper>
        <Button text="Log in" />
      </form>
    </GlobalLoginWrapper>
  );
};

export default LoginForm;
