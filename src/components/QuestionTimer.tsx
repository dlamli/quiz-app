import { useEffect, useState } from "react";
import { QuestionTimerProps } from "../types";

export default function QuestionTimer({
  timeout,
  onTimeout,
  mode,
}: QuestionTimerProps) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout);
    return () => clearTimeout(timer);
  }, [timeout, onTimeout]);

  useEffect(() => {
    const interval = setInterval(
      () => setRemainingTime((prevTime) => prevTime - 10),
      10
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <progress
      id="question-time"
      max={timeout}
      value={remainingTime}
      className={mode}
    />
  );
}
