import dayjs from "dayjs";
import React from "react";
import { ActivityContext } from "../context/activity-context";

import { TagIcon } from "@heroicons/react/24/solid";
import {
  PencilSquareIcon,
  TrashIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

export function getBadgeClass() {
  const tagClasses = ["", "badge-primary", "badge-secondary", "badge-accent"];
  return tagClasses[Math.floor(Math.random() * tagClasses.length)];
}

const ActivityCard = ({ activities }: any) => {
  const ctxValue = React.useContext(ActivityContext);

  return (
    <>
      {activities.length > 0 ? (
        activities.map((activity: any) => (
          <div key={activity.id} className="card bg-base-100 w-auto shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-base">{activity.name}</h2>
              <div className="flex flex-col flex-wrap">
                <p className="text-secondary text-xs">
                  Start Date:{" "}
                  {dayjs(activity.startDate)
                    .format("dddd, MMMM D, YYYY h:mm A")
                    .toString()}
                </p>
                <p className="text-secondary text-xs">
                  End Date:{" "}
                  {dayjs(activity.endDate)
                    .format("dddd, MMMM D, YYYY h:mm A")
                    .toString()}
                </p>
              </div>
              <p className="text-sm pb-3">{activity.description}</p>

              <div className="flex content-center flex-wrap gap-1">
                {activity.tags && activity.tags.length > 0 && (
                  <>
                    <TagIcon className="size-5 text-secondary" />
                    {activity.tags.map((tag: string, key: any) => (
                      <div
                        key={key}
                        className={`badge badge-outline ${getBadgeClass()} text-xs`}
                      >
                        {tag}
                      </div>
                    ))}
                  </>
                )}
              </div>

              <div className="flex card-actions justify-end mt-5">
                <button
                  className="btn btn-outline btn-sm btn-error text-xs"
                  onClick={() => ctxValue?.deleteActivity(activity.id)}
                >
                  <TrashIcon className="size-4 text-error" />
                </button>
                <button
                  className="btn btn-outline btn-sm btn-secondary text-xs"
                  onClick={() => ctxValue?.showActivity(activity.id)}
                >
                  <PencilSquareIcon className="size-4 text-secondary" />
                </button>
                {activity.status === 1 && (
                  <button
                    className="btn btn-sm btn-primary text-xs"
                    onClick={() => ctxValue?.markCompleteActivity(activity.id)}
                  >
                    <CheckCircleIcon className="size-4 text-white" />
                    Mark as Done
                  </button>
                )}
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="flex justify-start">
          <div>No activities available</div>
        </div>
      )}
    </>
  );
};

export default ActivityCard;
