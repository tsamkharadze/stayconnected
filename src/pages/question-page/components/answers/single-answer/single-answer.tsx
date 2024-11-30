import { Card, CardContent } from '@/components/ui/card';
import { Toggle } from '@/components/ui/toggle';
import { Check, ThumbsUp } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { SingleAnswerProps } from '@/pages/question-page/components/answers/single-answer/signle-answer.types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { ToastAction } from '@/components/ui/toast';

const SingleAnswer: React.FC<SingleAnswerProps> = ({
  answerId,
  username,
  date,
  content,
  votes,
  authorId,
  isAccepted,
  onAcceptAnswer,
}) => {
  const { toast } = useToast();
  const loggedUserId = '82wewq7dsaghsa';
  const isAuthorLoggedIn = loggedUserId === authorId;

  let acceptedBadge = null;
  if (isAccepted) {
    acceptedBadge = (
      <Badge
        variant='outline'
        className='cursor-pointer border-green-300 bg-green-100 text-green-800'
        onClick={() => onAcceptAnswer(answerId)}
      >
        <Check className='mr-1 h-4 w-4' /> Accepted
      </Badge>
    );
  }

  let acceptButton = null;
  if (isAuthorLoggedIn && !isAccepted) {
    acceptButton = (
      <Button
        variant='outline'
        onClick={() => {
          onAcceptAnswer(answerId);
          toast({
            description: 'This answer is marked as accepted',
            duration: 2500,
            action: (
              <ToastAction altText='Undo marking as accepted'>Undo</ToastAction>
            ),
          });
        }}
      >
        Mark this answer as accepted
      </Button>
    );
  }

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
          {acceptedBadge}
          {acceptButton}
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
