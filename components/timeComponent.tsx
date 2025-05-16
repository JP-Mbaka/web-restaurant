import React, { useEffect, useState } from "react";

export default function DayAndTime() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // updates every second

    return () => clearInterval(timer); // cleanup on unmount
  }, []);

  const getFormattedTime = (date: Date) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const day = days[date.getDay()];

    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12; // convert to 12-hour format
    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${day}: ${hours}:${paddedMinutes}${ampm}`;
  };

  return (
    <div>
      {getFormattedTime(currentTime)}
    </div>
  );
}
