import { useState } from "react";
import { Activity, ActivityList } from "./Activity";
import "./App.css";

function App() {
  const [activities, setActivities] = useState<Activity[]>([
    // {
    //   name: "Kegiatan",
    //   description: "Deskripsi aja",
    //   tags: ["daily"],
    //   startDate: "2024-07-01",
    //   endDate: "2024-07-07",
    //   isComplete: false,
    // },
  ]);

  const [search, setSearch] = useState("");

  function addActivity(payload: any) {
    const newActivity: Activity = {
      // name: "Kegiatan add function",
      // description: "Deskripsi aja",
      // tags: ["daily"],
      // startDate: "2024-07-01",
      // endDate: "2024-07-07",
      ...payload,
      tags: payload.tags.split(","),
      isComplete: false,
    };
    setActivities((prevActivity) => [newActivity, ...prevActivity]);
  }

  function filterActivity() {
    return activities.filter((activity) => activity.name.includes(search));
  }

  function deleteActivity(deletedName: string) {
    setActivities((prevActivity) =>
      prevActivity.filter((activity) => activity.name !== deletedName)
    );
  }

  function completeActivity(completeName: string) {
    setActivities((prevActivity) =>
      prevActivity.map((activity) =>
        activity.name === completeName
          ? { ...activity, isComplete: true }
          : activity
      )
    );
  }

  return (
    <>
      <div className="container mx-auto mb-10 pb-5 w-screen">
        {/* navbar */}
        <div className="navbar bg-base-100 py-4">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="text-xl">Overview</a>
                </li>
                <li>
                  <a className="text-xl">List</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-center">
            <a className="btn btn-ghost text-4xl text-secondary font-bold">
              DayList
            </a>
          </div>
          <div className="navbar-end">
            <a
              href="#"
              className="btn btn-outline w-52 text-lg"
              onClick={() =>
                document.getElementById("modalAddActivity").showModal()
              }
            >
              Add Activity
            </a>
          </div>
        </div>
        {/* end of navbar */}

        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto mt-5"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* You can open the modal using document.getElementById('ID').showModal() method */}

        <dialog id="modalAddActivity" className="modal">
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

                console.log("ini isinya", payload);

                addActivity(payload);
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
        </dialog>

        <section className="recent py-5">
          <div className="text-2xl text-secondary font-semibold py-3">
            Recent Activities
          </div>
          <div className="grid grid-cols-4 gap-4">
            <ActivityList
              // activities={activities}
              activities={filterActivity()}
              onDelete={deleteActivity}
              onComplete={completeActivity}
            ></ActivityList>
          </div>
        </section>

        <section className="recent py-5">
          <div className="text-2xl text-secondary font-semibold py-3">
            Nearest Deadline
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className="card bg-primary text-primary-content w-auto">
              <div className="card-body">
                <h2 className="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn">Buy Now</button>
                </div>
              </div>
            </div>

            <div className="card bg-primary text-primary-content w-auto">
              <div className="card-body">
                <h2 className="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn">Buy Now</button>
                </div>
              </div>
            </div>

            <div className="card bg-primary text-primary-content w-auto">
              <div className="card-body">
                <h2 className="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn">Buy Now</button>
                </div>
              </div>
            </div>

            <div className="card bg-primary text-primary-content w-auto">
              <div className="card-body">
                <h2 className="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn">Buy Now</button>
                </div>
              </div>
            </div>

            <div className="card bg-primary text-primary-content w-auto">
              <div className="card-body">
                <h2 className="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="recent py-5">
          <div className="text-2xl text-secondary font-semibold py-3">
            Complete Activities
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className="card bg-neutral text-neutral-content w-auto">
              <div className="card-body items-center text-center">
                <h2 className="card-title">Cookies!</h2>
                <p>We are using cookies for no reason.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Accept</button>
                  <button className="btn btn-ghost">Deny</button>
                </div>
              </div>
            </div>
            <div className="card bg-neutral text-neutral-content w-auto">
              <div className="card-body items-center text-center">
                <h2 className="card-title">Cookies!</h2>
                <p>We are using cookies for no reason.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Accept</button>
                  <button className="btn btn-ghost">Deny</button>
                </div>
              </div>
            </div>
            <div className="card bg-neutral text-neutral-content w-auto">
              <div className="card-body items-center text-center">
                <h2 className="card-title">Cookies!</h2>
                <p>We are using cookies for no reason.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Accept</button>
                  <button className="btn btn-ghost">Deny</button>
                </div>
              </div>
            </div>
            <div className="card bg-neutral text-neutral-content w-auto">
              <div className="card-body items-center text-center">
                <h2 className="card-title">Cookies!</h2>
                <p>We are using cookies for no reason.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Accept</button>
                  <button className="btn btn-ghost">Deny</button>
                </div>
              </div>
            </div>
            <div className="card bg-neutral text-neutral-content w-auto">
              <div className="card-body items-center text-center">
                <h2 className="card-title">Cookies!</h2>
                <p>We are using cookies for no reason.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Accept</button>
                  <button className="btn btn-ghost">Deny</button>
                </div>
              </div>
            </div>{" "}
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
