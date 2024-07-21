import { ActivityContext } from "../../context/activity-context";
import { DaisySearchIcon } from "../icons/search";
import ActivityPill from "../pill";
import React, { useMemo, useState } from "react";
import debouce from "lodash.debounce";
// import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";

const ListView = ({ children }: any) => {
  const ctxValue = React.useContext(ActivityContext);
  let arrList = ctxValue?.activities;

  const [search, setSearch] = useState<string>("");

  const showList = () => {
    let list = arrList;
    if (search) {
      return list?.filter((item) => {
        let searchText = search.toLowerCase();
        return (
          item.name.toLowerCase().includes(searchText) ||
          item.description.toLowerCase().includes(searchText)
        );
      });
    } else {
      return list;
    }
  };

  function handleSearchChange(e: any) {
    setSearch(e.target.value);
  }

  const debouncedResults = useMemo(() => {
    return debouce(handleSearchChange, 300);
  }, []);

  return (
    <>
      {children}
      <div className="text-secondary text-xl font-semibold pt-6 pb-3 text-center">
        All Activities
      </div>
      <div className="flex my-3 align-middle gap-1 justify-end">
        {/* <div className="dropdown dropdown-bottom">
          <div tabIndex={0} role="button" className="text-sm">
            <div className="flex text-sm gap-1">
              <AdjustmentsHorizontalIcon className="size-5" />
              Sort by
            </div>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <a>Default</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div> */}

        <label className="input input-bordered input-sm flex items-center gap-2">
          <input
            type="text"
            name="search"
            className="grow"
            placeholder="Search"
            onChange={debouncedResults}
          />
          <DaisySearchIcon />
        </label>
      </div>
      <div className="flex flex-col gap-y-4 justify-center items-center">
        <ActivityPill activities={showList()}></ActivityPill>
      </div>
    </>
  );
};

export default ListView;
