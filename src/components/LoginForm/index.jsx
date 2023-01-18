import Button from "../Button";
import DataInput from "../DataInput";
import Title from "../Title";
import {
  LoginWrapper,
  GlobalLoginWrapper,
  IconContainer,
  Icon,
  TitleContainer,
  Error,
} from "./styled";

import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../store/user-context";

const LoginForm = () => {
  const userCtx = useContext(UserContext);

  const navigate = useNavigate();
  const [userEmpty, setUserEmpty] = useState(null);
  const [passwordEmpty, setPasswordEmpty] = useState(null);
  const [hasError, setHasError] = useState(null);
  const userStorage = JSON.parse(localStorage.getItem("user"));
  const emailStorage = userStorage?.email;
  const nameStorage = userStorage?.fullName;
  const passwordStorage = userStorage?.password;

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

    if (
      (userRef.current.value === nameStorage &&
        passwordRef.current.value === passwordStorage) ||
      (userRef.current.value === emailStorage &&
        passwordRef.current.value === passwordStorage)
    ) {
      navigate("/dashboard");
      userCtx.onLogin();
    } else {
      setHasError(true);
    }
  };
  return (
    <GlobalLoginWrapper>
      <TitleContainer>
        <Title title="Welcome," />
        <Title subtitle="To continue browsing safely, log in to the network." />
      </TitleContainer>
      <form onSubmit={submitHandler}>
        <LoginWrapper hasError={hasError}>
          <h2>Login</h2>
          <IconContainer empty={userEmpty}>
            <DataInput
              placeholder="user name"
              type="text"
              enteredRef={userRef}
              onChange={loginHandler}
              hasError={userEmpty}
              submitCheck={hasError}
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
              submitCheck={hasError}
            />
            <Icon iconFor={"password"} />
          </IconContainer>
          {hasError === true && (
            <Error>
              <span>Wow, invalid username or password. Please, try again!</span>
            </Error>
          )}
        </LoginWrapper>
        <Button text="Log in" />
      </form>
    </GlobalLoginWrapper>
  );
};

export default LoginForm;
