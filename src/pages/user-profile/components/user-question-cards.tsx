import { User } from './user';
import { PropsWithChildren } from 'react';

interface UserInfoProps {
  user: User;
}
const UserQuestionCards: React.FC<PropsWithChildren<UserInfoProps>> = ({
  user,
}) => {
  return (
    <div className='flex flex-col gap-6'>
      <p>Questions: {user.questions.length}</p>

      {/* {user.questions.map((question) => {
        return (
          <Link to='' key={question.id}>
            <Card>
              <CardHeader>
                <CardTitle className='text-lg'>{question.title}</CardTitle>
                <CardDescription>
                  {question.author} • {question.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className='text-md text-muted-foreground'>
                  {question.description}
                </p>
              </CardContent>
              <CardFooter className='flex justify-between'>
                <div className='flex gap-2'>
                  {question.tags.map((tag) => {
                    return (
                      <Badge className='cursor-pointer' key={tag}>
                        {tag}
                      </Badge>
                    );
                  })}
                </div>
                <p className='text-sm text-muted-foreground'>
                  Answers: {question.answers.length}
                </p>
              </CardFooter>
            </Card>
          </Link>
        );
      })} */}
    </div>
  );
};
export default UserQuestionCards;
