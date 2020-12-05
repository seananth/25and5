import "./App.css";
import React, { useEffect, useState } from "react";
import TimerWidget from "./components/TimerWidget";


function App() {

  return (
    <div>
      <TimerWidget />
    </div>
  )
}

export default App

//2 buttons Start/paus, Reset
//2 Times shown "work time" and "break time"
//plus and minus buttons for both work and break
