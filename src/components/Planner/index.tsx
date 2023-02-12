import { useState } from "react";
import { useEffect } from "react";
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
  TimeStartContainer,
  IssuesContainer,
} from "./styled";

interface IUser {
  name: string;
  day: string;
  time: string;
  conflicts: string[];
  id: number;
}

interface IPlanner {
  filteredTask: IUser[];
  deleteCard: (id: number, indexMeet: number) => void;
  dayHandler: (day: string) => void;
  cardTask: IUser[];
  dayOfWeek: string;
  setDayOfWeek: React.Dispatch<React.SetStateAction<string>>;
}

const Planner = ({
  filteredTask,
  deleteCard,
  dayHandler,
  cardTask,
  dayOfWeek,
  setDayOfWeek,
}: IPlanner) => {
  const [clickEffect, setClickEffect] = useState(1);

  const onDeleteCard = (id: number, indexMeet: number) => {
    deleteCard(id, indexMeet);
  };

  useEffect(() => {
    dayHandler(dayOfWeek);
  }, [cardTask]);

  return (
    <Wrapper>
      <DaysWeek clickEffect={clickEffect}>
        <DayOfWeek
          day="monday"
          onClick={() => {
            setDayOfWeek("monday");
            dayHandler("monday");
            setClickEffect(1);
          }}
        >
          Monday
        </DayOfWeek>
        <DayOfWeek
          day="tuesday"
          onClick={() => {
            setDayOfWeek("tuesday");
            dayHandler("tuesday");
            setClickEffect(2);
          }}
        >
          Tuesday
        </DayOfWeek>
        <DayOfWeek
          day="wednesday"
          onClick={() => {
            setDayOfWeek("wednesday");
            dayHandler("wednesday");
            setClickEffect(3);
          }}
        >
          Wednesday
        </DayOfWeek>
        <DayOfWeek
          day="thursday"
          onClick={() => {
            setDayOfWeek("thursday");
            dayHandler("thursday");
            setClickEffect(4);
          }}
        >
          Thursday
        </DayOfWeek>
        <DayOfWeek
          day="friday"
          onClick={() => {
            setDayOfWeek("friday");
            dayHandler("friday");
            setClickEffect(5);
          }}
        >
          Friday
        </DayOfWeek>
        <DayOfWeek
          day="saturday"
          onClick={() => {
            setDayOfWeek("saturday");
            dayHandler("saturday");
            setClickEffect(6);
          }}
        >
          Saturday
        </DayOfWeek>
        <DayOfWeek
          day="sunday"
          onClick={() => {
            setDayOfWeek("sunday");
            dayHandler("sunday");
            setClickEffect(7);
          }}
        >
          Sunday
        </DayOfWeek>
      </DaysWeek>
      <TimeContainer>
        <TimeStartContainer>
          <Time>Time</Time>
        </TimeStartContainer>

        {filteredTask.map((item: IUser) => {
          const checkConflictsStyle =
            item.conflicts.length > 1 ? "conflict" : "";

          const timeStyle = item.time.split(":");
          return (
            <TaskContainer
              key={item.id}
              //checkConflictsStyle={checkConflictsStyle}
            >
              <Time day={item.day} checkConflictsStyle={checkConflictsStyle}>
                {`${timeStyle[0]}h${timeStyle[1]}m`}
              </Time>

              <IssuesContainer checkConflictsStyle={checkConflictsStyle}>
                {item.conflicts.map((meet, indexMeet) => (
                  <Issues key={`${item.id}_${indexMeet}`}>
                    <IssuesColor
                      day={item.day}
                      checkConflictsStyle={checkConflictsStyle}
                    />

                    <span>{meet}</span>

                    <DeleteContainer>
                      <DeleteButton
                        onClick={() => onDeleteCard(item.id, indexMeet)}
                      >
                        Delete
                      </DeleteButton>
                    </DeleteContainer>
                  </Issues>
                ))}
              </IssuesContainer>
            </TaskContainer>
          );
        })}
      </TimeContainer>
    </Wrapper>
  );
};

export default Planner;
