import { InputStyle, InputWrapper } from "./styled";
const DataInput = ({ label, placeholder, type }) => {
  //date mask
  const dateHandler = (e) => {
    let v = e.target.value.replace(/\D/g, "");

    v = v.replace(/(\d{2})(\d)/, "$1/$2");

    v = v.replace(/(\d{2})(\d)/, "$1/$2");

    e.target.value = v;
  };
  return (
    <>
      {type !== "birth" && (
        <InputWrapper>
          <label>{label}</label>
          <InputStyle placeholder={placeholder} type={type} />
        </InputWrapper>
      )}

      {type === "birth" && (
        <InputWrapper>
          <label>{label}</label>
          <InputStyle
            placeholder={placeholder}
            type={"text"}
            onInput={dateHandler}
            maxLength="10"
          />
        </InputWrapper>
      )}
    </>
  );
};

export default DataInput;
