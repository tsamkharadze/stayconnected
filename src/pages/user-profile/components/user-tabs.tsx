import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
const UserTabs: React.FC = () => {
  return (
    <div>
      <Tabs defaultValue='questions' className='w-[400px]'>
        <TabsList>
          <TabsTrigger value='questions'>My Questions</TabsTrigger>
          <TabsTrigger value='answers'>My Answers</TabsTrigger>
        </TabsList>
        <TabsContent value='questions'>
          Make changes to your account here.
        </TabsContent>
        <TabsContent value='answers'>Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};
export default UserTabs;
