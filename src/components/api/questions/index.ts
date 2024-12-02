import { httpClient } from '..';

export const getQuestions = async () => {
  try {
    const response = await httpClient.get('/questions');
    // console.log('get questions was successful:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error during get questions:', error);
    throw error;
  }
};
