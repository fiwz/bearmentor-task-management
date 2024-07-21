import React from "react";
import dayjs from "dayjs";
import {
  ActivityContext,
  ActivityContextType,
} from "../../context/activity-context";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  description: string;
  tags: string;
  startDate: string;
  endDate: string;
  id?: string;
  type?: string;
  status?: number;
};

const ActivityForm = () => {
  const ctxValue = React.useContext(ActivityContext) as ActivityContextType;
  const activityToUpdate = ctxValue.showSelectedActivity;

  const {
    register,
    handleSubmit,
    // watch,
    reset,
    formState: { errors },
    setValue,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (data.type == "update") {
      ctxValue.updateActivity(data);
    } else {
      ctxValue.addActivity(data);
    }
    resetForm();
    ctxValue.updateModalForm(false);
  };

  const resetForm = () => {
    reset(
      {
        name: "",
        description: "",
        tags: "",
        startDate: activityToUpdate?.startDate
          ? dayjs(activityToUpdate?.startDate)
              .format("YYYY-MM-DDTHH:mm")
              .toString()
          : dayjs().format("YYYY-MM-DDTHH:mm").toString(),
        endDate: activityToUpdate?.endDate
          ? dayjs(activityToUpdate?.endDate)
              .format("YYYY-MM-DDTHH:mm")
              .toString()
          : dayjs().add(2, "hour").format("YYYY-MM-DDTHH:mm").toString(),
        id: activityToUpdate ? activityToUpdate?.id : "",
        type: activityToUpdate ? "update" : "create",
      },
      { keepDefaultValues: true }
    );
  };

  if (activityToUpdate) {
    setValue("name", activityToUpdate.name);
    setValue("description", activityToUpdate.description);
    setValue("tags", activityToUpdate.tags.join(", "));
    setValue(
      "startDate",
      dayjs(activityToUpdate.startDate).format("YYYY-MM-DDTHH:mm")
    );
    setValue(
      "endDate",
      dayjs(activityToUpdate.endDate).format("YYYY-MM-DDTHH:mm")
    );
    setValue("id", activityToUpdate.id);
    setValue("type", "update");
  }

  return (
    <>
      <div
        className={`modal ${ctxValue.modalFormOpen && "modal-open"}`}
        role="dialog"
        id="modalForm"
      >
        <div className="modal-box">
          <div className="modal-action">
            <button
              onClick={() => ctxValue.updateModalForm(false)}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              id="btnCloseModal"
            >
              ✕
            </button>
          </div>
          <h3 className="font-bold text-lg">
            {activityToUpdate ? "Update" : "Create New"} Activity
          </h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="hidden"
              {...register("id")}
              // defaultValue={activityToUpdate ? activityToUpdate?.id : ""}
            />
            <input
              type="hidden"
              {...register("type")}
              // defaultValue={activityToUpdate ? "update" : "create"}
            />
            <div className="flex flex-col justify-center">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Activity</span>
                </div>
                <input
                  autoComplete="off"
                  type="text"
                  {...register("name", {
                    required: "Activity name is required.",
                  })}
                  placeholder="Example: Snowboarding"
                  className="input input-bordered w-full"
                  // defaultValue={activityToUpdate ? activityToUpdate?.name : ""}
                />
                {errors.name && (
                  <p role="alert" className="text-xs text-error pt-1">
                    {errors.name.message}
                  </p>
                )}
              </label>

              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Description</span>
                </div>
                <textarea
                  {...register("description")}
                  className="input input-bordered w-full py-2"
                  // defaultValue={
                  //   activityToUpdate ? activityToUpdate?.description : ""
                  // }
                ></textarea>
              </label>

              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Tags</span>
                </div>
                <input
                  autoComplete="off"
                  type="text"
                  {...register("tags")}
                  placeholder=""
                  className="input input-bordered w-full"
                  // defaultValue={
                  //   activityToUpdate ? activityToUpdate?.tags.join(",") : ""
                  // }
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
                  {...register("startDate")}
                  placeholder=""
                  className="input input-bordered w-full text-sm"
                />
              </label>

              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">End Date</span>
                </div>
                <input
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
                  {...register("endDate")}
                  placeholder=""
                  className="input input-bordered w-full text-sm"
                />
              </label>

              {activityToUpdate && (
                <>
                  <div className="form-control w-full">
                    <label className="label cursor-pointer">
                      <span className="label-text">Complete</span>
                      <input
                        {...register("status")}
                        type="checkbox"
                        className="toggle toggle-primary"
                        defaultChecked={activityToUpdate?.status ? false : true}
                      />
                    </label>
                  </div>
                </>
              )}
            </div>

            <div className="flex justify-end gap-2 mt-2">
              <button
                className="btn btn-primary btn-outline my-3 w-28"
                onClick={() => {
                  resetForm();
                  ctxValue.updateModalForm(false);
                }}
              >
                Cancel
              </button>
              <button className="btn btn-primary my-3 w-28" type="submit">
                {activityToUpdate ? "Update" : "Add"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export { ActivityForm };
