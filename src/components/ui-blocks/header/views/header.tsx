import ScreenLg from '@/components/layout/page-containers/screen-lg';
import Logo from '../components/logo';
import Controls from '../components/controls';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Header: React.FC = () => {
  return (
    <div className='border-border-soft border-b'>
      <ScreenLg>
        <div className='grid grid-cols-2 grid-rows-[auto_auto] items-center gap-4 py-4 md:grid-cols-[auto_1fr_auto] md:grid-rows-1'>
          <div className='col-span-1 md:col-start-1'>
            <Logo />
          </div>

          <div className='col-span-2 flex w-full items-center gap-4 md:col-span-1 md:col-start-2'>
            <Input placeholder='Search...' />
            <Button variant='secondary'>
              <Search />
            </Button>
          </div>

          <div className='col-span-1 col-start-2 row-start-1 flex justify-end md:col-start-3'>
            <Controls />
          </div>
        </div>
      </ScreenLg>
    </div>
  );
};

export default Header;
