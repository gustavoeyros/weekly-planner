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
interface ICreateEvent {
  description: string;
  dayOfWeek: string;
}

interface IDashboard {
  addHandler: (item: ICardProps) => void;
  modalVisibility: () => void;
  createEvent: (data: ICreateEvent, token: string) => void;
  getEvents: (token: string) => void;
  dayHandler: (day: string, token: string) => void;
}

const DashboardActions = ({
  addHandler,
  modalVisibility,
  createEvent,
  getEvents,
  dayHandler,
}: IDashboard) => {
  const taskRef = useRef<HTMLInputElement>(null);
  const dayRef = useRef<HTMLSelectElement>(null);

  const [taskState, setTaskState] = useState<null | boolean>(null);

  const descriptionHandler = () => {
    if (taskRef.current) {
      taskRef.current.value.length === 0
        ? setTaskState(false)
        : setTaskState(true);
    }
  };

  const submitHandler = () => {
    if (taskRef.current && dayRef.current) {
      const taskInfo: ICreateEvent = {
        description: taskRef.current.value,
        dayOfWeek: dayRef.current.value,
      };

      if (taskRef.current.value.length === 0) {
        setTaskState(false);
      }

      const tokenStorage = JSON.parse(localStorage.getItem("logged") || "");

      if (taskState) {
        createEvent(taskInfo, tokenStorage.token);
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
