import Planner from "../components/Planner";
import Header from "../components/Header";
import DashboardActions from "../components/DashboardActions";
import { Background } from "./styled";
import { useState } from "react";
import Modal from "../components/ModalDeleteAll";

const Dashboard = () => {
  //add cards

  interface IUser {
    name: string;
    day: string;
    time: string;
    conflicts: string[];
    id: number;
  }

  const [task, setTask] = useState<IUser[]>([]);
  const [filteredTask, setFilteredTask] = useState<IUser[]>([]);
  const [showModal, setShowModal] = useState(false);

  const [dayOfWeek, setDayOfWeek] = useState("monday");

  interface ICardProps {
    name: string;
    day: string;
    time: string;
    conflicts: string[];
  }

  const addCard = (item: ICardProps) => {
    const conflict = [...task].findIndex((meet: ICardProps) => {
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

  interface IDay {
    day: string;
    time: string;
  }

  const dayHandler = (day: string) => {
    setFilteredTask(
      task
        .filter((item: IDay) => item.day === day)
        .sort((a: IDay, b: IDay) => a.time.localeCompare(b.time))
    );
  };

  //delete specific card
  const deleteCard = (id: number, indexMeet: number) => {
    const prevTask = [...task];
    const searchConflictIndex = prevTask.findIndex((meet) => {
      return meet.id == id;
    });

    if (prevTask[searchConflictIndex].conflicts.length === 1) {
      prevTask.splice(searchConflictIndex, 1);
    } else {
      prevTask[searchConflictIndex].conflicts.splice(indexMeet, 1);
    }
    setTask(prevTask);
  };

  //delete all cards
  const deleteAllCards = () => {
    const newRemove = task.filter((item: IDay) => item.day !== dayOfWeek);
    setTask(newRemove);
  };

  const modalVisibility = () => {
    setShowModal(!showModal);
  };

  return (
    <Background>
      {showModal ? (
        <Modal
          modalView={modalVisibility}
          deleteAllCards={deleteAllCards}
          dayRemove={dayOfWeek}
        ></Modal>
      ) : (
        ""
      )}
      <Header />
      <DashboardActions
        modalVisibility={modalVisibility}
        addHandler={addCard}
      />
      <Planner
        cardTask={task}
        deleteCard={deleteCard}
        dayHandler={dayHandler}
        filteredTask={filteredTask}
        dayOfWeek={dayOfWeek}
        setDayOfWeek={setDayOfWeek}
      />
    </Background>
  );
};

export default Dashboard;
