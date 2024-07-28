import React from "react";
import { Link } from "react-router-dom";
import {
  ActivityContext,
  ActivityContextType,
} from "../../context/activity-context";

import { CheckCircleIcon } from "@heroicons/react/24/solid";

const Navigation = () => {
  const ctxValue = React.useContext(ActivityContext) as ActivityContextType;

  return (
    <>
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
                <Link to={`overview`} className="text-neutral">
                  Overview
                </Link>
              </li>
              <li>
                <Link to={`list`} className="text-neutral">
                  List
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a
            className="btn btn-ghost text-2xl text-secondary font-bold"
            href="/"
          >
            <CheckCircleIcon className="size-8" />
            DayList
          </a>
        </div>
        <div className="navbar-end">
          <button
            className="btn btn-sm btn-outline w-auto me-3"
            onClick={() => ctxValue.updateModalForm(true)}
          >
            Add Activity
          </button>
        </div>
      </div>
    </>
  );
};

export default Navigation;
