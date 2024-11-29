import Answers from '@/pages/question-page/components/answers';
import Question from '@/pages/question-page/components/question';

const QuestionPage: React.FC = () => {
  return (
    <div className='mt-2 flex h-screen flex-col items-center'>
      <div className='w-5/6 text-foreground'>
        <Question />
        <Answers />
      </div>
    </div>
  );
};

export default QuestionPage;
