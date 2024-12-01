import Logo from '../components/logo';
import Controls from '../components/controls';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import ScreenLgHeader from '@/components/layout/page-containers/screen-lg-header';

const Header: React.FC = () => {
  return (
    <div className='border-border-soft border-b'>
      <ScreenLgHeader>
        <div className='grid grid-cols-2 grid-rows-[auto_auto] items-center md:gap-16 lg:gap-32 xl:gap-64 py-4 md:grid-cols-[auto_1fr_auto] md:grid-rows-1 gap-y-8'>
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
      </ScreenLgHeader>
    </div>
  );
};

export default Header;
