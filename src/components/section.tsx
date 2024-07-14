import ActivityCard from "./card";
import { ACTIVITY_STATUS } from "./forms/activity-form";

const SECTION_TYPE = [
  { id: "recent", title: "Recent Activities", list: [] },
  { id: "nearest-deadline", title: "Nearest Deadline", list: [] },
  { id: "complete", title: "Complete Activities", list: [] },
];

let list = localStorage.getItem("daylist-activities");
let arrList = list ? JSON.parse(list as string) : [];

function setListByType(type: string) {
  if (type === "recent") {
    return arrList.filter(
      (item: any) => item.status === ACTIVITY_STATUS.active
    );
  } else if (type === "complete") {
    return arrList.filter(
      (item: any) => item.status === ACTIVITY_STATUS.inactive
    );
  } else {
    return arrList.filter(
      (item: any) => item.status === ACTIVITY_STATUS.progress
    );
  }
}

const Section = () => {
  return (
    <>
      {SECTION_TYPE.map((type, index) => (
        <section className={`py-5 ${type.id}`} key={index}>
          <div
            className={`text-2xl text-secondary font-semibold py-3 ${type.id}`}
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
