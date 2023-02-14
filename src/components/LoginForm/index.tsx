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
  TextRegister,
} from "./styled";

import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../store/user-context";

const LoginForm = () => {
  interface actionsContext {
    onLogin: () => void;
    onSignIn: (data: {}) => void;
    responseOk: boolean;
  }

  const userCtx = useContext(UserContext) as actionsContext;

  const navigate = useNavigate();
  const [userEmpty, setUserEmpty] = useState<boolean | null>(null);
  const [passwordEmpty, setPasswordEmpty] = useState<boolean | null>(null);
  const [hasError, setHasError] = useState<boolean | null>(null);

  const userRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const loginHandler = () => {
    if (userRef.current) {
      userRef.current.value.length !== 0 || userRef.current.value.includes("@")
        ? setUserEmpty(true)
        : setUserEmpty(false);
    }
  };

  const passwordHandler = () => {
    if (passwordRef.current) {
      passwordRef.current.value.length !== 0
        ? setPasswordEmpty(true)
        : setPasswordEmpty(false);
    }
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const userInfos = {
      email: userRef.current?.value,
      password: passwordRef.current?.value,
    };

    userCtx.onSignIn(userInfos);
    if (userCtx.responseOk) {
      setHasError(false);
      console.log("deu certo");
    } else {
      setHasError(true);
      console.log("n deu certo");
    }
  };
  const registerPageHandler = () => {
    navigate("/register");
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
              placeholder="email.usuario@compass.com"
              type="email"
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
        <TextRegister>
          <span>
            Don't have an account yet?
            <span onClick={registerPageHandler}> Sign Up</span>
          </span>
        </TextRegister>
      </form>
    </GlobalLoginWrapper>
  );
};

export default LoginForm;
