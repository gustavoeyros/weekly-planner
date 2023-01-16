import Button from "../Button";
import DataInput from "../DataInput";
import Title from "../Title";
import { RegisterWrapper } from "./styled";

const RegisterForm = () => {
  return (
    <>
      <Title title="Welcome," subtitle="Please, register to continue" />
      <RegisterWrapper>
        <DataInput label="first name" placeholder="Your first name" />
        <DataInput label="last name" placeholder="Your last name" />
        <DataInput label="birth date" placeholder="MM/DD/YYYY" />
        <DataInput label="Country" placeholder="Your Country" />
        <DataInput label="City" placeholder="Your City" />
        <DataInput label="e-mail" placeholder="A valid e-mail here" />
        <DataInput label="password" placeholder="Your password" />
        <DataInput label="password" placeholder="Comfirm your password" />
      </RegisterWrapper>
      <Button text="Register Now" />
    </>
  );
};

export default RegisterForm;
