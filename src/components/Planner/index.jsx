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
} from "./styled";

const Planner = ({
  filteredTask,
  deleteCard,
  dayHandler,
  cardTask,
  dayOfWeek,
  setDayOfWeek,
  sortTime,
}) => {
  const onDeleteCard = (id) => {
    deleteCard(id);
  };

  useEffect(() => {
    dayHandler(dayOfWeek);
    sortTime();
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
          const checkConflictsStyle =
            item.conflicts.length > 1 ? "conflict" : "";

          const timeStyle = item.time.split(":");
          return (
            <TaskContainer checkConflictsStyle={checkConflictsStyle}>
              <Time day={item.day} checkConflictsStyle={checkConflictsStyle}>
                {`${timeStyle[0]}h${timeStyle[1]}m`}
              </Time>

              {item.conflicts.map((meet, indexMeet) => (
                <Issues key={`${item.id}_${indexMeet}`}>
                  <IssuesColor day={item.day} />

                  <span>{meet}</span>

                  <DeleteContainer>
                    <DeleteButton
                      onClick={() => onDeleteCard(`${item.id}_${indexMeet}`)}
                    >
                      Delete
                    </DeleteButton>
                  </DeleteContainer>
                </Issues>
              ))}
            </TaskContainer>
          );
        })}
      </TimeContainer>
    </Wrapper>
  );
};

export default Planner;
