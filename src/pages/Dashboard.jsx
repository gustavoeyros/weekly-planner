import Planner from "../components/Planner";
import Header from "../components/Header";
import DashboardActions from "../components/DashboardActions";
import { Background } from "./styled";
import { useState } from "react";

const Dashboard = () => {
  //add cards

  const [task, setTask] = useState([]);
  const [filteredTask, setFilteredTask] = useState([]);

  const [dayOfWeek, setDayOfWeek] = useState("");

  const addCard = (item) => {
    setTask((prevState) => {
      /*    const filterTask = prevState.findIndex((meet) => {
        return meet.day == item.day && meet.time == item.time;
      }); */

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
    const newRemove = task.filter((item) => item.day !== dayOfWeek);
    setTask(newRemove);
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
        deleteAllCards={deleteAllCards}
        dayOfWeek={dayOfWeek}
        setDayOfWeek={setDayOfWeek}
      />
    </Background>
  );
};

export default Dashboard;
