import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useState } from 'react';
const Controls: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div>
      {loggedIn ? (
        <div className='flex items-center gap-4'>
          <Button variant='default'>Add</Button>
          <Avatar>
            <AvatarImage src='https://github.com/shadcn.png' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      ) : (
        <div>
          <Button
            onClick={() => {
              setLoggedIn(true);
            }}
          >
            Sign In
          </Button>
        </div>
      )}
    </div>
  );
};
export default Controls;
