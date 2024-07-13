function ActivityForm(props: any) {
  return (
    <>
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            id="btnCloseModal"
          >
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">Create New Activity</h3>
        <form
          onSubmit={(e: React.SyntheticEvent) => {
            e.preventDefault();
            const target = e.target as typeof e.target & {
              name: { value: string };
              description: { value: string };
              tags: { value: string };
              startDate: { value: string };
              endDate: { value: string };
            };
            const payload = {
              name: target.name.value,
              description: target.description.value,
              tags: target.tags.value,
              startDate: target.startDate.value,
              endDate: target.endDate.value,
            };

            props.formProps.props.addActivity(payload);
            document.getElementById("btnCloseModal").click();
          }}
        >
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
    </>
  );
}

export { ActivityForm };
