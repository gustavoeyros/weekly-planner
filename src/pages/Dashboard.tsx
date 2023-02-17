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

  type IAPIObject = {
    _id: string;
    description: string;
  };

  interface IDataApi {
    dayOfWeek: string;
    createdAt: string;
    _id: string;
    description: string;
  }

  interface IPrevEvent {
    dayOfWeek: string;
    createdAt: string;
    _id: string;
    conflicts: IAPIObject[];
  }

  const [task, setTask] = useState<IUser[]>([]);
  const [filteredTask, setFilteredTask] = useState<IPrevEvent[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [dataApi, setDataApi] = useState<IPrevEvent[]>([]);
  const [isLoading, setIsLoading] = useState<boolean | null>(true);
  const [dayOfWeek, setDayOfWeek] = useState("monday");
  const [taskNotFound, setTaskNotFound] = useState(false);

  let prevEvent: IPrevEvent[] = [];

  const addCard = (item: IDataApi) => {
    const conflict = prevEvent.findIndex((meet) => {
      return (
        meet.dayOfWeek === item.dayOfWeek && meet.createdAt === item.createdAt
      );
    });

    if (conflict >= 0) {
      prevEvent[conflict].conflicts.push({
        _id: item._id,
        description: item.description,
      });
    } else {
      prevEvent.push({
        _id: item._id,
        dayOfWeek: item.dayOfWeek,
        createdAt: item.createdAt,
        conflicts: [
          {
            _id: item._id,
            description: item.description,
          },
        ],
      });
    }
    setDataApi(prevEvent);
  };

  const refreshData = () => {
    setDataApi([]);
    prevEvent = [];
  };

  interface ICreateEvent {
    description: string;
    dayOfWeek: string;
  }

  const createEvent = (data: ICreateEvent, token: string) => {
    fetch(`${import.meta.env.VITE_APIBaseURL}/events`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        dayHandler(dayOfWeek, token);
        return res.json();
      })
      .then((data) => {
        console.log(data);
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
        addCard(data.events);
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
        dayHandler(dayOfWeek, token);
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
        dayHandler(dayOfWeek, token);
        return res.json();
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

  const dayHandler = (day: string, token: string) => {
    setIsLoading(true);
    fetch(`${import.meta.env.VITE_APIBaseURL}/events?dayOfWeek=${day}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setIsLoading(false);

        return res.json();
      })
      .then((data) => {
        if (data.events.length === 0) {
          setTaskNotFound(true);
          refreshData();
        } else {
          setTaskNotFound(false);
        }
        for (const events of data.events) {
          const getTimeOfAPI = events.createdAt.split("T");
          const timeFormat = getTimeOfAPI[1].split(".");
          const timeEvent = timeFormat[0].split(":");
          const apiData: IDataApi = {
            _id: events._id,
            dayOfWeek: events.dayOfWeek,
            createdAt: `${timeEvent[0]}:${timeEvent[1]}`,
            description: events.description,
          };

          addCard(apiData);
        }
      })
      .catch((error) => console.log(error));
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
        createEvent={createEvent}
        getEvents={getEvents}
        dayHandler={dayHandler}
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
        isLoading={isLoading}
        taskNotFound={taskNotFound}
        refreshData={refreshData}
      />
    </Background>
  );
};

export default Dashboard;
