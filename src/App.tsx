import { useAtomValue } from 'jotai';
import MainRoutes from './routes/routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { userAtom } from './store/auth';
import { setAuthToken } from './components/api';
import { useEffect } from 'react';

const queryClient = new QueryClient();

const App: React.FC = () => {
  // const [loading, setLoading] = useState(true); // Add loading state

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  const token = useAtomValue(userAtom);

  useEffect(() => {
    setAuthToken(token?.access ?? '');
  }, [token?.access]);

  return (
    <QueryClientProvider client={queryClient}>
      <MainRoutes />
    </QueryClientProvider>
  );
};

export default App;
