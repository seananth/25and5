import { useState, useEffect } from "react";
import "./App.css";
import Countdown from './components/Countdown'

function App() {

  let timeValue = 1;

  return <div className="App">
    <Countdown initialMinute={timeValue}/>
  </div>;
}

export default App;

