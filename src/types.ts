export interface QuestionTimerProps {
  timeout: number;
  mode: string;
  onTimeout: () => void | null;
}

export interface AnswersProps {
  answerState: AnswerState;
  answers: Answers;
  selectedAnswer: string | null;
  onSelect: (selectedAnswer: string) => void;
}

export interface QuestionProps {
  questionKey: number;
  onSkipAnswer: () => void;
  onSelectAnswer: (selectedAnswer: string | null) => void;
}

export interface SummaryProps {
  userAnswers: UserAnswers;
}

export type AnswerType = {
  selectedAnswer: string | null;
  isCorrect: AnswerState | boolean | null;
};

export type AnswerState = "" | "answered" | "wrong" | "correct";

export type Answers = Answer[];
export type UserAnswers = UserAnswer[];
export type Answer = string;
export type UserAnswer = string | null;
