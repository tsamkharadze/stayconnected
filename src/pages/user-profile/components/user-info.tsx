import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User } from './user';
import { PropsWithChildren } from 'react';
interface UserInfoProps {
  user: User;
}
const UserInfo: React.FC<PropsWithChildren<UserInfoProps>> = ({ user }) => {
  // const getUserInfo = async () => {
  //   try {
  //     const response = await httpClient.get('');
  //     console.log('fetched user data', response.data);
  //     return response.data;
  //   } catch (error) {
  //     throw error;
  //   }
  // };
  return (
    <Card>
      <CardHeader className='flex flex-row items-center gap-4'>
        <div>
          <Avatar className='size-12 md:size-24'>
            <AvatarImage src='https://github.com/shadcn.png' />
            <AvatarFallback>{user.name[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <CardTitle>
            <p className='truncate text-lg font-bold md:text-2xl'>
              {user.name}
            </p>
          </CardTitle>
          <CardDescription className='text-md'>
            Rating: {user.rating}
          </CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
};
export default UserInfo;
