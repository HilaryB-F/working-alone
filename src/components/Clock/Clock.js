import React from "react";
import { useState, useEffect } from "react";
import Help from "../../assets/icons/help.png";

// export default function Clock() {
// const [timerHour, setTimerHour] = useState("00");
// const [timerMin, setTimerMin] = useState("00");
// const [timerSec, setTimerSec] = useState("00");
//   let interval;
//   const startTimer = () => {
//     const countDownDate = new Date("December 31,2023").getTime();
//     interval = setInterval(() => {
//       const now = new Date().getTime();
//       const distance = countDownDate - now;
//       const hour = Math.floor(
//         (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
//       );
//       const min = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
//       const sec = Math.floor((distance % (60 * 1000)) / 1000);
//       if (distance < 0) {
//         clearInterval(interval.current);
//       } else {
//         setTimerHour(hour);
//         setTimerMin(min);
//         setTimerSec(sec);
//       }
//     });
//   };
// useEffect(() => {
//   startTimer();
// });
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       updateRemainingTime();
//     }, 1000);
//     return () => clearInterval(intervalId);
//   }, []);
//   function updateRemainingTime() {
//     console.log("Hello World");
//   }
// return (

// );

// }
const CountdownTimer = () => {
  const [timeRemaining, setTimeRemaining] = useState(60 * 60);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let timer = null;

    if (isRunning) {
      timer = setInterval(() => {
        setTimeRemaining((prevTime) => {
          const newTime = prevTime - 1;

          if (newTime <= 0) {
            setIsRunning(false);
            setTimeRemaining(0);
            alert("Check in time!");
          }

          return newTime;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const restartTimer = () => {
    setTimeRemaining(60 * 60);
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const formatTime = () => {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;

    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };
  const phoneNumber = "000000000"; // Replace with the desired phone number

  const handleCallButtonClick = () => {
    const phoneUrl = `tel:${phoneNumber}`;
    console.log("Calling emergency contact");
    window.location.href = phoneUrl;
  };
  return (
    <>
      <section className="clock__container">
        <section className="clock__timer">
          <h1 className="clock__number-time">{formatTime()}</h1>
        </section>
      </section>
      <section className="clock__buttons-container">
        <section className="clock__buttons">
          <button onClick={restartTimer} className="clock__buttons-checkin">
            Checkin
          </button>
          <button onClick={stopTimer} className="clock__buttons-stop">
            Stop
          </button>
        </section>
        <button onClick={handleCallButtonClick} className="clock__buttons-help">
          <img
            className="clock__buttons-help-icon"
            src={Help}
            alt="Help Icon"
          />
          Emergency
        </button>
      </section>
    </>
  );
};

export default CountdownTimer;
