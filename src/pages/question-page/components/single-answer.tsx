import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ThumbsUp, MoreHorizontal } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type SingleAnswerProps = {
  username: string;
  date: string;
  content: string;
  votes?: number;
};

const SingleAnswer = ({
  username = 'Triapka',
  date = '24 Nov 2013',
  content = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi cum, ratione repudiandae cumque quaerat velit autem unde! Voluptatem sit quis tempora facilis! Quibusdam, obcaecati tempore totam ullam ad similique quaerat!',
  votes = 1,
}: SingleAnswerProps) => {
  return (
    <Card className='max-w-2xl border-none bg-background'>
      <CardContent className='space-y-2 p-4'>
        <div className='flex items-center gap-2'>
          <div className='flex items-center gap-2'>
            <Avatar>
              <AvatarImage src='https://github.com/shadcn.png' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className='font-medium'>{username}</span>
          </div>

          <span className='text-sm text-gray-400'>• {date}</span>
        </div>

        <div className='leading-relaxed text-gray-200'>{content}</div>

        <div className='flex items-center gap-2 pt-2'>
          <Button
            variant='ghost'
            size='sm'
            className='text-gray-400 hover:bg-white/10 hover:text-white'
          >
            <ThumbsUp className='mr-1 h-4 w-4' />
            {votes}
          </Button>
          <Button
            variant='ghost'
            size='sm'
            className='text-gray-400 hover:bg-white/10 hover:text-white'
          >
            <MoreHorizontal className='h-4 w-4' />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SingleAnswer;
