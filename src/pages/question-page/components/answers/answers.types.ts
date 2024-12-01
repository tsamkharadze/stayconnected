export type AnswersProps = {
  answers: {
    id: string;
    username: string;
    rating: number;
    date: string;
    content: string;
    votes: number;
  }[];
  authorId: string;
  acceptedAnswerId: string;
};
