import { useEffect, useState } from "react";
import {
  DaysWeek,
  DayOfWeek,
  Time,
  TimeContainer,
  TaskContainer,
  Wrapper,
  Issues,
  IssuesColor,
  DeleteButton,
  DeleteContainer,
} from "./styled";

const Planner = ({ cardTask, deleteCard }) => {
  const [filteredTask, setFilteredTask] = useState([]);

  const onDeleteCard = (id) => {
    deleteCard(id);
  };

  const dayHandler = (day) => {
    setFilteredTask(cardTask.filter((item) => item.day === day));
  };

  useEffect(() => {
    dayHandler();
  }, []);
  return (
    <Wrapper>
      <DaysWeek>
        <DayOfWeek day="monday" onClick={() => dayHandler("monday")}>
          Monday
        </DayOfWeek>
        <DayOfWeek day="tuesday" onClick={() => dayHandler("tuesday")}>
          Tuesday
        </DayOfWeek>
        <DayOfWeek day="wednesday" onClick={() => dayHandler("wednesday")}>
          Wednesday
        </DayOfWeek>
        <DayOfWeek day="thursday" onClick={() => dayHandler("thursday")}>
          Thursday
        </DayOfWeek>
        <DayOfWeek day="friday" onClick={() => dayHandler("friday")}>
          Friday
        </DayOfWeek>
        <DayOfWeek day="saturday" onClick={() => dayHandler("saturday")}>
          Saturday
        </DayOfWeek>
        <DayOfWeek day="sunday" onClick={() => dayHandler("sunday")}>
          Sunday
        </DayOfWeek>
      </DaysWeek>

      <TimeContainer>
        <Time>Time</Time>
        {filteredTask.map((item) => {
          return (
            <TaskContainer key={item.id}>
              <Time day={item.day}>{item.time}</Time>
              <Issues>
                <IssuesColor day={item.day} />

                <span>{item.name}</span>

                <DeleteContainer>
                  <DeleteButton onClick={() => onDeleteCard(item.id)}>
                    Delete
                  </DeleteButton>
                </DeleteContainer>
              </Issues>
            </TaskContainer>
          );
        })}
      </TimeContainer>
    </Wrapper>
  );
};

export default Planner;
