export type AnswersProps = {
  answers: {
    id: string;
    username: string;
    date: string;
    content: string;
    votes: number;
  }[];
  authorId: string;
  acceptedAnswerId: string;
};
