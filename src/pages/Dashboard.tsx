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

  interface IDataApi {
    description: string;
    dayOfWeek: string;
    createdAt: string;
    _id: string;
  }

  const [task, setTask] = useState<IUser[]>([]);
  const [filteredTask, setFilteredTask] = useState<IDataApi[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [dataApi, setDataApi] = useState([]);

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

  const createEvent = (data: {}, token: string) => {
    fetch(`${import.meta.env.VITE_APIBaseURL}/events`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      console.log(res);
    });
  };

  const getEvents = (token: string) => {
    fetch(`${import.meta.env.VITE_APIBaseURL}/events`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.events);
        setDataApi(data.events);
      })
      .catch((error) => console.log(error));
  };

  const deleteSpecificEvent = (token: string, id: string) => {
    fetch(`${import.meta.env.VITE_APIBaseURL}/events/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(res);
        return res;
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  const deleteAllEvents = (token: string, day: string) => {
    fetch(`${import.meta.env.VITE_APIBaseURL}/events?dayOfWeek=${day}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(res);
        return res;
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  interface IDay {
    dayOfWeek: string;
    time: string;
  }

  const dayHandler = (day: string) => {
    setFilteredTask(
      dataApi.filter((item: IDay) => item.dayOfWeek === day)
      /*         .sort((a: IDay, b: IDay) => a.time.localeCompare(b.time)) */
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
    console.log("em manutenção");
    /* const newRemove = task.filter((item: IDay) => item.dayOfWeek !== dayOfWeek);
    setTask(newRemove); */
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
          deleteAllEvents={deleteAllEvents}
        ></Modal>
      ) : (
        ""
      )}
      <Header />
      <DashboardActions
        modalVisibility={modalVisibility}
        addHandler={addCard}
        createEvent={createEvent}
        getEvents={getEvents}
      />
      <Planner
        cardTask={task}
        deleteCard={deleteCard}
        dayHandler={dayHandler}
        filteredTask={filteredTask}
        dayOfWeek={dayOfWeek}
        setDayOfWeek={setDayOfWeek}
        dataApi={dataApi}
        deleteSpecificEvent={deleteSpecificEvent}
      />
    </Background>
  );
};

export default Dashboard;
