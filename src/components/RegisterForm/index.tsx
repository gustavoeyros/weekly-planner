import { useNavigate } from "react-router-dom";
import Button from "../Button";
import DataInput from "../DataInput";
import Title from "../Title";
import {
  RegisterWrapper,
  TitleWrapper,
  InputWrapper,
  TextLogin,
} from "./styled";
import TextLabel from "../TextLabel";
import React, { useState, useRef, useContext } from "react";
import { UserContext } from "../../store/user-context";

const RegisterForm = () => {
  const navigate = useNavigate();

  type User = {
    fullName: string | undefined;
    birth: string | undefined;
    country: string | undefined;
    city: string | undefined;
    email: string | undefined;
    password: string | undefined;
    confirmPassword: string | undefined;
  };

  type UserContext = {
    setUserInput: (value: User) => void;
  };

  const { setUserInput } = useContext(UserContext) as UserContext;

  const [enteredFirstName, setEnteredFirstName] = useState<null | boolean>(
    null
  );
  const [enteredLastName, setEnteredLastName] = useState<null | boolean>(null);
  const [enteredBirth, setEnteredBirth] = useState<null | boolean>(null);
  const [enteredCountry, setEnteredCountry] = useState<null | boolean>(null);
  const [enteredCity, setEnteredCity] = useState<null | boolean>(null);
  const [enteredEmail, setEnteredEmail] = useState<null | boolean>(null);
  const [enteredPassword, setEnteredPassword] = useState<null | boolean>(null);
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState<
    null | boolean
  >(null);

  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const birthRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const stringRegEx = new RegExp(
    /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/
  );

  //validations
  const firstNameHandler = () => {
    if (firstNameRef.current) {
      firstNameRef.current.value.length === 0 ||
      stringRegEx.test(firstNameRef.current.value) === false
        ? setEnteredFirstName(false)
        : setEnteredFirstName(true);
    }
  };
  const lastNameHandler = () => {
    if (lastNameRef.current) {
      lastNameRef.current.value.length === 0 ||
      stringRegEx.test(lastNameRef.current.value) === false
        ? setEnteredLastName(false)
        : setEnteredLastName(true);
    }
  };
  const birthHandler = () => {
    if (birthRef.current) {
      birthRef.current.value.length < 10
        ? setEnteredBirth(false)
        : setEnteredBirth(true);
    }
  };
  const countryHandler = () => {
    if (countryRef.current) {
      countryRef.current.value.length === 0 ||
      stringRegEx.test(countryRef.current.value) === false
        ? setEnteredCountry(false)
        : setEnteredCountry(true);
    }
  };
  const cityHandler = () => {
    if (cityRef.current) {
      cityRef.current.value.length === 0 ||
      stringRegEx.test(cityRef.current.value) === false
        ? setEnteredCity(false)
        : setEnteredCity(true);
    }
  };
  const emailHandler = () => {
    if (emailRef.current) {
      emailRef.current.value.length === 0 ||
      !emailRef.current.value.split("").includes("@")
        ? setEnteredEmail(false)
        : setEnteredEmail(true);
    }
  };
  const passwordHandler = () => {
    if (passwordRef.current) {
      passwordRef.current.value.length === 0
        ? setEnteredPassword(false)
        : setEnteredPassword(true);
    }
  };
  const confirmPasswordHandler = () => {
    if (confirmPasswordRef.current) {
      confirmPasswordRef.current.value.length === 0 ||
      confirmPasswordRef.current.value !== passwordRef.current?.value
        ? setEnteredConfirmPassword(false)
        : setEnteredConfirmPassword(true);
    }
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    //validations
    if (firstNameRef.current) {
      firstNameRef.current.value.length === 0 ||
      stringRegEx.test(firstNameRef.current.value) === false
        ? setEnteredFirstName(false)
        : setEnteredFirstName(true);
    }

    if (lastNameRef.current) {
      lastNameRef.current.value.length === 0 ||
      stringRegEx.test(lastNameRef.current.value) === false
        ? setEnteredLastName(false)
        : setEnteredLastName(true);
    }

    if (birthRef.current) {
      birthRef.current.value.length < 10
        ? setEnteredBirth(false)
        : setEnteredBirth(true);
    }

    if (countryRef.current) {
      countryRef.current.value.length === 0 ||
      stringRegEx.test(countryRef.current.value) === false
        ? setEnteredCountry(false)
        : setEnteredCountry(true);
    }

    if (cityRef.current) {
      cityRef.current.value.length === 0 ||
      stringRegEx.test(cityRef.current.value) === false
        ? setEnteredCity(false)
        : setEnteredCity(true);
    }

    if (emailRef.current) {
      emailRef.current.value.length === 0 ||
      !emailRef.current.value.split("").includes("@")
        ? setEnteredEmail(false)
        : setEnteredEmail(true);
    }

    if (passwordRef.current) {
      passwordRef.current.value.length === 0
        ? setEnteredPassword(false)
        : setEnteredPassword(true);
    }

    if (confirmPasswordRef.current) {
      confirmPasswordRef.current.value.length === 0 ||
      confirmPasswordRef.current.value !== passwordRef.current?.value
        ? setEnteredConfirmPassword(false)
        : setEnteredConfirmPassword(true);
    }

    //submit

    if (
      enteredFirstName &&
      enteredLastName &&
      enteredBirth &&
      enteredCountry &&
      enteredCity &&
      enteredEmail &&
      enteredPassword &&
      enteredConfirmPassword
    ) {
      const inputData = {
        fullName:
          firstNameRef.current?.value + " " + lastNameRef.current?.value,
        birth: birthRef.current?.value,
        country: countryRef.current?.value,
        city: cityRef.current?.value,
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
        confirmPassword: confirmPasswordRef.current?.value,
      };

      setUserInput(inputData);
      localStorage.setItem("user", JSON.stringify(inputData));

      navigate("/login");
    }
  };
  const loginPageHandler = () => {
    navigate("/login");
  };
  return (
    <div>
      <TitleWrapper>
        <Title title="Welcome," />
        <Title subtitle="Please, register to continue" />
      </TitleWrapper>
      <form onSubmit={submitHandler}>
        <RegisterWrapper>
          <InputWrapper>
            <TextLabel text="first name" />
            <DataInput
              placeholder="Your first name"
              type="text"
              enteredRef={firstNameRef}
              onChange={firstNameHandler}
              hasError={enteredFirstName}
            />
          </InputWrapper>
          <InputWrapper>
            <TextLabel text="last name" />
            <DataInput
              placeholder="Your last name"
              type="text"
              enteredRef={lastNameRef}
              onChange={lastNameHandler}
              hasError={enteredLastName}
            />
          </InputWrapper>
          <InputWrapper>
            <TextLabel text="birth date" />
            <DataInput
              placeholder="MM/DD/YYYY"
              type="birth"
              enteredRef={birthRef}
              onChange={birthHandler}
              hasError={enteredBirth}
            />
          </InputWrapper>
          <InputWrapper>
            <TextLabel text="Country" />
            <DataInput
              placeholder="Your Country"
              type="text"
              enteredRef={countryRef}
              onChange={countryHandler}
              hasError={enteredCountry}
            />
          </InputWrapper>
          <InputWrapper>
            <TextLabel text="City" />
            <DataInput
              placeholder="Your City"
              type="text"
              enteredRef={cityRef}
              onChange={cityHandler}
              hasError={enteredCity}
            />
          </InputWrapper>
          <InputWrapper>
            <TextLabel text="e-mail" />
            <DataInput
              placeholder="A valid e-mail here"
              type="email"
              enteredRef={emailRef}
              onChange={emailHandler}
              hasError={enteredEmail}
            />
          </InputWrapper>
          <InputWrapper>
            <TextLabel text="password" />
            <DataInput
              placeholder="Your password"
              type="password"
              enteredRef={passwordRef}
              onChange={passwordHandler}
              hasError={enteredPassword}
            />
          </InputWrapper>
          <InputWrapper>
            <TextLabel text="password" />
            <DataInput
              placeholder="Confirm your password"
              type="password"
              enteredRef={confirmPasswordRef}
              onChange={confirmPasswordHandler}
              hasError={enteredConfirmPassword}
            />
          </InputWrapper>
        </RegisterWrapper>
        <Button text="Register Now" />
        <TextLogin>
          <span>
            Already have an account?
            <span onClick={loginPageHandler}> Sign In</span>
          </span>
        </TextLogin>
      </form>
    </div>
  );
};

export default RegisterForm;
