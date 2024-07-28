// Child2.js

import { useContext } from "react";
import { NameContext } from "./layouts/master";

const Child2 = () => {
  const { name } = useContext(NameContext);

  return (
    <div>
      <br />
      <h4>This is Child2 Component</h4>
      <h4>hello: {name}</h4>
    </div>
  );
};

export default Child2;
