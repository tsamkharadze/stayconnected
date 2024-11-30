import { useEffect, useState } from 'react';
import MainRoutes from './routes/routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { userAtom } from './store/auth';
import { useSetAtom } from 'jotai';

const queryClient = new QueryClient();

const App: React.FC = () => {
  const setUser = useSetAtom(userAtom);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const storedTokenData = localStorage.getItem('data');

    if (storedTokenData) {
      try {
        const parsedTokenData = JSON.parse(storedTokenData);

        if (parsedTokenData.access) {
          setUser({
            accessToken: parsedTokenData.access,
            refreshToken: parsedTokenData.refresh || '',
            user: parsedTokenData.user,
          });

          console.log('User session restored from localStorage');
        }
      } catch (error) {
        console.error('Error parsing token data from localStorage:', error);
      }
    } else {
      console.log('No session found in localStorage');
    }

    setLoading(false);
  }, [setUser]);

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
