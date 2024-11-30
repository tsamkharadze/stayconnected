import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const QuestionsList = () => {
  const tags = ['React', 'JavaScript', 'AI', 'Blockchain'];
  const questions = [
    {
      id: 1,
      title: `Many desktop publishing packages and web page editors now use Lorem Ipsum as their default`,
      description: `It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters`,
      date: '11/11/2024',
      answers: 4,
      author: 'Zadie Smith',
    },
    {
      id: 2,
      title: `Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum`,
      description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary`,
      date: '31/04/2024',
      answers: 0,
      author: 'Roald Dahl',
    },
    {
      id: 3,
      title: `Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from`,
      description: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
      date: '02/12/2023',
      answers: 8,
      author: 'Ralph Waldo',
    },
  ];

  const titleSubString = (str: string, count: number) => {
    if (str.length < count) {
      return str;
    }
    const title = str.substring(0, count);
    const lastSpaceIndex = title.lastIndexOf(' ');

    // If there's no space, return the string as is
    if (lastSpaceIndex === -1) {
      return title;
    }

    // Slice the string to get the part before the last space
    return title.slice(0, lastSpaceIndex) + '...';
  };

  return (
    <>
      <div className='flex flex-col space-y-8 md:space-y-6 lg:space-y-8'>
        {questions.map((question) => {
          return (
            <Card
              className='space-y-4 px-6 py-4 md:px-4 lg:px-6'
              key={question.id}
            >
              <div className='flex flex-row justify-between'>
                <h2 className='cursor-pointer text-2xl font-bold hover:underline md:text-lg lg:text-2xl'>
                  {titleSubString(question.title, 30)}
                </h2>
              </div>
              <div className='flex cursor-pointer flex-row space-x-1 text-sm text-muted-foreground md:text-xs lg:text-sm'>
                <span>{question.author}</span>
                <span>&#x2022;</span>
                <span>answers {question.answers}</span>
                <span>&#x2022;</span>
                <span className='text-muted-foreground'>{question.date}</span>
              </div>
              <p className='text-md cursor-pointer md:text-sm'>
                {titleSubString(question.description, 200)}
              </p>
              <div className='flex flex-row justify-between'>
                <div className='flex flex-row flex-wrap items-start gap-2'>
                  {tags.map((tag) => {
                    return (
                      <Badge key={tag} className='cursor-pointer'>
                        {tag}
                      </Badge>
                    );
                  })}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default QuestionsList;
