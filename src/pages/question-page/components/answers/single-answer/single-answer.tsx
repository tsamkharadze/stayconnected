import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Toggle } from '@/components/ui/toggle';
import { Check, ThumbsUp, Highlighter, Dot, Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { SingleAnswerProps } from '@/pages/question-page/components/answers/single-answer/signle-answer.types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { ToastAction } from '@/components/ui/toast';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const SingleAnswer: React.FC<SingleAnswerProps> = ({
  answerId,
  username,
  date,
  content,
  votes,
  authorId,
  isAccepted,
  onAcceptAnswer,
  rating,
}) => {
  const { toast } = useToast();

  // LOCAL STATE
  const loggedUserId = '82wewq7dsaghsa';
  const isAuthorLoggedIn = loggedUserId === authorId;

  const [isLiked, setIsLiked] = useState(false);
  const [currentVotes, setCurrentVotes] = useState(votes);

  const handleLikeToggle = () => {
    if (isLiked) {
      setCurrentVotes((prevVotes) => prevVotes - 1);
    } else {
      setCurrentVotes((prevVotes) => prevVotes + 1);
    }
    setIsLiked((prev) => !prev);
  };

  let acceptedBadge = null;
  if (isAccepted) {
    acceptedBadge = (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Badge
              variant='outline'
              className='cursor-pointer border-green-300 bg-green-100 text-green-800'
              onClick={() => onAcceptAnswer(answerId)}
            >
              <Check className='mr-1 h-4 w-4' /> Accepted
            </Badge>
          </TooltipTrigger>
          <TooltipContent>
            <p>Accepted</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }
  let acceptButton = null;
  if (isAuthorLoggedIn && !isAccepted) {
    acceptButton = (
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant='ghost'
              className='text-primary'
              onClick={() => {
                onAcceptAnswer(answerId);
                toast({
                  description: 'This answer is marked as accepted',
                  duration: 2500,
                  action: (
                    <ToastAction altText='Undo marking as accepted'>
                      Undo
                    </ToastAction>
                  ),
                });
              }}
            >
              <Highlighter />
            </Button>
          </TooltipTrigger>
          <TooltipContent className='bg-green-50 text-secondary-foreground'>
            <p>Mark this answer as accepted</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return (
    <Card className='w-full border-none bg-background text-foreground'>
      <CardContent className='space-y-2 p-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-1'>
            <div className='flex cursor-pointer items-center gap-2'>
              <Avatar>
                <AvatarImage src='https://github.com/shadcn.png' />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className='font-medium'>{username}</span>
            </div>
            <span className='flex items-center gap-0.5 text-sm text-primary'>
              <Dot className='text-accent-foreground' />
              <Star className='size-4' />
              {rating}
            </span>
            <span className='flex items-center text-sm'>
              <Dot className='text-accent-foreground' /> {date}
            </span>
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
            onClick={handleLikeToggle}
          >
            <ThumbsUp className='mr-1 h-4 w-4 transition-all hover:text-primary' />
            <span className='text-sm'>{currentVotes}</span>{' '}
          </Toggle>
        </div>
      </CardContent>
    </Card>
  );
};

export default SingleAnswer;
