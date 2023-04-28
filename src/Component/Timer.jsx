import { useState, useRef, useEffect } from "react";
import '../Component/Timer.css'
const Timer=()=>{
  const [timer, setTimer] = useState(0);
  let timerId = useRef(null); 
  let h2Ref = useRef(null); 
  let startButton = useRef(null);
  useEffect(() => {
    if (timer === 0) {
      h2Ref.current.innerText = `Timer Value is ${timer}`;
      h2Ref.current.style.color = "black";
    } else {
      h2Ref.current.innerText = `Timer Started and Value is ${timer}`;
      h2Ref.current.style.color = "#54a0ff";
    }
  });
  const startTimer = () => {
    startButton.current.disabled = true;
    timerId.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
  };

  const stopTimer = () => {
    h2Ref.current.style.color = "red";
    startButton.current.disabled = false;
    clearInterval(timerId.current);
  };
  const resetTimer=()=>{
    startButton.current.disabled = false;
    clearInterval(timerId.current);
    setTimer(0)
  }
  return (
    <div className="maindiv">
      <h2 id="timerid" ref={h2Ref}>
        Timer is {timer}
      </h2>
      <br />
      <button className="btnStart" style={{}} onClick={startTimer} ref={startButton}>
        Start
      </button>
      &nbsp;&nbsp;&nbsp;
      <button id="btn2" onClick={stopTimer}>Stop</button>&nbsp;&nbsp;&nbsp;
      <button id="btn3" onClick={resetTimer}>Reset</button>
    </div>
  );
}
export default Timer;