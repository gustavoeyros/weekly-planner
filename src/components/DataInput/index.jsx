import { InputStyle } from "./styled";
const DataInput = ({ placeholder, type, required }) => {
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
        <InputStyle placeholder={placeholder} type={type} required />
      )}

      {type === "birth" && (
        <InputStyle
          placeholder={placeholder}
          type="text"
          onInput={dateHandler}
          maxLength="10"
          required
        />
      )}
    </>
  );
};

export default DataInput;
