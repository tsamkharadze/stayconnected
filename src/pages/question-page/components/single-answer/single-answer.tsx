import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ThumbsUp, MoreHorizontal } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { SingleAnswerProps } from '@/pages/question-page/components/single-answer/signle-answer.types';

const SingleAnswer = ({
  username = 'Triapka',
  date = '24 Nov 2013',
  content = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi cum, ratione repudiandae cumque quaerat velit autem unde! Voluptatem sit quis tempora facilis! Quibusdam, obcaecati tempore totam ullam ad similique quaerat!',
  votes = 1,
}: SingleAnswerProps) => {
  return (
    <Card className='w-full border-none bg-background text-foreground'>
      <CardContent className='space-y-2 p-4'>
        <div className='flex items-center gap-2'>
          <div className='flex items-center gap-2'>
            <Avatar>
              <AvatarImage src='https://github.com/shadcn.png' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className='font-medium'>{username}</span>
          </div>

          <span className='text-sm'>• {date}</span>
        </div>

        <div className='leading-relaxed'>{content}</div>

        <div className='flex items-center gap-2 pt-2'>
          <Button variant='ghost' size='sm' className='text'>
            <ThumbsUp className='mr-1 h-4 w-4' />
            {votes}
          </Button>
          <Button variant='ghost' size='sm' className=''>
            <MoreHorizontal className='h-4 w-4' />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SingleAnswer;
