import { useAtomValue } from 'jotai';
import { Navigate, Outlet } from 'react-router-dom';
import React, { PropsWithChildren } from 'react';
import { meAtom } from '@/store/auth';

export const LogoutGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const me = useAtomValue(meAtom);

  if (!me) {
    return <Navigate to='/home' />;
  }

  return children || <Outlet />;
};
