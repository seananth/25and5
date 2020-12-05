import React, { useEffect, useState } from "react";
import Timer from "./Timer";
import Controls from "./Contols";

function TimerWidget() {
  const [workTime, setWorkTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);
  const [active, setActive] = useState(false);

  function toggle() {
    setActive(!active);
  }

  return (
    <div>
      <div className="workTime">
        <Timer startingTime={workTime} startClock={active} />
        <button onClick={() => setWorkTime(workTime - 1)}>-</button>
        <button onClick={() => setWorkTime(workTime + 1)}>+</button>
      </div>
      <div className="breakTime">
        <Timer startingTime={breakTime} startClock={active} />
        <button onClick={() => setBreakTime(breakTime - 1)}>-</button>
        <button onClick={() => setBreakTime(breakTime + 1)}>+</button>
      </div>
      <Controls toggle={toggle} active={active} />
    </div>
  );
}

export default TimerWidget;
