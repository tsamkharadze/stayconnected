import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import UserQuestionCards from '../../../components/ui-blocks/question-cards/question-cards';
import { User } from '../../../types/interfaces';
import { PropsWithChildren } from 'react';
interface UserInfoProps {
  user: User;
}
const UserTabs: React.FC<PropsWithChildren<UserInfoProps>> = ({ user }) => {
  return (
    <div className='w-full'>
      <Tabs defaultValue='questions' className='w-full'>
        <TabsList>
          <TabsTrigger value='questions'>My Questions</TabsTrigger>
          <TabsTrigger value='answers'>My Answers</TabsTrigger>
        </TabsList>
        <TabsContent value='questions'>
          <UserQuestionCards questions={user.questions} />
        </TabsContent>
        <TabsContent value='answers'>Answer content goes here</TabsContent>
      </Tabs>
    </div>
  );
};
export default UserTabs;
