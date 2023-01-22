import Planner from "../components/Planner";
import Header from "../components/Header";
import DashboardActions from "../components/DashboardActions";
import { Background } from "./styled";
import { useState } from "react";
import { useEffect } from "react";

const Dashboard = () => {
  //add cards

  const [task, setTask] = useState([]);
  const [filteredTask, setFilteredTask] = useState([]);

  const [dayOfWeek, setDayOfWeek] = useState("");

  const addCard = (item) => {
    const conflict = [...task].findIndex((meet) => {
      return meet.day === item.day && meet.time === item.time;
    });

    const updatedTask = [...task];
    if (conflict >= 0) {
      updatedTask[conflict].conflicts.push(item.name);
    } else {
      updatedTask.push({
        id: updatedTask.length + 1,
        ...item,
      });
    }

    setTask(updatedTask);
  };

  const dayHandler = (day) => {
    setFilteredTask(task.filter((item) => item.day === day));
  };

  const sortTime = () => {
    setFilteredTask(
      [...filteredTask].sort((a, b) => a.time.localeCompare(b.time))
    );
  };

  //delete specific card
  const deleteCard = (id) => {
    const getOriginalID = id.split("_");
    const prevTask = [...task];
    const searchConflictIndex = prevTask.findIndex((meet) => {
      return meet.id == getOriginalID[0];
    });

    if (prevTask[searchConflictIndex].conflicts.length === 1) {
      prevTask.splice(searchConflictIndex, 1);
    } else {
      prevTask[searchConflictIndex].conflicts.splice(getOriginalID[1], 1);
    }
    setTask(prevTask);
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
        sortTime={sortTime}
      />
      <Planner
        cardTask={task}
        deleteCard={deleteCard}
        dayHandler={dayHandler}
        filteredTask={filteredTask}
        deleteAllCards={deleteAllCards}
        dayOfWeek={dayOfWeek}
        setDayOfWeek={setDayOfWeek}
        sortTime={sortTime}
      />
    </Background>
  );
};

export default Dashboard;
