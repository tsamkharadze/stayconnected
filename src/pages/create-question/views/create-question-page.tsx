import ScreenMd from '@/components/layout/page-containers/screen-md';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const CreateQuestionPage = () => {
  return (
    <ScreenMd>
      <div className="">
      <h1>Add Question</h1>
      <form className='flex flex-col gap-8'>
        <div>
          <Label htmlFor='title'>Title</Label>
          <Input id='title' className='' />
        </div>
        <div>
          <Label htmlFor='description'>Description</Label>
          <Textarea id='description' className='' />
        </div>
        <Button className="">Add question</Button>
      </form>
      </div>
    </ScreenMd>
  );
};

export default CreateQuestionPage;
