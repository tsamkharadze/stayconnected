import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LogOut, Settings, User } from 'lucide-react';
const Controls: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div>
      {loggedIn ? (
        <div className='flex items-center gap-4'>
          <Link to='createQuestion'>
            <Button variant='default'>Add</Button>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar>
                <AvatarImage src='https://github.com/shadcn.png' />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56' align='end' forceMount>
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Settings className='mr-2 h-4 w-4' />
                  <span>User settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <User className='mr-2 h-4 w-4' />
                  <span>Profile</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem className='text-red-600'>
                <LogOut className='mr-2 h-4 w-4' />
                <span>Sign out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
