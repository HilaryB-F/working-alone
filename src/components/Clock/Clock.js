import React from "react";
import { useState, useEffect } from "react";
import Help from "../../assets/icons/help.png";

export default function Clock() {
  const [timerHour, setTimerHour] = useState("00");
  const [timerMin, setTimerMin] = useState("00");
  const [timerSec, setTimerSec] = useState("00");

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

  return (
    <>
      <section className="clock__container">
        <section className="clock__timer">
          <div className="clock__clock">
            <section className="clock__number">
              <p className="clock__number-time">{timerHour}</p>
              <label className="clock__number-label">Hours</label>
            </section>
            <span className="clock__number-break">:</span>
            <section className="clock__number">
              <p className="clock__number-time">{timerMin}</p>
              <label className="clock__number-label">Minutes</label>
            </section>
            <span className="clock__number-break">:</span>
            <section className="clock__number">
              <p className="clock__number-time">{timerSec}</p>
              <label className="clock__number-label">Seconds</label>
            </section>
          </div>
        </section>
      </section>
      <section className="clock__buttons-container">
        <section className="clock__buttons">
          <button className="clock__buttons-checkin">Checkin</button>
          <button className="clock__buttons-stop">Stop</button>
        </section>
        <button className="clock__buttons-help">
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
}
