import ScreenMd from '@/components/layout/page-containers/screen-md';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const UserProfile = () => {
  return (
    <ScreenMd>
      <Card>
        <CardHeader className='flex flex-row items-center gap-4'>
          <div>
            <Avatar className='size-12 md:size-24'>
              <AvatarImage src='https://github.com/shadcn.png' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <CardTitle>
              <p className='truncate text-lg font-bold md:text-2xl'>
                Staticemail@email.com
              </p>
            </CardTitle>

            <CardDescription className='text-md'>
              StaticRating :0
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </ScreenMd>
  );
};

export default UserProfile;
