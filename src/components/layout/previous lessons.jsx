// //import { useEffect, useState } from "react";
// import attackImg from "../images/attack.png";
// import defenceImg from "../images/defend.png";
// //always make sure that state is a constatnt variable. Never mutate state directly.
// //React relies on immutability to detect changes and re-render components efficiently.
// function Counter() {
//   const [count, setCount] = useState(0); // React Hook to manage state
//   const [gameStatus, setGameStatus] = useState(" "); // React Hook to manage state. Initial value is empty string. gameStatus can be "You Win!", "You Lose!", or "In Progress". setGameStatus is the function to update gameStatus.
//   console.log(count);
// //you can clean up the below functions by using useEffect hook. 
// //useEffect hook allows you to perform side effects in function components. It takes two arguments: a function and an array of dependencies. The function is executed after the component is rendered. The array of dependencies tells React when to re-run the function. If any value in the array changes, the function is re-run. If the array is empty, the function is only run once after the initial render.
//   function handleIncrement() {
//     const newCount = count + 1;
//     setCount(newCount);
//   }

//   //the best way to update state based on previous state is to use the functional form of the state setter
//   //example:
//   // setCount((prevCount) => prevCount + 1);
//   function handleDecrement() {
//        const newCount = count - 1;   
//         setCount(newCount);     
//   }
//   useEffect(() => {
//     if (count >= 5) {
//       setGameStatus("You Win!");
//     }  else if (count <= -5) {
//       setGameStatus("You Lose!");
//     } else {
//       setGameStatus("");}
//   }, [count]);

//   function handleRandomPlay() {
//     const playMode = Math.round(Math.random()); // 0 or 1
//     if (playMode === 0) { //why only when playMode is 0? because we want equal probability for increment and decrement 
//       handleIncrement();
//     } else {
//       handleDecrement();
//     }
//   }
//   function handleReset() {
//     setCount(0);
//   }
//   function handleLog() {
//     console.log("Current count is: " + count);
//   }
// //never update a state variable directly, always use the setter function provided by useState
//   return (
//     <div className="row text-white container">
//       Game score : {count}
//       <p>You win at +5 points and lose at -5 points</p>
//       <p>Last play : </p>
//       {gameStatus.length>0 && <h3>Game status : {gameStatus} </h3>} {/* conditional rendering to show game status only when it's not empty string */}
//       <div className="col-6 col-md-3 offset-md-3">
//         <img
//           src={attackImg}
//           alt="game image"
//           style={{
//             width: "100%",
//             cursor: "pointer",
//             border: "1px solid green",
//           }}
//           onClick={handleIncrement}
//           className="p4 rounded"
//         />
//       </div>
//       <div className="col-6 col-md-3 offset-md-3">
//         <img
//           src={defenceImg}
//           alt="game image"
//           style={{
//             width: "100%",
//             cursor: "pointer",
//             border: "1px solid red",
//           }}
//           onClick={handleDecrement}
//           className="p4 rounded"
//         />
//       </div>
//       <div className="col-12 col-md-4 offset-md-4">
//         <button
//           className="btn btn-success m-2 w-100"
//           onClick={handleRandomPlay}
//         >
//           Random Play
//         </button>
//         <br />
//         <button className="btn btn-danger m-2 w-100" onClick={handleReset}>
//           Reset
//         </button>
//         <button className="btn btn-warning m-2 w-100" onClick={handleLog}>
//           Log
//         </button>
//       </div>
//     </div>
//   );
// }

export default Counter;
//how to comment out everything at once in a jsx file? 
