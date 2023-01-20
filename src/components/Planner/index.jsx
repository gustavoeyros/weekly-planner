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

const Planner = ({
  filteredTask,
  deleteCard,
  dayHandler,
  cardTask,
  dayOfWeek,
  setDayOfWeek,
}) => {
  const onDeleteCard = (id) => {
    deleteCard(id);
  };

  useEffect(() => {
    dayHandler(dayOfWeek);
  }, [cardTask]);

  return (
    <Wrapper>
      <DaysWeek>
        <DayOfWeek
          day="monday"
          onClick={() => {
            setDayOfWeek("monday");
            dayHandler("monday");
          }}
        >
          Monday
        </DayOfWeek>
        <DayOfWeek
          day="tuesday"
          onClick={() => {
            setDayOfWeek("tuesday");
            dayHandler("tuesday");
          }}
        >
          Tuesday
        </DayOfWeek>
        <DayOfWeek
          day="wednesday"
          onClick={() => {
            setDayOfWeek("wednesday");
            dayHandler("wednesday");
          }}
        >
          Wednesday
        </DayOfWeek>
        <DayOfWeek
          day="thursday"
          onClick={() => {
            setDayOfWeek("thursday");
            dayHandler("thursday");
          }}
        >
          Thursday
        </DayOfWeek>
        <DayOfWeek
          day="friday"
          onClick={() => {
            setDayOfWeek("friday");
            dayHandler("friday");
          }}
        >
          Friday
        </DayOfWeek>
        <DayOfWeek
          day="saturday"
          onClick={() => {
            setDayOfWeek("saturday");
            dayHandler("saturday");
          }}
        >
          Saturday
        </DayOfWeek>
        <DayOfWeek
          day="sunday"
          onClick={() => {
            setDayOfWeek("sunday");
            dayHandler("sunday");
          }}
        >
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
