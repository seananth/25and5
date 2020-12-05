import React from 'react';


function Controls(props) {
    let { toggle, active } = props
  return (
    <div>
      <button onClick={toggle}>{active ? "Stop" : "Start"}</button>
      <button>Paus</button>
    </div>
  );
}

export default Controls;
