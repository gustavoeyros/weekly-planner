import { InputStyle } from "./styled";
const DataInput = ({
  placeholder,
  type,
  enteredRef,
  onChange,
  hasError,
  onFocus,
}) => {
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
        <InputStyle
          placeholder={placeholder}
          type={type}
          ref={enteredRef}
          onChange={onChange}
          hasError={hasError}
          onFocus={onFocus}
        />
      )}

      {type === "birth" && (
        <InputStyle
          placeholder={placeholder}
          type="text"
          onInput={dateHandler}
          hasError={hasError}
          maxLength="10"
          onChange={onChange}
          ref={enteredRef}
        />
      )}
    </>
  );
};

export default DataInput;
