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
} from "./styled";

const Planner = ({ cardTask }) => {
  return (
    <Wrapper>
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
        {cardTask.map((item) => {
          return (
            <>
              <TaskContainer>
                <Time day={item.day}>{item.time}</Time>

                <Issues>
                  <IssuesColor day={item.day} />

                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </span>
                  <DeleteButton>Delete</DeleteButton>
                </Issues>
              </TaskContainer>
            </>
          );
        })}
      </TimeContainer>
    </Wrapper>
  );
};

export default Planner;
