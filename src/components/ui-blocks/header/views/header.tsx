import ScreenLg from '@/components/layout/page-containers/screen-lg';
import Logo from '../components/logo';
import Controls from '../components/controls';
import SearchBlock from '../components/search-block';
const Header: React.FC = () => {
  return (
    <div className='border-border-soft border-b'>
      <ScreenLg>
        <div className='hidden items-center justify-between gap-8 py-4 lg:flex'>
          <Logo />
          <SearchBlock />
          <Controls />
        </div>

        <div className='flex flex-col items-center justify-between gap-8 py-4 lg:hidden'>
          <div className='flex w-full items-center justify-between'>
            <Logo />
            <Controls />
          </div>
          <SearchBlock />
        </div>
      </ScreenLg>
    </div>
  );
};
export default Header;
