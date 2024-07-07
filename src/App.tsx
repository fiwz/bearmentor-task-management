import { ActivityList } from "./Activity";
import "./App.css";

function App() {
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
                <li>
                  <a className="text-xl">Add New</a>
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
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-24 md:w-auto"
              />
            </div>
          </div>
        </div>
        {/* end of navbar */}

        <section className="recent py-5">
          <div className="text-2xl text-secondary font-semibold py-3">
            Recent Activities
          </div>
          <div className="grid grid-cols-4 gap-4">
            <ActivityList
              name={"Groceries"}
              description={"restock refrigerator"}
              tags={["coba"]}
              startDate={"2024-07-01 10:00:00"}
              endDate={"2024-07-01 11:00:00"}
              isCompleted={false}
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
