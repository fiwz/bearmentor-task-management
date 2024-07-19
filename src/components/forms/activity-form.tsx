import { useContext, useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { ActivityContext } from "../layouts/master";

const ACTIVITY_STATUS = {
  inactive: 0,
  active: 1,
  progress: 2,
};

interface Activity {
  id: any;
  name: string;
  description: string;
  tags: string[];
  startDate: Dayjs;
  endDate: Dayjs;
  status: number;
}

const ActivityForm = () => {
  const [activities, setActivities] = useState<Activity[]>([]);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    // const inputTags = formData.get("tags") as string;
    const newActivity = {
      // ...formObject,
      id: crypto.randomUUID() as string,
      name: formData.get("name") as string,
      // description: formData.get("description") as string,
      // tags: inputTags ? inputTags.split(",") : [],
      // startDate: dayjs(formData.get("startDate") as string),
      // endDate: dayjs(formData.get("endDate") as string),
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore possimus placeat iste voluptatem molestias",
      tags: ["tag1", "tag2"],
      startDate: dayjs(),
      endDate: dayjs().add(7, "day"),
      status: ACTIVITY_STATUS.active,
    };

    // setActivities([...activities, newActivity]);
    setActivities([newActivity]);

    // event.target.reset();
  };

  useEffect(() => {
    let storedActivity = localStorage.getItem("daylist-activities");
    let previousActivity = [];
    if (storedActivity) {
      previousActivity = JSON.parse(storedActivity);
      const combinedActivity = [...activities, ...previousActivity];

      localStorage.setItem(
        "daylist-activities",
        JSON.stringify(combinedActivity)
      );
    } else {
      activities.length > 0 &&
        localStorage.setItem("daylist-activities", JSON.stringify(activities));
    }
  }, [activities]);

  const { setCoba } = useContext(ActivityContext);
  function handle() {
    setCoba("Geeks");
  }

  return (
    <>
      <div>
        <h3>This is Child1 Component</h3>
        <button onClick={() => handle()}>Click </button>
      </div>

      {/* <dialog id="my_modal_3" className="modal"> */}
      <div className="modal-box">
        <form method="dialog">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            id="btnCloseModal"
          >
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">Create New Activity</h3>
        <form onSubmit={handleSubmit} method="post">
          <div className="flex flex-col justify-center">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Activity</span>
              </div>
              <input
                type="text"
                name="name"
                placeholder="Example: Snowboarding"
                className="input input-bordered w-full"
              />
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Description</span>
              </div>
              <textarea
                name="description"
                className="input input-bordered w-full"
              ></textarea>
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Tags</span>
              </div>
              <input
                type="text"
                name="tags"
                placeholder=""
                className="input input-bordered w-full"
              />
              <div className="label">
                <span className="label-text-alt">
                  Separated by Comma (Example: sport,food,journal){" "}
                </span>
              </div>
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Start Date</span>
              </div>
              <input
                type="datetime-local"
                name="startDate"
                placeholder=""
                className="input input-bordered w-full"
              />
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">End Date</span>
              </div>
              <input
                type="datetime-local"
                name="endDate"
                placeholder=""
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="flex justify-end gap-2">
            <button
              className="btn btn-primary btn-outline my-3 w-40"
              type="reset"
            >
              Cancel
            </button>
            <button className="btn btn-primary my-3 w-40" type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
      {/* </dialog> */}
    </>
  );
};

export { ActivityForm, ACTIVITY_STATUS };
