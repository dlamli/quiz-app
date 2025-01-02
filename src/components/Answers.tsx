import { useRef } from "react";
import { AnswersProps } from "../types";

export default function Answers({
  answers,
  answerState,
  selectedAnswer,
  onSelect,
}: AnswersProps) {
  const shuffledAnswerRef = useRef<string[] | undefined>();

  if (!shuffledAnswerRef.current) {
    shuffledAnswerRef.current = [...answers];
    shuffledAnswerRef.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswerRef.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClass = ``;

        if (answerState === "answered" && isSelected) {
          cssClass = "selected";
        }

        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClass = answerState;
        }

        return (
          <li key={answer} className="answer">
            <button
              className={cssClass}
              onClick={() => onSelect(answer)}
              disabled={answerState !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
