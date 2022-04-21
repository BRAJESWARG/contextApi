import React from "react";
import ChildThree from "./childThree";
import ChildFour from "./childFour";

const ChildTwo = () => {
  return (
    <h2>
      <ChildThree /> <ChildFour />
    </h2>
  );
};

export default ChildTwo;
