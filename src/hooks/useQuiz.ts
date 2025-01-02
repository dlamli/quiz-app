import { useCallback, useState } from "react";
import QUESTIONS from "../data/question";
import { UserAnswer, UserAnswers } from "../types";

const initialUserAnswers: string[] = [];

export const useQuiz = () => {
  const [userAnswers, setUserAnswers] =
    useState<UserAnswers>(initialUserAnswers);

  const activeQuestionIndex = userAnswers.length;
  const quizIsCompleted = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback((selectedAnswer: UserAnswer) => {
    setUserAnswers((prevAnswers) => {
      return [...prevAnswers, selectedAnswer];
    });
  }, []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  return {
    // Variables
    activeQuestionIndex,
    quizIsCompleted,
    userAnswers,
    // Methods
    handleSelectAnswer,
    handleSkipAnswer,
  };
};
