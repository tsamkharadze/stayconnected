import ScreenMd from '@/components/layout/page-containers/screen-md';
import UserInfo from '../components/user-info';
const user = {
  id: "123",
  name: "John",
  email: "John@mail.com",
  rating: 7
}
const UserProfile = () => {
  return (
    <ScreenMd>
     <UserInfo user={user}/>
    </ScreenMd>
  );
};

export default UserProfile;
