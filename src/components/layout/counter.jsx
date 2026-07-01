import { useEffect, useState } from "react";
import attackImg from "../images/attack.png";
import defenceImg from "../images/defend.png";
//always make sure that state is a constatnt variable. Never mutate state directly.
//React relies on immutability to detect changes and re-render components efficiently.
function Counter() {
  const [gameState, setGetState] = useState({
    count: 0, //these are called state variables
    gameStatus: " ",
  });

  function handleIncrement() {
    const newCount = gameState.count + 1;
    const status = newCount >= 5 ? "You Win!" : "";
    setGetState({ count: newCount, gameStatus: status });
  }

  //the best way to update state based on previous state is to use the functional form of the state setter
  //example:
  // setCount((prevCount) => prevCount + 1);
  function handleDecrement() {
    const newCount = gameState.count - 1;
    const status = newCount <= -5 ? "You Lose!" : "";
    setGetState({ count: newCount, gameStatus: status });
  }

  function handleRandomPlay() {
    const playMode = Math.round(Math.random()); // 0 or 1
    if (playMode === 0) {
      //why only when playMode is 0? because we want equal probability for increment and decrement
      handleIncrement();
    } else {
      handleDecrement();
    }
  }
  function handleReset() {
    setGetState({ count: 0, gameStatus: "" });
  }
  function handleLog() {
    console.log("Current count is: " + gameState.count);
  }
  //never update a state variable directly, always use the setter function provided by useState
  return (
    <div className="row text-white container">
      Game score : {gameState.count}
      <p>You win at +5 points and lose at -5 points</p>
      <p>Last play : </p>
      {gameState.gameStatus.length > 0 && (
        <h3>Game status : {gameState.gameStatus} </h3>
      )}{" "}
      {/* conditional rendering to show game status only when it's not empty string */}
      <div className="col-6 col-md-3 offset-md-3">
        <img
          src={attackImg}
          alt="game image"
          style={{
            width: "100%",
            cursor: "pointer",
            border: "1px solid green",
          }}
          onClick={handleIncrement}
          className="p4 rounded"
        />
      </div>
      <div className="col-6 col-md-3 offset-md-3">
        <img
          src={defenceImg}
          alt="game image"
          style={{
            width: "100%",
            cursor: "pointer",
            border: "1px solid red",
          }}
          onClick={handleDecrement}
          className="p4 rounded"
        />
      </div>
      <div className="col-12 col-md-4 offset-md-4">
        <button
          className="btn btn-success m-2 w-100"
          onClick={handleRandomPlay}
        >
          Random Play
        </button>
        <br />
        <button className="btn btn-danger m-2 w-100" onClick={handleReset}>
          Reset
        </button>
        <button className="btn btn-warning m-2 w-100" onClick={handleLog}>
          Log
        </button>
      </div>
    </div>
  );
}

export default Counter;
