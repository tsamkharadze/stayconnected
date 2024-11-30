import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { QuestionProps } from '@/pages/question-page/components/question/question.types';

const Question: React.FC<QuestionProps> = ({ question }) => {
  const { title, author, date, content, tags } = question;
  return (
    <div className='mt-4 space-y-4'>
      <h2 className='text-3xl font-bold'>{title}</h2>
      <div className='text-sm text-foreground'>{`Posted by ${author} on ${date}`}</div>
      <Separator />
      <div className='text-justify leading-relaxed'>{content}</div>
      <div className='space-x-2'>
        {tags.map((tag, index) => (
          <Badge
            key={index}
            variant='secondary'
            className='cursor-pointer font-bold'
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default Question;
