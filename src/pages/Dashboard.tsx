import Planner from "../components/Planner";
import Header from "../components/Header";
import DashboardActions from "../components/DashboardActions";
import { Background } from "./styled";
import { useState } from "react";
import Modal from "../components/ModalDeleteAll";

const Dashboard = () => {
  //add cards

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
    setIsLoading(true);
    fetch(`${import.meta.env.VITE_APIBaseURL}/events`, {
      method: "POST",
      body: JSON.stringify(data),
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
        console.log(data);
        dayHandler(dayOfWeek, token);
      });
  };

  const deleteSpecificEvent = (token: string, id: string) => {
    setIsLoading(true);
    fetch(`${import.meta.env.VITE_APIBaseURL}/events/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setIsLoading(false);
        return res;
      })
      .then((data) => {
        dayHandler(dayOfWeek, token);
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  const deleteAllEvents = (token: string, day: string) => {
    setIsLoading(true);
    fetch(`${import.meta.env.VITE_APIBaseURL}/events?dayOfWeek=${day}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setIsLoading(false);
        dayHandler(dayOfWeek, token);
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

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
        console.log(data);
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

  const modalVisibility = () => {
    setShowModal(!showModal);
  };

  return (
    <Background>
      {showModal ? (
        <Modal
          modalView={modalVisibility}
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
        dayHandler={dayHandler}
      />
      <Planner
        dayHandler={dayHandler}
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
