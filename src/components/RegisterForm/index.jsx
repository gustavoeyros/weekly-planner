import Button from "../Button";
import DataInput from "../DataInput";
import Title from "../Title";
import { RegisterWrapper } from "./styled";

const RegisterForm = () => {
  return (
    <div>
      <Title title="Welcome," subtitle="Please, register to continue" />
      <form>
        <RegisterWrapper>
          <DataInput
            label="first name"
            placeholder="Your first name"
            type="text"
          />
          <DataInput
            label="last name"
            placeholder="Your last name"
            type="text"
          />
          <DataInput label="birth date" placeholder="MM/DD/YYYY" type="birth" />
          <DataInput label="Country" placeholder="Your Country" type="text" />
          <DataInput label="City" placeholder="Your City" type="text" />
          <DataInput
            label="e-mail"
            placeholder="A valid e-mail here"
            type="email"
          />
          <DataInput
            label="password"
            placeholder="Your password"
            type="password"
          />
          <DataInput
            label="password"
            placeholder="Confirm your password"
            type="password"
          />
        </RegisterWrapper>
        <Button text="Register Now" />
      </form>
    </div>
  );
};

export default RegisterForm;
