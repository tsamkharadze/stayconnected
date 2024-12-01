export type SingleAnswerProps = {
  answerId: string;
  username: string;
  date: string;
  content: string;
  rating: number;
  votes: number;
  authorId: string;
  isAccepted: boolean;
  onAcceptAnswer: (answerId: string) => void;
};
