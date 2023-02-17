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
type IAPIObject = {
  _id: string;
  description: string;
};

interface IDataApi {
  dayOfWeek: string;
  createdAt: string;
  _id: string;
  conflicts: IAPIObject[];
}

interface IPlanner {
  filteredTask: IDataApi[];
  deleteCard: (id: number, indexMeet: number) => void;
  dayHandler: (token: string, day: string) => void;
  cardTask: IUser[];
  dayOfWeek: string;
  setDayOfWeek: React.Dispatch<React.SetStateAction<string>>;
  dataApi: IDataApi[];
  deleteSpecificEvent: (token: string, id: string) => void;
  isLoading: boolean;
}

const Planner = ({
  filteredTask,
  deleteCard,
  dayHandler,
  cardTask,
  dayOfWeek,
  setDayOfWeek,
  dataApi,
  deleteSpecificEvent,
  isLoading,
}: IPlanner) => {
  const [clickEffect, setClickEffect] = useState(1);

  const tokenStorage = JSON.parse(localStorage.getItem("logged") || "");

  useEffect(() => {
    dayHandler(dayOfWeek, tokenStorage.token);
  }, []);

  return (
    <Wrapper>
      <DaysWeek clickEffect={clickEffect}>
        <DayOfWeek
          day="monday"
          onClick={() => {
            setDayOfWeek("monday");
            dayHandler("monday", tokenStorage.token);
            setClickEffect(1);
          }}
        >
          Monday
        </DayOfWeek>
        <DayOfWeek
          day="tuesday"
          onClick={() => {
            setDayOfWeek("tuesday");
            dayHandler("tuesday", tokenStorage.token);
            setClickEffect(2);
          }}
        >
          Tuesday
        </DayOfWeek>
        <DayOfWeek
          day="wednesday"
          onClick={() => {
            setDayOfWeek("wednesday");
            dayHandler("wednesday", tokenStorage.token);
            setClickEffect(3);
          }}
        >
          Wednesday
        </DayOfWeek>
        <DayOfWeek
          day="thursday"
          onClick={() => {
            setDayOfWeek("thursday");
            dayHandler("thursday", tokenStorage.token);
            setClickEffect(4);
          }}
        >
          Thursday
        </DayOfWeek>
        <DayOfWeek
          day="friday"
          onClick={() => {
            setDayOfWeek("friday");
            dayHandler("friday", tokenStorage.token);
            setClickEffect(5);
          }}
        >
          Friday
        </DayOfWeek>
        <DayOfWeek
          day="saturday"
          onClick={() => {
            setDayOfWeek("saturday");
            dayHandler("saturday", tokenStorage.token);
            setClickEffect(6);
          }}
        >
          Saturday
        </DayOfWeek>
        <DayOfWeek
          day="sunday"
          onClick={() => {
            setDayOfWeek("sunday");
            dayHandler("sunday", tokenStorage.token);
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

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          dataApi.map((item) => {
            const tokenStorage = JSON.parse(
              localStorage.getItem("logged") || ""
            );

            const checkConflictsStyle =
              item.conflicts.length > 1 ? "conflict" : "";

            return (
              <TaskContainer key={item._id}>
                <Time
                  day={item.dayOfWeek}
                  checkConflictsStyle={checkConflictsStyle}
                >
                  {item.createdAt}
                </Time>
                <IssuesContainer checkConflictsStyle={checkConflictsStyle}>
                  {item.conflicts.map((data) => (
                    <Issues key={data._id}>
                      <IssuesColor
                        day={item.dayOfWeek}
                        checkConflictsStyle={checkConflictsStyle}
                      />
                      <span>{data.description}</span>
                      <DeleteContainer>
                        <DeleteButton
                          onClick={() =>
                            deleteSpecificEvent(tokenStorage.token, item._id)
                          }
                        >
                          Delete
                        </DeleteButton>
                      </DeleteContainer>
                    </Issues>
                  ))}
                </IssuesContainer>
              </TaskContainer>
            );
          })
        )}
      </TimeContainer>
    </Wrapper>
  );
};

export default Planner;
