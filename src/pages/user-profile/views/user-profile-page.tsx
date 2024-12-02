import { httpClient } from '@/components/api';
import { userAtom } from '@/store/auth';
import { useAtomValue } from 'jotai';

import ScreenLg from '@/components/layout/page-containers/screen-lg';
import { useEffect, useState } from 'react';

const UserProfile = () => {
  const [profile, setProfile] = useState(undefined)
  const user = useAtomValue(userAtom);
  const token = user?.access;

  const getUserInfo = async () => {
    try {
      const response = await httpClient.get('/user/profile/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('fetched user data', response.data);
      setProfile(response.data);
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    if(user){
      getUserInfo()
    }
  }, [user])
  return (
    <ScreenLg>
      <div className='flex flex-col gap-8'>
        {/* <UserInfo user={profile} />
        <UserTabs user={profile} /> */}
        <p>{JSON.stringify(profile)}</p>
      </div>
    </ScreenLg>
  );
};

export default UserProfile;
