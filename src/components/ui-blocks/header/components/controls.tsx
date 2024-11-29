import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Controls: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div>
      {loggedIn ? (
        <div className='flex items-center gap-4'>
          <Link to="createQuestion">
          <Button variant='default'>Add</Button>
          </Link>
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
