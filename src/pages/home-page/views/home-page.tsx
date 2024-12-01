import HomePageContainer from '@/components/layout/page-containers/home-page-container';
import QuestionsList from './questions-list.tsx';
import UserRating from './rating.tsx';

const HomePage = () => {
  return (
    <>
      <HomePageContainer>
        <div className='p-4 md:w-2/3 md:p-2 lg:p-4'>
          <QuestionsList />
        </div>
        <div className='p-4 md:w-1/3 md:p-2 lg:p-4'>
          <UserRating />
        </div>
      </HomePageContainer>
    </>
  );
};

export default HomePage;
