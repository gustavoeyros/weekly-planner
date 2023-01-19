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
import { useState, useRef, useContext } from "react";
import { UserContext } from "../../store/user-context";

const RegisterForm = () => {
  const navigate = useNavigate();
  const { setUserInput } = useContext(UserContext);

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

  const stringRegEx = new RegExp(
    /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/
  );

  //validations
  const firstNameHandler = () => {
    firstNameRef.current.value.length === 0 ||
    stringRegEx.test(firstNameRef.current.value) === false
      ? setEnteredFirstName(false)
      : setEnteredFirstName(true);
  };
  const lastNameHandler = () => {
    lastNameRef.current.value.length === 0 ||
    stringRegEx.test(lastNameRef.current.value) === false
      ? setEnteredLastName(false)
      : setEnteredLastName(true);
  };
  const birthHandler = () => {
    birthRef.current.value.length < 10
      ? setEnteredBirth(false)
      : setEnteredBirth(true);
  };
  const countryHandler = () => {
    countryRef.current.value.length === 0 ||
    stringRegEx.test(countryRef.current.value) === false
      ? setEnteredCountry(false)
      : setEnteredCountry(true);
  };
  const cityHandler = () => {
    cityRef.current.value.length === 0 ||
    stringRegEx.test(cityRef.current.value) === false
      ? setEnteredCity(false)
      : setEnteredCity(true);
  };
  const emailHandler = () => {
    emailRef.current.value.length === 0 ||
    !emailRef.current.value.split("").includes("@")
      ? setEnteredEmail(false)
      : setEnteredEmail(true);
  };
  const passwordHandler = () => {
    passwordRef.current.value.length === 0
      ? setEnteredPassword(false)
      : setEnteredPassword(true);
  };
  const confirmPasswordHandler = () => {
    confirmPasswordRef.current.value.length === 0 ||
    confirmPasswordRef.current.value !== passwordRef.current.value
      ? setEnteredConfirmPassword(false)
      : setEnteredConfirmPassword(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    //validations
    firstNameRef.current.value.length === 0 ||
    stringRegEx.test(firstNameRef.current.value) === false
      ? setEnteredFirstName(false)
      : setEnteredFirstName(true);

    lastNameRef.current.value.length === 0 ||
    stringRegEx.test(lastNameRef.current.value) === false
      ? setEnteredLastName(false)
      : setEnteredLastName(true);

    birthRef.current.value.length < 10
      ? setEnteredBirth(false)
      : setEnteredBirth(true);

    countryRef.current.value.length === 0 ||
    stringRegEx.test(countryRef.current.value) === false
      ? setEnteredCountry(false)
      : setEnteredCountry(true);

    cityRef.current.value.length === 0 ||
    stringRegEx.test(cityRef.current.value) === false
      ? setEnteredCity(false)
      : setEnteredCity(true);

    emailRef.current.value.length === 0 ||
    !emailRef.current.value.split("").includes("@")
      ? setEnteredEmail(false)
      : setEnteredEmail(true);

    passwordRef.current.value.length === 0
      ? setEnteredPassword(false)
      : setEnteredPassword(true);

    confirmPasswordRef.current.value.length === 0 ||
    confirmPasswordRef.current.value !== passwordRef.current.value
      ? setEnteredConfirmPassword(false)
      : setEnteredConfirmPassword(true);

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
        fullName: firstNameRef.current.value + " " + lastNameRef.current.value,
        birth: birthRef.current.value,
        country: countryRef.current.value,
        city: cityRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
        confirmPassword: confirmPasswordRef.current.value,
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
