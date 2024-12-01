import { AnswersProps } from '@/pages/question-page/components/answers/answers.types';
import SingleAnswer from '@/pages/question-page/components/answers/single-answer/single-answer';

const Answers: React.FC<AnswersProps> = ({ answers, authorId }) => {
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
            likes={answer.likes}
            rating={answer.rating}
            isCorrect={answer.isCorrect}
            authorId={authorId}
          />
        ))}
      </div>
    </div>
  );
};

export default Answers;
