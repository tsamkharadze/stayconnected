import { PropsWithChildren } from 'react';

const HomePageContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='mx-auto mt-10 flex w-full flex-col gap-8 md:w-3/4 md:flex-row'>
      {children}
    </div>
  );
};
export default HomePageContainer;
