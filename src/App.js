import ChildOne from "./components/childOne";
import React, { createContext, useState } from "react";
import "./App.css";
// import ChildFour from "./components/childFour";

export const MyName = createContext();
export const Institute = createContext();
export const Year = createContext();
export const MyCounter = createContext();

function App() {
  const [counter, setCounter] = useState(0);

  const obj = {
    counter,
    handleChange: () => setCounter(counter + 1)
  };

  return (
    <>
      <div className="App">
        <h1>App-counter: {counter}</h1>
        <MyName.Provider value={"Brajeswar"}>
          <Institute.Provider value={"PrepBytes"}>
            <Year.Provider value={"2022"}>
              <MyCounter.Provider value={obj}>
                <ChildOne />
              </MyCounter.Provider>
            </Year.Provider>
          </Institute.Provider>
        </MyName.Provider>
      </div>
    </>
  );
}

export default App;
