import { ButtonStyle } from "./styled";
import LoadingButton from "../LoadingButton";
import { useContext } from "react";
import { UserContext } from "../../store/user-context";

interface actionsContext {
  visualLoading: boolean | null;
}
type TButton = {
  text: string;
};

const Button = ({ text }: TButton) => {
  const userCtx = useContext(UserContext) as actionsContext;
  return (
    <ButtonStyle text={text}>
      {text} {userCtx.visualLoading === true ? <LoadingButton /> : ""}
    </ButtonStyle>
  );
};

export default Button;
