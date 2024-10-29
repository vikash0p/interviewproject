"use client";
import React, { useEffect, useState } from "react";

interface TimesInterface {
  hours: number;
  minutes: number;
  seconds: number;
}

const Contact = () => {
  const [times, setTimes] = useState<TimesInterface>({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isTimes, setIsTimes] = useState<boolean>(false);

  const timeHandlerFunction = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setTimes((prev) => ({
      ...prev,
      [name]: Math.max(0, Number(value)),
    }));
  };

  useEffect(() => {
    let countDownInterval: NodeJS.Timeout;

    if (
      isTimes &&
      (times.hours > 0 || times.minutes > 0 || times.seconds > 0)
    ) {
      countDownInterval = setInterval(() => {
        setTimes((prev) => {
          const { hours, minutes, seconds } = prev;
          if (seconds > 0) {
            return { ...prev, seconds: seconds - 1 };
          } else if (minutes > 0) {
            return { ...prev, minutes: minutes - 1, seconds: 59 };
          } else if (hours > 0) {
            return { ...prev, hours: hours - 1, minutes: 59, seconds: 59 };
          } else {
            clearInterval(countDownInterval);
            setIsTimes(false);
            return prev;
          }
        });
      }, 1000);
    }

    return () => clearInterval(countDownInterval);
  }, [isTimes, times]);

  const startHandlerFunction = () => {
    setIsTimes(true);
  };

  const ResetHandlerFunction=()=>{
    setTimes({
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
    setIsTimes(false)
  }
  return (
    <div className="flex flex-col w-full min-h-screen justify-center items-center">
      <div className="w-96 space-y-6">
        <h1 className="text-4xl font-bold text-center">CountDown Timer</h1>

        <div className="flex w-full justify-between">
          <input
            type="text"
            value={times.hours}
            name="hours"
            id="hours"
            onChange={timeHandlerFunction}
            className="w-16 h-12 text-center placeholder:text-black text-black"
            placeholder="HH"
            aria-label="Hours"
          />
          <input
            type="text"
            value={times.minutes}
            name="minutes"
            id="minutes"
            onChange={timeHandlerFunction}
            className="w-16 h-12 text-center placeholder:text-black text-black"
            placeholder="MM"
            aria-label="Minutes"
          />
          <input
            type="text"
            value={times.seconds}
            name="seconds"
            id="seconds"
            onChange={timeHandlerFunction}
            className="w-16 h-12 text-center placeholder:text-black text-black"
            placeholder="SS"
            aria-label="Seconds"
          />
        </div>

        <div className="w-full flex justify-center gap-5">
          <button
            type="button"
            className="text-white text-xl px-6 py-2 rounded-md bg-green-700 disabled:bg-gray-700 disabled:cursor-not-allowed"
            onClick={startHandlerFunction}
            disabled={
              times.hours === 0 && times.minutes === 0 && times.seconds === 0
            }
          >
            Start
          </button>
          <button
            type="button"
            className="text-white text-xl px-6 py-2 rounded-md bg-red-700 disabled:bg-gray-700 disabled:cursor-not-allowed"
            onClick={ResetHandlerFunction}

          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
