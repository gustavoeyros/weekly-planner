import Planner from "../components/Planner";
import Header from "../components/Header";
import DashboardActions from "../components/DashboardActions";
import { Background } from "./styled";
import { useEffect, useState } from "react";

//styles
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
} from "../components/Planner/styled";

const Dashboard = () => {
  //add cards
  const [task, setTask] = useState([]);
  const [filteredTask, setFilteredTask] = useState([]);

  const addCard = (item) => {
    setTask((prevState) => {
      item = {
        id: prevState.length + 1,
        ...item,
      };
      return [item, ...prevState];
    });
  };

  const dayHandler = (day) => {
    setFilteredTask(task.filter((item) => item.day === day));
  };

  //delete specific card
  const deleteCard = (id) => {
    const newIssues = task.filter((item) => item.id !== id);
    setTask(newIssues);
  };
  //delete all cards
  const deleteAllCards = () => {
    setTask([]);
  };

  return (
    <Background>
      <Header />
      <DashboardActions
        addHandler={addCard}
        sendNewCard={dayHandler}
        deleteAllCards={deleteAllCards}
      />
      <Planner
        cardTask={task}
        deleteCard={deleteCard}
        dayHandler={dayHandler}
        filteredTask={filteredTask}
      />
    </Background>
  );
};

export default Dashboard;
