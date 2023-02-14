import { Backdrop, ModalStyled, Actions, ActionButton } from "./styled";
import removeIcon from "../../assets/removeIcon.svg";
import IconDeleteButton from "../../assets/IconDeleteButton.svg";

interface IModal {
  modalView: () => void;
  deleteAllCards: () => void;
  dayRemove: string;
}

const Modal = ({ modalView, deleteAllCards, dayRemove }: IModal) => {
  const deleteAndRemove = () => {
    modalView();
    deleteAllCards();
  };

  return (
    <Backdrop>
      <ModalStyled>
        <img src={removeIcon} />
        <h2>
          You want to delete all cards of <span>{dayRemove}</span>?
        </h2>
        <Actions>
          <ActionButton textType="confirm" onClick={() => deleteAndRemove()}>
            <img src={IconDeleteButton} />
            Confirm
          </ActionButton>
          <ActionButton textType="cancel" onClick={() => modalView()}>
            Cancel
          </ActionButton>
        </Actions>
      </ModalStyled>
    </Backdrop>
  );
};

export default Modal;
