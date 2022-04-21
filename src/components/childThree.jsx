// import react from "react";
import { Institute, MyName, Year } from "../App";

const ChildThree = ({ name }) => {
  return (
    <MyName.Consumer>
      {(name) => {
        return (
          <Institute.Consumer>
            {(ins) => {
              return (
                <Year.Consumer>
                  {(year) => {
                    return (
                      <h3>
                        My name is {name} - {ins} -{year}
                      </h3>
                    );
                  }}
                </Year.Consumer>
              );
            }}
          </Institute.Consumer>
        );
      }}
    </MyName.Consumer>
  );
};

export default ChildThree;
