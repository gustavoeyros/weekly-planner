import { useNavigate } from "react-router-dom";
import Button from "../Button";
import DataInput from "../DataInput";
import Title from "../Title";
import { RegisterWrapper, TitleWrapper, InputWrapper } from "./styled";
import TextLabel from "../TextLabel";

const RegisterForm = () => {
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
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
            <DataInput placeholder="Your first name" type="text" />
          </InputWrapper>
          <InputWrapper>
            <TextLabel text="last name" />
            <DataInput placeholder="Your last name" type="text" />
          </InputWrapper>
          <InputWrapper>
            <TextLabel text="birth date" />
            <DataInput placeholder="MM/DD/YYYY" type="birth" />
          </InputWrapper>
          <InputWrapper>
            <TextLabel text="Country" />
            <DataInput placeholder="Your Country" type="text" />
          </InputWrapper>
          <InputWrapper>
            <TextLabel text="City" />
            <DataInput placeholder="Your City" type="text" />
          </InputWrapper>
          <InputWrapper>
            <TextLabel text="e-mail" />
            <DataInput placeholder="A valid e-mail here" type="email" />
          </InputWrapper>
          <InputWrapper>
            <TextLabel text="password" />
            <DataInput placeholder="Your password" type="password" />
          </InputWrapper>
          <InputWrapper>
            <TextLabel text="password" />
            <DataInput placeholder="Confirm your password" type="password" />
          </InputWrapper>
        </RegisterWrapper>
        <Button text="Register Now" />
      </form>
    </div>
  );
};

export default RegisterForm;
