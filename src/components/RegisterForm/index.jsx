import { useNavigate } from "react-router-dom";
import Button from "../Button";
import DataInput from "../DataInput";
import Title from "../Title";
import { RegisterWrapper, TitleWrapper, InputWrapper } from "./styled";
import TextLabel from "../TextLabel";
import { useState, useRef } from "react";

const RegisterForm = () => {
  const navigate = useNavigate();

  const [enteredFirstName, setEnteredFirstName] = useState(null);
  const [enteredLastName, setEnteredLastName] = useState(null);
  const [enteredBirth, setEnteredBirth] = useState(null);
  const [enteredCountry, setEnteredCountry] = useState(null);
  const [enteredCity, setEnteredCity] = useState(null);
  const [enteredEmail, setEnteredEmail] = useState(null);
  const [enteredPassword, setEnteredPassword] = useState(null);
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState(null);

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const birthRef = useRef();
  const countryRef = useRef();
  const cityRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  //validations
  const firstNameHandler = () => {
    firstNameRef.current.value.length === 0
      ? setEnteredFirstName(false)
      : setEnteredFirstName(true);
  };
  const lastNameHandler = () => {
    lastNameRef.current.value.length === 0
      ? setEnteredLastName(false)
      : setEnteredLastName(true);
  };
  const birthHandler = () => {
    birthRef.current.value.length === 0
      ? setEnteredBirth(false)
      : setEnteredBirth(true);
  };
  const countryHandler = () => {
    countryRef.current.value.length === 0
      ? setEnteredCountry(false)
      : setEnteredCountry(true);
  };
  const cityHandler = () => {
    cityRef.current.value.length === 0
      ? setEnteredCity(false)
      : setEnteredCity(true);
  };
  const emailHandler = () => {
    emailRef.current.value.length === 0
      ? setEnteredEmail(false)
      : setEnteredEmail(true);
  };
  const passwordHandler = () => {
    passwordRef.current.value.length === 0
      ? setEnteredPassword(false)
      : setEnteredPassword(true);
  };
  const confirmPasswordHandler = () => {
    confirmPasswordRef.current.value.length === 0
      ? setEnteredConfirmPassword(false)
      : setEnteredConfirmPassword(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    firstNameRef.current.value.length === 0
      ? setEnteredFirstName(false)
      : setEnteredFirstName(true);

    lastNameRef.current.value.length === 0
      ? setEnteredLastName(false)
      : setEnteredLastName(true);

    birthRef.current.value.length === 0
      ? setEnteredBirth(false)
      : setEnteredBirth(true);

    countryRef.current.value.length === 0
      ? setEnteredCountry(false)
      : setEnteredCountry(true);

    cityRef.current.value.length === 0
      ? setEnteredCity(false)
      : setEnteredCity(true);

    emailRef.current.value.length === 0
      ? setEnteredEmail(false)
      : setEnteredEmail(true);

    passwordRef.current.value.length === 0
      ? setEnteredPassword(false)
      : setEnteredPassword(true);

    confirmPasswordRef.current.value.length === 0
      ? setEnteredConfirmPassword(false)
      : setEnteredConfirmPassword(true);
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
      </form>
    </div>
  );
};

export default RegisterForm;
