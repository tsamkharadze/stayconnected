import { useAtomValue } from 'jotai';
import { Navigate, Outlet } from 'react-router-dom';
import React, { PropsWithChildren } from 'react';
import { userAtom } from '@/store/auth';

export const LogoutGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const user = useAtomValue(userAtom);

  if (!user) {
    return <Navigate to='/home' />;
  }

  return children || <Outlet />;
};
