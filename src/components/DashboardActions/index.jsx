import { Actions, InputTask, DaySelect, TimeInput } from "./styled";
const DashboardActions = () => {
  return (
    <Actions>
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
    </Actions>
  );
};

export default DashboardActions;
