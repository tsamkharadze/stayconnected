export type AnswersProps = {
  answers: {
    id: string;
    username: string;
    rating: number;
    date: string;
    content: string;
    likes: number;
    isCorrect: boolean;
  }[];
  authorId: string;
};
