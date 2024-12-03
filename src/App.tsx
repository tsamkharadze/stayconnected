import { useAtom, useAtomValue } from 'jotai';
import MainRoutes from './routes/routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { meAtom, userAtom } from './store/auth';
import { setAuthToken } from './components/api';
import { useEffect, useState } from 'react';
import { getUserInfo } from './components/api/user/getuserinfo';

const queryClient = new QueryClient();

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [me, setMe] = useAtom(meAtom);
  const user = useAtomValue(userAtom);

  useEffect(() => {
    if (user?.access) {
      setAuthToken(user.access);
    } else {
      setAuthToken(null);
    }
  }, [user]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getUserInfo();
      setMe(res);
    };

    fetchData();
  }, [user]);

  console.log(me);

  useEffect(() => {
    if (me !== undefined) {
      setLoading(false);
    }
  }, [me]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <MainRoutes />
    </QueryClientProvider>
  );
};

export default App;
