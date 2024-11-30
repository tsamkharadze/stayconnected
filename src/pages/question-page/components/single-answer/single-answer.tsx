import { Card, CardContent } from '@/components/ui/card';
import { Toggle } from '@/components/ui/toggle';
import { ThumbsUp, Check, BookmarkCheck } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { SingleAnswerProps } from '@/pages/question-page/components/single-answer/signle-answer.types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const SingleAnswer: React.FC<SingleAnswerProps> = ({
  username,
  date,
  content,
  votes,
  isAccepted,
}) => {
  const isAuthorized = true;
  const isThereCorrectAnswerFromAnswers = false;

  return (
    <Card className='w-full border-none bg-background text-foreground'>
      <CardContent className='space-y-2 p-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <div className='flex cursor-pointer items-center gap-2'>
              <Avatar>
                <AvatarImage src='https://github.com/shadcn.png' />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className='font-medium'>{username}</span>
            </div>
            <span className='text-sm'>• {date}</span>
          </div>
          {isAuthorized && !isThereCorrectAnswerFromAnswers && (
            <Button size='icon' variant='secondary'>
              <BookmarkCheck />
            </Button>
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
