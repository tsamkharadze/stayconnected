import { atomWithStorage } from 'jotai/utils';
type User = {
  access: string;
  refresh: string;
} | null;
//eslint-disable-next-line
export const userAtom = atomWithStorage<User>('user', null); // Default value is `null`
