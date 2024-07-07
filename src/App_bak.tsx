import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App_bak() {
  const [count, setCount] = useState(0);

  function Header()
  {
    return (
      <div className="header-wrapper">
        <h1 className="text-3xl font-bold underline">
          DayList
        </h1>
        <div className="menu">
          <ul>
            <li>Overview</li>
            <li>List</li>
            <li>Add Activity</li>
          </ul>
        </div>
      </div>
    )
  }

  function Activity()
  {
    return (
      <div className="wrapper">
        <div className="text-right">Start Date - End Date</div>
        <div className="text-left">Task Name</div>
        <div>Description</div>
        <div>Tags</div>
      </div>
    )
  }

  return (
    <>
      <div className="container mx-auto">
        <Header />
        <div className="grid grid-cols-4 gap-4">
          <Activity />
          <Activity />
          <Activity />
          <Activity />
          <Activity />
          <Activity />
          <Activity />
          <Activity />
        </div>
      </div>

    </>
  );
}

export default App;
