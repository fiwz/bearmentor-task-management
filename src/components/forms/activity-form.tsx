const ActivityForm = () => {
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
        <h3 className="font-bold text-lg">Create New Activity</h3>
        <form>
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
                type="text"
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
                type="text"
                name="endDate"
                placeholder=""
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="flex justify-end">
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

export { ActivityForm };
