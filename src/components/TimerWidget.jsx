import React, { useEffect, useState } from "react";
import Timer from "./Timer";





function TimerWidget() {
  const [workTime, setWorkTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);
  const [active, setActive] = useState(false);

  function toggle() {
    setActive(!active);
  }

  return (
    //should be in controls.jsx later
    <div>
      
      <div>
        <Timer startingTime={workTime} startClock={active} />
        <button>-</button>
        <button>+</button>
      </div>
      <div>
        <Timer startingTime={breakTime} startClock={active}/>
        <button>-</button>
        <button>+</button>
      </div>

      <div>
        <button onClick={toggle}>Start</button>
        <button>Paus</button>
      </div>
    </div>
  );
}

export default TimerWidget