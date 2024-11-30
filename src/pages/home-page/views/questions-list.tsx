import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const QuestionsList = () => {
  const arr = Array(3).fill({});
  const tags = ['React', 'JavaScript', 'AI', 'Blockchain'];
  return (
    <>
      <div className='flex flex-col space-y-8'>
        {arr.map((array, index) => {
          return (
            <Card className='space-y-2 px-6 py-4' key={array}>
              <div className='flex flex-row justify-between'>
                <h2 className='text-2xl font-bold'>
                  Question Title {index + 1}
                </h2>
                <span className='text-sm text-muted-foreground'>Author</span>
              </div>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters
              </p>
              <div className='flex flex-row justify-between'>
                <div className='flex flex-row flex-wrap items-start gap-2'>
                  {tags.map((tag, i) => {
                    return (
                      <Badge key={i} className='cursor-pointer'>
                        {tag}
                      </Badge>
                    );
                  })}
                </div>
                <div className='flex flex-row gap-4 text-sm'>
                  <span>answers {index * 2}</span>
                  <span className='text-muted-foreground'>
                    {new Date().toDateString()}
                  </span>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default QuestionsList;
