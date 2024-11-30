import ScreenMd from '@/components/layout/page-containers/screen-md';
import UserInfo from '../components/user-info';
import UserTabs from '../components/user-tabs';


const user = {
  id: '123',
  name: 'John',
  email: 'John@mail.com',
  rating: 7,
};
const UserProfile = () => {
  return (
    <ScreenMd>
      <UserInfo user={user} />
      <UserTabs />
    </ScreenMd>
  );
};

export default UserProfile;
