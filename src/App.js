import "./App.css";
import React, { useEffect, useState } from "react";
import Countdown from "./components/Countdown";

function App() {
  const [inputTime, setInputTime] = useState();

  const handleInputChange = (e) => {
    setInputTime(e.target.value);
  };

  if (inputTime > 0) {
    return <Countdown initialMinute={inputTime} />;
  }

  return (
    <div className="App">
      <div>
        <input type="text" name="input" onChange={handleInputChange} />
        <button type="submit">start</button>
      </div>
    </div>
  );
}

export default App;

//pomodoro clock

//Sudo code

//get user input and store in state on click
//pass state value to <countdown /> onClick
//hide input until timer runs out
