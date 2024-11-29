import ScreenMd from '@/components/layout/page-containers/screen-md';
import { FancyMultiSelect } from '@/components/ui-blocks/fancy-multi-select/fancy-multi-select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const CreateQuestionPage = () => {
  return (
    <ScreenMd>
      <div className="my-4">
      <h1 className="text-2xl font-bold">Add Question</h1>
      </div>
      <form className='flex flex-col gap-8'>
        <div>
          <Label htmlFor='title'>Title</Label>
          <Input id='title' className='' />
        </div>
        <div>
          <Label htmlFor='description'>Description</Label>
          <Textarea id='description' className='' />
        </div>
        <div>
          <FancyMultiSelect />
        </div>
        <Button className="">Add question</Button>
      </form>
    </ScreenMd>
  );
};

export default CreateQuestionPage;
