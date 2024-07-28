import { useState } from "react";
import { Activity, ActivityList } from "./Activity";
import Navigation from "./components/Navigation";
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
      // name: "Kegiatan",
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
        <Navigation props={{ setActivities, addActivity }}></Navigation>

        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto mt-5"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

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
                  <button className="btn">Mark as Complete</button>
                </div>
              </div>
            </div>

            <div className="card bg-primary text-primary-content w-auto">
              <div className="card-body">
                <h2 className="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn">Mark as Complete</button>
                </div>
              </div>
            </div>

            <div className="card bg-primary text-primary-content w-auto">
              <div className="card-body">
                <h2 className="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn">Mark as Complete</button>
                </div>
              </div>
            </div>

            <div className="card bg-primary text-primary-content w-auto">
              <div className="card-body">
                <h2 className="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn">Mark as Complete</button>
                </div>
              </div>
            </div>

            <div className="card bg-primary text-primary-content w-auto">
              <div className="card-body">
                <h2 className="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn">Mark as Complete</button>
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
                  <button className="btn btn-primary">Delete</button>
                  <button className="btn btn-ghost">Update</button>
                </div>
              </div>
            </div>
            <div className="card bg-neutral text-neutral-content w-auto">
              <div className="card-body items-center text-center">
                <h2 className="card-title">Cookies!</h2>
                <p>We are using cookies for no reason.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Delete</button>
                  <button className="btn btn-ghost">Update</button>
                </div>
              </div>
            </div>
            <div className="card bg-neutral text-neutral-content w-auto">
              <div className="card-body items-center text-center">
                <h2 className="card-title">Cookies!</h2>
                <p>We are using cookies for no reason.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Delete</button>
                  <button className="btn btn-ghost">Update</button>
                </div>
              </div>
            </div>
            <div className="card bg-neutral text-neutral-content w-auto">
              <div className="card-body items-center text-center">
                <h2 className="card-title">Cookies!</h2>
                <p>We are using cookies for no reason.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Delete</button>
                  <button className="btn btn-ghost">Update</button>
                </div>
              </div>
            </div>
            <div className="card bg-neutral text-neutral-content w-auto">
              <div className="card-body items-center text-center">
                <h2 className="card-title">Cookies!</h2>
                <p>We are using cookies for no reason.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Delete</button>
                  <button className="btn btn-ghost">Update</button>
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
