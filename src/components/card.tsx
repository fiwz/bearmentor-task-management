import { TagIcon } from "@heroicons/react/24/solid";

const ActivityCard = () => {
  return (
    <>
      <div className="card bg-base-100 w-auto shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Lari Pagi</h2>
          <p>Hwaiting!!</p>
          <div className="flex content-center">
            <TagIcon className="size-6 text-secondary pt-1" />
            <p>Tags: sports, habbit</p>
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
