import Planner from "../components/Planner";
import Header from "../components/Header";
import DashboardActions from "../components/DashboardActions";
import { Background } from "./styled";
import { useState } from "react";

const Dashboard = () => {
  //add cards
  const [task, setTask] = useState([]);

  const addCard = (item) => {
    setTask((prevState) => {
      item = {
        id: prevState.length + 1,
        ...item,
      };
      return [item, ...prevState];
    });
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
      <DashboardActions addHandler={addCard} deleteAllCards={deleteAllCards} />
      <Planner cardTask={task} deleteCard={deleteCard} />
    </Background>
  );
};

export default Dashboard;
