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
import { useRef, useState } from "react";

const LoginForm = () => {
  const navigate = useNavigate();
  const [userEmpty, setUserEmpty] = useState(null);
  const [passwordEmpty, setPasswordEmpty] = useState(null);
  const userRef = useRef();
  const passwordRef = useRef();

  const loginHandler = () => {
    userRef.current.value.length !== 0
      ? setUserEmpty(true)
      : setUserEmpty(false);
  };

  const passwordHandler = () => {
    passwordRef.current.value.length !== 0
      ? setPasswordEmpty(true)
      : setPasswordEmpty(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();
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
          <IconContainer empty={userEmpty}>
            <DataInput
              placeholder="user name"
              type="text"
              enteredRef={userRef}
              onChange={loginHandler}
              hasError={userEmpty}
            />
            <Icon iconFor={"username"} />
          </IconContainer>
          <IconContainer empty={passwordEmpty}>
            <DataInput
              placeholder="password"
              type="password"
              enteredRef={passwordRef}
              onChange={passwordHandler}
              hasError={passwordEmpty}
            />
            <Icon iconFor={"password"} />
          </IconContainer>
        </LoginWrapper>
        <Button text="Log in" />
      </form>
    </GlobalLoginWrapper>
  );
};

export default LoginForm;
