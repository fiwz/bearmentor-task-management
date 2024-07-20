import React from "react";
import dayjs from "dayjs";
import {
  Activity,
  ActivityContext,
  ActivityContextType,
} from "../../context/activity-context";
import { ACTIVITY_STATUS } from "../../context/activity-context";

const ActivityForm = () => {
  const ctxValue = React.useContext(ActivityContext) as ActivityContextType;
  const handleSubmit = (e: any) => {
    e.preventDefault();

    // const formData = new FormData(e.target);
    // const inputTags = formData.get("tags") as string;
    let newActivity = {
      id: crypto.randomUUID() as string,
      // name: formData.get("name") as string,
      // description: formData.get("description") as string,
      // tags: inputTags ? inputTags.split(",") : [],
      // startDate: dayjs(formData.get("startDate") as string),
      // endDate: dayjs(formData.get("endDate") as string),
      status: ACTIVITY_STATUS.active,
      ...formContent,
    };
    newActivity["tags"] = newActivity?.tags?.split(",");
    console.log("coba", newActivity, "tags", newActivity.tags);

    ctxValue.addActivity(newActivity);

    e.target.reset();
  };

  const activityToUpdate = ctxValue.showSelectedActivity;

  const [formContent, setFormContent] = React.useState({});
  const handleForm = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFormContent({
      ...formContent,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  return (
    <>
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
        <h3 className="font-bold text-lg">
          {activityToUpdate ? "Update" : "Create New"} Activity
        </h3>
        <form onSubmit={handleSubmit} method="post">
          <div className="flex flex-col justify-center">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Activity</span>
              </div>
              <input
                onChange={handleForm}
                autoComplete="off"
                type="text"
                name="name"
                placeholder="Example: Snowboarding"
                className="input input-bordered w-full"
                defaultValue={activityToUpdate?.name && activityToUpdate?.name}
              />
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Description</span>
              </div>
              <textarea
                onChange={handleForm}
                name="description"
                className="input input-bordered w-full"
                defaultValue={
                  activityToUpdate?.description && activityToUpdate?.description
                }
              ></textarea>
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Tags</span>
              </div>
              <input
                onChange={handleForm}
                autoComplete="off"
                type="text"
                name="tags"
                placeholder=""
                className="input input-bordered w-full"
                defaultValue={
                  activityToUpdate?.tags && activityToUpdate?.tags.join(",")
                }
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
                onChange={handleForm}
                autoComplete="off"
                type="datetime-local"
                defaultValue={
                  activityToUpdate?.startDate
                    ? dayjs(activityToUpdate?.startDate)
                        .format("YYYY-MM-DDTHH:mm")
                        .toString()
                    : dayjs().format("YYYY-MM-DDTHH:mm").toString()
                }
                min={
                  activityToUpdate?.startDate
                    ? dayjs(activityToUpdate?.startDate)
                        .format("YYYY-MM-DDTHH:mm")
                        .toString()
                    : dayjs().format("YYYY-MM-DDTHH:mm").toString()
                }
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
                onChange={handleForm}
                autoComplete="off"
                type="datetime-local"
                defaultValue={
                  activityToUpdate?.endDate
                    ? dayjs(activityToUpdate?.endDate)
                        .format("YYYY-MM-DDTHH:mm")
                        .toString()
                    : dayjs()
                        .add(2, "hour")
                        .format("YYYY-MM-DDTHH:mm")
                        .toString()
                }
                min={
                  activityToUpdate?.endDate
                    ? dayjs(activityToUpdate?.endDate)
                        .format("YYYY-MM-DDTHH:mm")
                        .toString()
                    : dayjs().format("YYYY-MM-DDTHH:mm").toString()
                }
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
              {activityToUpdate ? "Update" : "Add"}
            </button>
          </div>
        </form>
      </div>
      {/* </dialog> */}
    </>
  );
};

export { ActivityForm };
