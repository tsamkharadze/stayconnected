import Answers from '@/pages/question-page/components/answers/answers';
import Question from '@/pages/question-page/components/question/question';
import WriteAnswer from '@/pages/question-page/components/write-answer/write-answer';

const questionWithAnswers = {
  question: {
    id: '28wdsay7dsasd',
    authorId: '82wewq7dsaghsa',
    title: 'How to use TypeScript with React?',
    author: 'Jane Doe',
    rating: 20,
    date: '24 Nov 2023',
    content:
      'I am trying to understand how to use TypeScript in a React project. Can anyone provide examples or resources?',
    tags: ['React', 'TypeScript'],
    acceptedAnswerId: 'answer2',
  },
  answers: [
    {
      id: 'answer1',
      username: 'nika123',
      rating: 15,
      date: '10 Nov 2024',
      content: 'h abjhsdas sda sdadiuasdai',
      votes: 2,
    },
    {
      id: 'answer2',
      username: 'diko123',
      rating: 30,
      date: '20 Nov 2024',
      content: 'h abjhsdas sda sdadiuasdai',
      votes: 1,
    },
    {
      id: 'answer3',
      rating: 0,
      username: 'nidshasba',
      date: '10 Nov 2024',
      content: 'h abjhsdas sda sdadiuasdai',
      votes: 10,
    },
  ],
};

const QuestionPage: React.FC = () => {
  const {
    question,
    answers,
    question: { authorId, acceptedAnswerId },
  } = questionWithAnswers;

  return (
    <div className='mb-8 mt-2 flex flex-col items-center'>
      <div className='w-5/6 space-y-10 text-foreground md:w-2/3'>
        <Question question={question} />
        <Answers
          answers={answers}
          acceptedAnswerId={acceptedAnswerId}
          authorId={authorId}
        />
        <WriteAnswer />
      </div>
    </div>
  );
};

export default QuestionPage;
