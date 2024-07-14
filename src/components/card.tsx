import { TagIcon } from "@heroicons/react/24/solid";

function getBadgeClass() {
  const tagClasses = ["", "badge-primary", "badge-secondary", "badge-accent"];
  return tagClasses[Math.floor(Math.random() * tagClasses.length)];
}

const ActivityCard = () => {
  return (
    <>
      <div className="card bg-base-100 w-auto shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Lari Pagi</h2>
          <p>Hwaiting!!</p>
          <div className="flex content-center flex-wrap gap-1">
            <TagIcon className="size-6 text-secondary pt-1" />
            <div className={`badge badge-outline ${getBadgeClass()}`}>
              default
            </div>
            <div
              className={`badge badge-primary badge-outline ${getBadgeClass()}`}
            >
              primary
            </div>
            <div
              className={`badge badge-secondary badge-outline ${getBadgeClass()}`}
            >
              secondary
            </div>
            <div
              className={`badge badge-accent badge-outline ${getBadgeClass()}`}
            >
              accent
            </div>
          </div>
          <div className="card-actions justify-end mt-5">
            <button className="btn btn-sm btn-primary">Mark as Complete</button>
            <button className="btn btn-sm btn-secondary">Delete</button>
            <button className="btn btn-sm btn-secondary">Update</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivityCard;
