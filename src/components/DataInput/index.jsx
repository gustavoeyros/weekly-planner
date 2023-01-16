import { InputStyle, InputWrapper } from "./styled";
const DataInput = ({ label, placeholder }) => {
  return (
    <InputWrapper>
      <label>{label}</label>
      <InputStyle placeholder={placeholder} />
    </InputWrapper>
  );
};

export default DataInput;
