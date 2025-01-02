import quizLogo from "../assets/quiz-complete.png";
import { SummaryProps } from "../types";
import QUESTIONS from "../data/question";
import { derivePercentage } from "../libs/utils";
import { ONE_HUNDRED } from "../constants";

export default function Summary({ userAnswers }: SummaryProps) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, i) => answer === QUESTIONS[i].answers[0]
  );

  const skippedAnswerShare = derivePercentage(
    skippedAnswers.length,
    userAnswers.length
  );

  const correctAnswerShare = derivePercentage(
    correctAnswers.length,
    userAnswers.length
  );

  const wrongAnswerShare =
    ONE_HUNDRED - skippedAnswerShare - correctAnswerShare;

  return (
    <div id="summary">
      <img src={quizLogo} alt="Quiz Logo Completed" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswerShare}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswerShare}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnswerShare}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, i) => {
          let cssClass = `user-answer`;

          answer === null
            ? (cssClass += " skipped")
            : (cssClass +=
                answer === QUESTIONS[i].answers[0] ? " correct" : " wrong");

          return (
            <li key={i}>
              <h3>{i + 1}</h3>
              <p className="question">{QUESTIONS[i].text}</p>
              <p className={cssClass}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
