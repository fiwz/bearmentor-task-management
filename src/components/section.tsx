import React from "react";
import { ActivityContext, ACTIVITY_STATUS } from "../context/activity-context";

import ActivityCard from "./card";

const SECTION_TYPE = [
  { id: "recent", title: "Recent Activities", list: [] },
  { id: "nearest-deadline", title: "Nearest Deadline", list: [] },
  { id: "complete", title: "Complete Activities", list: [] },
  { id: "all", title: "All Activities", list: [] },
];

// let list = localStorage.getItem("daylist-activities");
// let arrList = list ? JSON.parse(list as string) : [];

const Section = () => {
  // const { activities } = React.useContext(ActivityContext);
  const ctxValue = React.useContext(ActivityContext);
  let arrList = ctxValue?.activities;

  function setListByType(type: string) {
    if (arrList) {
      let filteredList = arrList;
      switch (type) {
        case "recent":
          filteredList = arrList.filter(
            (item: any, idx: number) =>
              item.status === ACTIVITY_STATUS.active && idx <= 3
          );
          return filteredList;

        case "complete":
          filteredList = arrList.filter(
            (item: any, idx: number) =>
              item.status === ACTIVITY_STATUS.inactive && idx <= 3
          );
          return filteredList;

        case "nearest-deadline":
          const sortedList = arrList.sort(
            (a, b) => a.endDate.unix() - b.endDate.unix()
          );
          return sortedList.filter(
            (item: any, idx: number) =>
              item.status === ACTIVITY_STATUS.active && idx <= 3
          );

        default:
          return arrList;
      }
    }
  }

  return (
    <>
      {SECTION_TYPE.map((type, index) => (
        <section className={`py-5 ${type.id}`} key={index}>
          <div
            className={`text-lg text-secondary font-semibold py-3 ${type.id}`}
          >
            {type.title}
          </div>
          <div className="grid grid-cols-4 gap-4">
            <ActivityCard activities={setListByType(type.id)}></ActivityCard>
          </div>
        </section>
      ))}
    </>
  );
};

export default Section;
