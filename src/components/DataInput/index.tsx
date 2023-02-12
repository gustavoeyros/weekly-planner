import { InputStyle } from "./styled";

interface IDataProps {
  placeholder?: string;
  type?: string;
  enteredRef?: React.RefObject<HTMLInputElement>;
  onChange?: () => void;
  hasError?: boolean | null;
  onFocus?: () => void;
  submitCheck?: boolean | null;
}

const DataInput = ({
  placeholder,
  type,
  enteredRef,
  onChange,
  hasError,
  onFocus,
  submitCheck,
}: IDataProps) => {
  //date mask
  const dateHandler = (e: React.FormEvent) => {
    let v = (e.target as HTMLInputElement).value.replace(/\D/g, "");

    v = v.replace(/(\d{2})(\d)/, "$1/$2");

    v = v.replace(/(\d{2})(\d)/, "$1/$2");

    (e.target as HTMLInputElement).value = v;
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
          submitCheck={submitCheck}
        />
      )}

      {type === "birth" && (
        <InputStyle
          placeholder={placeholder}
          type="text"
          onInput={dateHandler}
          hasError={hasError}
          maxLength={10}
          onChange={onChange}
          ref={enteredRef}
        />
      )}
    </>
  );
};

export default DataInput;
