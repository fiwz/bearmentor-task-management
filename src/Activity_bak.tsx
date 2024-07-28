import { TagIcon } from "@heroicons/react/24/solid";

export interface Activity {
  name: string;
  description: string;
  tags: string[];
  // startDate: Date;
  // endDate: Date;
  startDate: string;
  endDate: string;
  isComplete: boolean;
}

interface ActivityCardProps {
  activity: Activity;
  onDelete: Function;
  onComplete: Function;
}

export function ActivityCard({
  activity,
  onDelete,
  onComplete,
}: ActivityCardProps) {
  return (
    <>
      <div className="card bg-base-100 w-auto shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{activity.name}</h2>
          <p>{activity.description}</p>
          <div className="flex content-center">
            <TagIcon className="size-6 text-success pt-1" />
            <p>Tags: {activity.tags.join(",")}</p>
          </div>
          <div className="card-actions justify-end mt-5">
            {!activity.isComplete ? (
              <button
                onClick={() => onComplete(activity.name)}
                className="btn btn-sm btn-primary"
              >
                Mark as Complete
              </button>
            ) : (
              ""
            )}

            <button
              onClick={() => onDelete(activity.name)}
              className="btn btn-sm btn-secondary"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export function ActivityList({
  activities,
  onDelete,
  onComplete,
}: {
  activities: Activity[];
  onDelete: Function;
  onComplete: Function;
}) {
  return activities.map((item, id) => (
    <ActivityCard
      key={id}
      activity={item}
      onDelete={onDelete}
      onComplete={onComplete}
    />
  ));
}
// export { ActivityList };
