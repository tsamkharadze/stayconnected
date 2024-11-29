import FormContainer from '@/components/layout/page-containers/form-container';
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
      <FormContainer>
        <div>
          <Label htmlFor='title'>Title</Label>
          <Input id='title'/>
        </div>
        <div>
          <Label htmlFor='description'>Description</Label>
          <Textarea id='description'/>
        </div>
        <div>
          <FancyMultiSelect />
        </div>
        <Button>Add question</Button>
      </FormContainer>
    </ScreenMd>
  );
};

export default CreateQuestionPage;
