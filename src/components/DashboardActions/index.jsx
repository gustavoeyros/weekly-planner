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
const DashboardActions = () => {
  return (
    <ActionsContainer>
      <InputActions>
        <InputTask type="text" placeholder="Task or issue" />
        <DaySelect>
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

        <TimeInput type="time" />
      </InputActions>

      <ButtonsAction>
        <ButtonActionStyle btnType="add">
          <img src={addIcon} />
          Add to calendar
        </ButtonActionStyle>
        <ButtonActionStyle btnType="delete">
          <img src={removeIcon} /> Delete All
        </ButtonActionStyle>
      </ButtonsAction>
    </ActionsContainer>
  );
};

export default DashboardActions;
