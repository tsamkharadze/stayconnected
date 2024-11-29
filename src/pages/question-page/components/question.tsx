import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

const Question: React.FC = () => {
  return (
    <div>
      <h2 className='text-3xl font-bold'>Question Title</h2>
      <div>Like/Author/Date Time</div>
      <Separator className='my-4' />
      <div className='text-justify leading-normal'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe
        repudiandae esse, provident asperiores ut dignissimos deleniti commodi
        beatae amet quod fuga, sed sint architecto hic magnam et aspernatur
        distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Explicabo dolor soluta nobis cum ipsum cupiditate, enim deserunt porro!
        Eius beatae amet adipisci fugit itaque expedita, temporibus repudiandae.
        Eligendi, esse aspernatur. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Voluptatum cumque vero maiores, odit repellendus sequi
        repudiandae fugiat iste unde? Natus exercitationem voluptas placeat
        fugiat beatae inventore sunt a quo nisi!
      </div>
      <div className='mt-4 space-x-2'>
        <Badge variant='secondary'>React</Badge>
        <Badge variant='secondary'>TypeScript</Badge>
        <Badge variant='secondary'>Redux</Badge>
      </div>
    </div>
  );
};

export default Question;
