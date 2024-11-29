import { PropsWithChildren } from 'react';

const ScreenMd: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='mx-4 sm:mx-12 md:mx-auto w-auto md:w-[560px] my-8'>
      {children}
    </div>
  );
};
export default ScreenMd;
