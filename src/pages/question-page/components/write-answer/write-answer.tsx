import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import {
  AnswerFormSchema,
  AnswerFormData,
} from '@/pages/question-page/components/write-answer/answer-schema';

const WriteAnswer: React.FC = () => {
  const { toast } = useToast();

  const form = useForm<AnswerFormData>({
    resolver: zodResolver(AnswerFormSchema),
  });

  function onSubmit() {
    toast({
      variant: 'default',
      description: 'You have successfully posted your answer!',
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-3'>
        <FormField
          control={form.control}
          name='yourAnswer'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-xl'>Your answer</FormLabel>
              <FormControl>
                <Textarea {...field} className='h-24' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>Post</Button>
      </form>
    </Form>
  );
};

export default WriteAnswer;
