import { useState } from "react";
import { Activity, ActivityList } from "./Activity";
import Navigation from "./components/Navigation";
import "./App.css";
import Main from "./components/Main";

function App() {
  const [activities, setActivities] = useState<Activity[]>([
    // {
    //   name: "Kegiatan",
    //   description: "Deskripsi aja",
    //   tags: ["daily"],
    //   startDate: "2024-07-01",
    //   endDate: "2024-07-07",
    //   isComplete: false,
    // },
  ]);

  const [search, setSearch] = useState("");

  function addActivity(payload: any) {
    const newActivity: Activity = {
      // name: "Kegiatan",
      // description: "Deskripsi aja",
      // tags: ["daily"],
      // startDate: "2024-07-01",
      // endDate: "2024-07-07",
      ...payload,
      tags: payload.tags.split(","),
      isComplete: false,
    };
    setActivities((prevActivity) => [newActivity, ...prevActivity]);
  }

  function filterActivity() {
    return activities.filter((activity) => activity.name.includes(search));
  }

  function deleteActivity(deletedName: string) {
    setActivities((prevActivity) =>
      prevActivity.filter((activity) => activity.name !== deletedName)
    );
  }

  function completeActivity(completeName: string) {
    setActivities((prevActivity) =>
      prevActivity.map((activity) =>
        activity.name === completeName
          ? { ...activity, isComplete: true }
          : activity
      )
    );
  }

  return (
    <>
      <Main></Main>
    </>
  );
}

export default App;
