import { useContext } from "react";
import { NameContext } from "./layouts/master";

const Child1 = () => {
  const { setName } = useContext(NameContext);
  function handle() {
    setName("Geeks");
  }
  return (
    <div>
      <h3>This is Child1 Component</h3>
      <button onClick={() => handle()}>Click </button>
    </div>
  );
};

export default Child1;
