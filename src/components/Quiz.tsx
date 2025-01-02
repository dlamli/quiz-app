import { useQuiz } from "../hooks/useQuiz";
import Question from "./Question";
import Summary from "./Summary";

export default function Quiz() {
  const {
    userAnswers,
    activeQuestionIndex,
    handleSelectAnswer,
    handleSkipAnswer,
    quizIsCompleted,
  } = useQuiz();

  if (quizIsCompleted) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <section id="quiz">
      <Question
        key={activeQuestionIndex}
        questionKey={activeQuestionIndex}
        onSkipAnswer={handleSkipAnswer}
        onSelectAnswer={handleSelectAnswer}
      />
    </section>
  );
}
