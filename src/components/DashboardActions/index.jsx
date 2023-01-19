import removeIcon from "../../assets/deleteIcon.svg";
import addIcon from "../../assets/addIcon.svg";
import {
  InputActions,
  InputTask,
  DaySelect,
  TimeInput,
  ButtonsAction,
  ButtonActionStyle,
  ActionsContainer,
} from "./styled";
import { useRef } from "react";
const DashboardActions = ({ addHandler, deleteAllCards }) => {
  const taskRef = useRef();
  const dayRef = useRef();
  const timeRef = useRef();

  const submitHandler = () => {
    const taskInfo = {
      name: taskRef.current.value,
      day: dayRef.current.value,
      time: timeRef.current.value,
    };

    addHandler(taskInfo);
  };

  const deleteCards = () => {
    deleteAllCards();
  };
  return (
    <ActionsContainer>
      <InputActions>
        <InputTask type="text" placeholder="Task or issue" ref={taskRef} />
        <DaySelect ref={dayRef}>
          <option value="monday" id="monday">
            Monday
          </option>

          <option value="tuesday" id="tuesday">
            Tuesday
          </option>

          <option value="wednesday" id="wednesday">
            Wednesday
          </option>

          <option value="thursday" id="thursday">
            Thursday
          </option>

          <option value="friday" id="friday">
            Friday
          </option>

          <option value="saturday" id="saturday">
            Saturday
          </option>

          <option value="sunday" id="sunday">
            Sunday
          </option>
        </DaySelect>

        <TimeInput type="time" ref={timeRef} />
      </InputActions>

      <ButtonsAction>
        <ButtonActionStyle btnType="add" onClick={submitHandler}>
          <img src={addIcon} />
          Add to calendar
        </ButtonActionStyle>
        <ButtonActionStyle btnType="delete" onClick={deleteCards}>
          <img src={removeIcon} /> Delete All
        </ButtonActionStyle>
      </ButtonsAction>
    </ActionsContainer>
  );
};

export default DashboardActions;
