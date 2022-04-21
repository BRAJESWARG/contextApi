import React, { useContext } from "react";
import { Institute, MyName, Year, MyCounter } from "../App";
// import ChildFour from "./childFour";

const ChildFour = () => {
  const name = useContext(MyName);
  const ins = useContext(Institute);
  const year = useContext(Year);
  const counterData = useContext(MyCounter);
  const { counter, handleChange } = counterData;

  return (
    <div>
      <h3>
        ChildFour with name: {name} - {ins} -{year} - Counter - {counter}
        <br />
        <button onClick={handleChange}>Click Me</button>
      </h3>
    </div>
  );
};

export default ChildFour;
