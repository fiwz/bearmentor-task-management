import { ActivityForm } from "./forms/ActivityForm";

function Navigation(props: any) {
  return (
    <>
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

      <dialog id="modalAddActivity" className="modal">
        <ActivityForm formProps={props}></ActivityForm>
      </dialog>
    </>
  );
}

export default Navigation;
