import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import UserQuestionCards from './user-question-cards';
import { User } from './user';
import { PropsWithChildren } from 'react';
interface UserInfoProps {
  user: User;
}
const UserTabs: React.FC<PropsWithChildren<UserInfoProps>> = ({ user }) => {
  return (
    <div>
      <Tabs defaultValue='questions' className='w-full'>
        <TabsList>
          <TabsTrigger value='questions'>My Questions</TabsTrigger>
          <TabsTrigger value='answers'>My Answers</TabsTrigger>
        </TabsList>
        <TabsContent value='questions'>
          <UserQuestionCards user={user} />
        </TabsContent>
        <TabsContent value='answers'>Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};
export default UserTabs;
