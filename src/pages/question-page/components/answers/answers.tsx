import { AnswersProps } from '@/pages/question-page/components/answers/answers.types';
import SingleAnswer from '@/pages/question-page/components/answers/single-answer/single-answer';
import { useState } from 'react';

const Answers: React.FC<AnswersProps> = ({
  answers,
  acceptedAnswerId,
  authorId,
}) => {
  const [currentAcceptedAnswerId, setCurrentAcceptedAnswerId] =
    useState(acceptedAnswerId);

  const handleAcceptAnswer = (answerId: string) => {
    if (currentAcceptedAnswerId === answerId) {
      setCurrentAcceptedAnswerId('');
    } else {
      setCurrentAcceptedAnswerId(answerId);
    }
  };

  return (
    <div className='mt-6 space-y-6'>
      <h2 className='text-xl font-semibold'>Answers</h2>
      <div className='space-y-5'>
        {answers.map((answer) => (
          <SingleAnswer
            key={answer.id}
            username={answer.username}
            date={answer.date}
            content={answer.content}
            votes={answer.votes}
            isAccepted={answer.id === currentAcceptedAnswerId}
            authorId={authorId}
            onAcceptAnswer={handleAcceptAnswer}
            answerId={answer.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Answers;
