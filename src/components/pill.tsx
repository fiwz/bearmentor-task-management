import React from "react";
import { ActivityContext } from "../context/activity-context";
import dayjs from "dayjs";

import { TagIcon, EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import {
  PencilSquareIcon,
  TrashIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { getBadgeClass } from "./card";

const ActivityPill = ({ activities }: any) => {
  const ctxValue = React.useContext(ActivityContext);

  return (
    <>
      {activities.length > 0 ? (
        activities.map((activity: any) => (
          <div key={activity.id} className="card bg-base-100 w-10/12 shadow-xl">
            <div className="card-body">
              <div className="flex justify-between">
                <h2 className="card-title text-base">{activity.name}</h2>

                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="text-sm">
                    <div className="flex text-sm gap-1">
                      <EllipsisHorizontalIcon className="size-5" />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="flex flex-col gap-2 dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                  >
                    {activity.status === 1 && (
                      <li>
                        <button
                          className="btn btn-sm btn-primary text-xs"
                          onClick={() =>
                            ctxValue?.markCompleteActivity(activity.id)
                          }
                        >
                          <CheckCircleIcon className="size-4 text-white" />
                          Mark as Done
                        </button>
                      </li>
                    )}
                    <li>
                      <button
                        className="btn btn-outline btn-sm btn-secondary text-xs"
                        onClick={() => ctxValue?.showActivity(activity.id)}
                      >
                        <PencilSquareIcon className="size-4 text-secondary" />{" "}
                        Edit
                      </button>
                    </li>
                    <li>
                      <button
                        className="btn btn-outline btn-sm btn-error text-xs"
                        onClick={() => ctxValue?.deleteActivity(activity.id)}
                      >
                        <TrashIcon className="size-4 text-error" /> Delete
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

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

              <p className="text-sm">{activity.description}</p>

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

export default ActivityPill;
