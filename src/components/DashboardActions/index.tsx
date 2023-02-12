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
import { useRef, useState } from "react";

interface ICardProps {
  name: string;
  day: string;
  time: string;
  conflicts: string[];
}

interface IDashboard {
  addHandler: (item: ICardProps) => void;
  modalVisibility: () => void;
}

const DashboardActions = ({ addHandler, modalVisibility }: IDashboard) => {
  const taskRef = useRef<HTMLInputElement>(null);
  const dayRef = useRef<HTMLSelectElement>(null);
  const timeRef = useRef<HTMLInputElement>(null);

  const [taskState, setTaskState] = useState<null | boolean>(null);
  const [timeState, setTimeState] = useState<null | boolean>(null);

  const descriptionHandler = () => {
    if (taskRef.current) {
      taskRef.current.value.length === 0
        ? setTaskState(false)
        : setTaskState(true);
    }
  };

  const timeHandler = () => {
    if (timeRef.current) {
      timeRef.current.value.length === 0
        ? setTimeState(false)
        : setTimeState(true);
    }
  };

  const submitHandler = () => {
    if (taskRef.current && dayRef.current && timeRef.current) {
      const taskInfo = {
        name: taskRef.current.value,
        day: dayRef.current.value,
        time: timeRef.current.value,
        conflicts: [taskRef.current.value],
      };

      if (taskRef.current.value.length === 0) {
        setTaskState(false);
      }

      if (timeRef.current.value.length === 0) {
        setTimeState(false);
      }

      if (taskState && timeState) {
        addHandler(taskInfo);
      }
    }
  };

  return (
    <ActionsContainer>
      <InputActions>
        <InputTask
          type="text"
          placeholder="Task or issue"
          ref={taskRef}
          onChange={descriptionHandler}
          error={taskState}
        />
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

        <TimeInput
          type="time"
          ref={timeRef}
          onChange={timeHandler}
          error={timeState}
        />
      </InputActions>

      <ButtonsAction>
        <ButtonActionStyle btnType="add" onClick={submitHandler}>
          <img src={addIcon} />
          Add to calendar
        </ButtonActionStyle>
        <ButtonActionStyle btnType="delete" onClick={() => modalVisibility()}>
          <img src={removeIcon} /> Delete All
        </ButtonActionStyle>
      </ButtonsAction>
    </ActionsContainer>
  );
};

export default DashboardActions;
