import { PropsWithChildren } from 'react';

const ScreenMd: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='mx-4 max-w-screen-lg sm:mx-12 md:mx-16 2xl:mx-auto'>
      {children}
    </div>
  );
};
export default ScreenMd;
