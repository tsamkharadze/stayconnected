import SingleAnswer from '@/pages/question-page/components/single-answer/single-answer';

const Answers: React.FC = () => {
  return (
    <div className='mt-6 space-y-6'>
      <h2 className='text-xl font-semibold'>Answers</h2>
      <div className='space-y-5'>
        <SingleAnswer
          username='Joe'
          date='25 Nov 2023'
          content='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi cum, ratione repudiandae cumque quaerat velit autem unde! Voluptatem sit quis tempora facilis! Quibusdam, obcaecati tempore totam ullam ad similique quaerat!.'
          votes={5}
          isAccepted={true}
        />
        <SingleAnswer
          username='Floyd'
          date='26 Nov 2023'
          content='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi cum, ratione repudiandae cumque quaerat velit autem unde! Voluptatem sit quis tempora facilis! Quibusdam, obcaecati tempore totam ullam ad similique quaerat!.'
          votes={2}
          isAccepted={false}
        />
      </div>
    </div>
  );
};

export default Answers;
