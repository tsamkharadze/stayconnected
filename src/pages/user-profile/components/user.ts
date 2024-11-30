export interface Answer {
  id: string;
  questionId: string;
  description: string;
  author: string;
  isCorrect: boolean;
  date: string;
}
export interface Question {
  id: string;
  author: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
  answers: Answer[];
}
export interface User {
  id: string;
  name: string;
  email: string;
  rating: number;
  questions: Question[];
}
