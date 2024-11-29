import Answers from '@/pages/question-page/components/answers';
import Question from '@/pages/question-page/components/question';
import WriteAnswer from '@/pages/question-page/components/write-answer/write-answer';

const QuestionPage: React.FC = () => {
  return (
    <div className='mb-8 mt-2 flex flex-col items-center'>
      <div className='w-5/6 space-y-10 text-foreground'>
        <Question />
        <Answers />
        <WriteAnswer />
      </div>
    </div>
  );
};

export default QuestionPage;
