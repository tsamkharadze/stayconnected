import { Separator } from '@/components/ui/separator';

const Question = () => {
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
      <div className='mt-4 font-semibold uppercase'>
        React, TypeScript, Redux
      </div>
    </div>
  );
};

export default Question;
