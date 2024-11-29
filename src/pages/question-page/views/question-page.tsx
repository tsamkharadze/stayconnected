import Answers from '@/pages/question-page/components/answers';
import Question from '@/pages/question-page/components/question/question';
import WriteAnswer from '@/pages/question-page/components/write-answer/write-answer';

const QuestionPage: React.FC = () => {
  return (
    <div className='mb-8 mt-2 flex flex-col items-center'>
      <div className='w-5/6 space-y-10 text-foreground md:w-2/3'>
        <Question
          title='How to use TypeScript with React?'
          author='Jane Doe'
          date='24 Nov 2023'
          content='I am trying to understand how to use TypeScript in a React project. Can anyone provide examples or resources?'
          tags={['React', 'TypeScript']}
        />
        <Answers />
        <WriteAnswer />
      </div>
    </div>
  );
};

export default QuestionPage;
