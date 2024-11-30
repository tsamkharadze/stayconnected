import HomePageContainer from '@/components/layout/page-containers/home-page-container';
import QuestionsList from './questions-list.tsx';
import UserRaiting from './raiting.tsx';

const HomePage = () => {
  return (
    <>
      <HomePageContainer>
        <div className='p-4 md:w-2/3'>
          <QuestionsList />
        </div>
        <div className='p-4 md:w-1/3'>
          <UserRaiting />
        </div>
      </HomePageContainer>
    </>
  );
};

export default HomePage;
