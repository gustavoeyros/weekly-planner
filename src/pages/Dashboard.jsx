import Planner from "../components/Planner";
import Header from "../components/Header";
import DashboardActions from "../components/DashboardActions";
import { Background } from "./styled";
import { useState } from "react";

const lazy = [{ id: 1, name: "default", day: "default", time: "default" }];

const Dashboard = () => {
  const [task, setTask] = useState(lazy);

  const addCard = (item) => {
    setTask((prevState) => {
      item = {
        id: prevState.length + 1,
        ...item,
      };
      return [item, ...prevState];
    });
  };

  return (
    <Background>
      <Header />
      <DashboardActions addHandler={addCard} />
      <Planner cardTask={task} />
    </Background>
  );
};

export default Dashboard;
