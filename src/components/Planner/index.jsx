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
  Background,
} from "./styled";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Planner = () => {
  const navigate = useNavigate();

  const isLogged = localStorage.getItem("logged");

  const checkLogged = () => {
    if (!isLogged) {
      navigate("/register");
    }
  };

  useEffect(() => {
    checkLogged();
  }, [isLogged]);

  return (
    <Background>
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
          <TaskContainer>
            <Time day="monday">10h30m</Time>

            <Issues>
              <IssuesColor day="monday" />

              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem
                ipsum dolor sit amet, consectetur adipiscing elit
              </span>
              <DeleteButton>Delete</DeleteButton>
            </Issues>
          </TaskContainer>
        </TimeContainer>
      </Wrapper>
    </Background>
  );
};

export default Planner;
