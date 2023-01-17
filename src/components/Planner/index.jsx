import {
  DaysWeek,
  DayOfWeek,
  Time,
  TimeContainer,
  TaskContainer,
  TesteContainer,
  Issues,
  IssuesColor,
} from "./styled";
const Planner = () => {
  return (
    <TesteContainer>
      <DaysWeek>
        <DayOfWeek day="monday">Monday</DayOfWeek>
        <DayOfWeek day="tuesday">Tuesday</DayOfWeek>
        <DayOfWeek day="wednesday">Wednesday</DayOfWeek>
        <DayOfWeek day="thursday">Thursday</DayOfWeek>
        <DayOfWeek day="friday">Friday</DayOfWeek>
        <DayOfWeek day="saturday">Saturday</DayOfWeek>
        <DayOfWeek day="sunday">Sunday</DayOfWeek>
      </DaysWeek>

      <TimeContainer>
        <Time>Time</Time>
        <TaskContainer>
          <Time day="monday">10h30m</Time>

          <Issues>
            <IssuesColor day="monday" />
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem
              ipsum dolor sit amet, consectetur adipiscing elit
            </span>
          </Issues>
        </TaskContainer>
      </TimeContainer>
    </TesteContainer>
  );
};

export default Planner;
