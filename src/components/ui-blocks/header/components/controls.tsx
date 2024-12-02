import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Link, useNavigate } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LogOut, User } from 'lucide-react';
import { useAtom } from 'jotai';
import { userAtom } from '@/store/auth';
const Controls: React.FC = () => {
  const [user, setUser] = useAtom(userAtom);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('data');
    navigate('/home');
  };

  return (
    <div>
      {user ? (
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
                  <User className='mr-2 h-4 w-4' />
                  <Link to='/profile'>
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem className='text-red-600' onClick={handleLogout}>
                <LogOut className='mr-2 h-4 w-4' />
                <span>Sign out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <div>
          <Button onClick={() => navigate('/login')}>Sign In</Button>
        </div>
      )}
    </div>
  );
};
export default Controls;
