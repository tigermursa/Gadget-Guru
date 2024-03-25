"use client";

import React, { useState, useEffect } from "react";

const CountDown: React.FC = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-04-09") - +new Date();
    let timeLeft: { [key: string]: number } = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <h1 className="text-3xl font-semibold mb-5 font-serif">
        ⚡Flash sale Ending
      </h1>
      <div className="grid grid-cols-4 gap-4">
        <div className="text-center">
          <div className="text-4xl font-bold text-red-500 ">{timeLeft.days}</div>
          <div className="text-sm text-gray-900">Days</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-red-500">
            {timeLeft.hours}
          </div>
          <div className="text-sm text-gray-90">Hours</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-red-500">
            {timeLeft.minutes}
          </div>
          <div className="text-sm text-gray-90">Minutes</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-red-500">
            {timeLeft.seconds}
          </div>
          <div className="text-sm text-gray-900">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
