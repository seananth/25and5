import "./App.css";
import Countdown from "./components/Countdown";

function App() {
  let timeValue = 1;

  return (
    <div className="App">
      <Countdown initialMinute={timeValue} />
      <form className="form">
        <div className="minutes">
          <label for="minutes">Work for</label>
          <input id="minutes" placeholder="25"></input>
          <label for="minutes">Minutes</label>
        </div>
        <div className="seconds">
          <label for="seconds">Chill for </label>
          <input id="seconds" placeholder="5"></input>
          <label for="seconds">Minutes</label>
        </div>
        <button>Start</button>
      </form>
    </div>
  );
}

export default App;
