import { FC, useEffect, useState } from "react";
import { dateTimeFormatter } from "../config";

interface TimeDelta {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const pad = (val: number) => (val < 10 ? `0${val}` : `${val}`);

const timeToTarget = (targetDate: Date): TimeDelta => {
  const delta = targetDate.getTime() - Date.now();
  if (delta <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(delta / (1000 * 60 * 60 * 24)),
    hours: Math.floor((delta / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((delta / 1000 / 60) % 60),
    seconds: Math.floor((delta / 1000) % 60),
  };
};

export const Countdown: FC<{
  title: string;
  targetDate: Date;
}> = ({ title, children, targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(timeToTarget(targetDate));

  const formattedTargetDate = dateTimeFormatter.format(targetDate);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(timeToTarget(targetDate));
    }, 1000);

    return () => clearTimeout(timer);
  });

  const isZero =
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  return (
    <div className="h-full z-10 relative text-black flex items-center justify-center">
      {isZero ? (
        <>{children}</>
      ) : (
        <div className="text-center pb-4 font-headline">
          <div className="text-2xl">
            <span className="text-6xl color-red font-bold">{pad(timeLeft.days)}</span>
            <span> d </span>
            <span className="text-6xl color-red font-bold">{pad(timeLeft.hours)}</span>
            <span> h </span>
            <span className="text-6xl color-red font-bold">{pad(timeLeft.minutes)}</span>
            <span> m </span>
            <span className="text-6xl color-red font-bold">{pad(timeLeft.seconds)}</span>
            <span> s</span>
          </div>
          <div className="mt-2 uppercase font-black font-headline">{title}</div>
        </div>
      )}
    </div>
  );
};
