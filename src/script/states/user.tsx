import { User } from '@models/user';

import { atom, selector } from 'recoil';

const USERS_KEY = 'userAtom';

export const UsersAtom = atom({
  key: USERS_KEY,
  default: [] as User[],
});

const USERS_LENGTH_KEY = 'usersLengthSelector';

export const UsersLength = selector({
  key: USERS_LENGTH_KEY,
  get: ({ get }) => {
    const users = get(UsersAtom);
    return users.length;
  },
});

export default UsersAtom;
