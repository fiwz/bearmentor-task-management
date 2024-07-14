import { TagIcon } from "@heroicons/react/24/solid";
import dayjs from "dayjs";
import { DummyCard } from "./cards-dummy";

function getBadgeClass() {
  const tagClasses = ["", "badge-primary", "badge-secondary", "badge-accent"];
  return tagClasses[Math.floor(Math.random() * tagClasses.length)];
}

const ActivityCard = ({ activities }: any) => {
  function deleteActivity(selectedId: string) {
    const filteredActivities = activities.filter(
      (activity: any) => activity.id !== selectedId
    );
    if (filteredActivities) {
      localStorage.setItem(
        "daylist-activities",
        JSON.stringify(filteredActivities)
      );
    } else {
      activities.length > 0 &&
        localStorage.setItem("daylist-activities", JSON.stringify([]));
    }
  }

  return (
    <>
      {activities.length > 0 ? (
        activities.map((activity: any) => (
          <div key={activity.id} className="card bg-base-100 w-auto shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{activity.name}</h2>
              <p className="text-secondary text-sm">
                Start Date: {dayjs(activity.startDate).toString()}
              </p>
              <p className="text-secondary text-sm">
                End Date: {dayjs(activity.endDate).toString()}
              </p>
              <p>{activity.description}</p>
              <div className="flex content-center flex-wrap gap-1">
                <TagIcon className="size-6 text-secondary pt-1" />
                {activity.tags.map((tag: string, key: any) => (
                  <div
                    key={key}
                    className={`badge badge-outline ${getBadgeClass()}`}
                  >
                    {tag}
                  </div>
                ))}
              </div>
              <div className="card-actions justify-end mt-5">
                {activity.status === 1 && (
                  <button className="btn btn-sm btn-primary">
                    Mark as Complete
                  </button>
                )}
                <button
                  className="btn btn-sm btn-secondary"
                  onClick={() => deleteActivity(activity.id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-sm btn-secondary"
                  // onClick={() => updateActivity(activity.id)}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <DummyCard></DummyCard>
      )}
    </>
  );
};

export default ActivityCard;
