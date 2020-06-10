import { atom, selector } from 'recoil';
import { number as IsNumber, shape as IsShape, string as IsString } from 'prop-types';
import faker from 'faker';

export type User = {
  readonly id: number;
  readonly firstName: string;
  readonly lastName: string;
  readonly eMail: string;
};

export const DefaultUser: User = {
  id: 0,
  firstName: '',
  lastName: '',
  eMail: '',
};

export const RandomUser: User = {
  id: faker.random.number(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  eMail: faker.internet.email(),
};

export const UserPropTypes = IsShape({
  id: IsNumber.isRequired,
  firstName: IsString.isRequired,
  lastName: IsString.isRequired,
  eMail: IsString.isRequired,
});

export const generate = (count = 100): User[] => {
  const users = [] as User[];

  for (let idx = 0; idx < count; idx++) {
    users.push({
      id: idx,
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      eMail: faker.internet.email(),
    });
  }

  return users;
};

export const generateAsync = async (count = 100): Promise<User[]> => {
  return generate(count);
};

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
