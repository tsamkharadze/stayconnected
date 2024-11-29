import { Card, CardContent } from '@/components/ui/card';
import { Toggle } from '@/components/ui/toggle';
import { ThumbsUp, Check } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { SingleAnswerProps } from '@/pages/question-page/components/single-answer/signle-answer.types';
import { Badge } from '@/components/ui/badge';

const SingleAnswer: React.FC<SingleAnswerProps> = ({
  username = 'Triapka',
  date = '24 Nov 2013',
  content = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi cum, ratione repudiandae cumque quaerat velit autem unde! Voluptatem sit quis tempora facilis! Quibusdam, obcaecati tempore totam ullam ad similique quaerat!',
  votes = 1,
  isAccepted = true,
}) => {
  return (
    <Card className='w-full border-none bg-background text-foreground'>
      <CardContent className='space-y-2 p-4'>
        <div className='flex items-center justify-between'>
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
          {isAccepted && (
            <Badge
              variant='outline'
              className='border-green-300 bg-green-100 text-green-800'
            >
              <Check className='mr-1 h-4 w-4' /> Accepted
            </Badge>
          )}
        </div>

        <div className='leading-relaxed'>{content}</div>

        <div className='flex items-center gap-2 pt-2'>
          <Toggle
            variant='outline'
            size='sm'
            className='data-[state=on]:bg-primary data-[state=on]:text-primary-foreground'
          >
            <ThumbsUp className='mr-1 h-4 w-4 transition-all hover:text-primary' />
            <span className='text-sm'>{votes}</span>
          </Toggle>
        </div>
      </CardContent>
    </Card>
  );
};

export default SingleAnswer;
