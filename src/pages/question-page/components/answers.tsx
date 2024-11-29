import SingleAnswer from '@/pages/question-page/components/single-answer/single-answer';

const Answers: React.FC = () => {
  return (
    <div className='mt-6'>
      <h2 className='text-xl font-semibold'>Answers</h2>
      <div>
        <SingleAnswer />
      </div>
    </div>
  );
};

export default Answers;
