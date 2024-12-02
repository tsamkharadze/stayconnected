import { httpClient } from '@/components/api';
type FormFields = {
  title: string;
  description: string;
  tags: tag[];
};
type tag = {
  name: string;
};
export const sendQuestion = async (data: FormFields, user: any) => {

  const token = user?.access;
  console.log('user', user);
  const response = await httpClient.post('/questions', data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
