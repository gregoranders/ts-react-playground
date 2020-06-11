import { atom, selector } from 'recoil';
import { number as IsNumber, shape as IsShape, string as IsString } from 'prop-types';
import faker from 'faker';

/**
 * User
 *
 * @description User representation.
 */
export type User = {
  /**
   * Id
   *
   * @description User ID
   * @type number
   */
  readonly id: number;
  /**
   * firstName
   *
   * @description User's first name
   * @type string
   */
  readonly firstName: string;
  /**
   * lastName
   *
   * @description User's last name
   * @type string
   */
  readonly lastName: string;
  /**
   * eMail
   *
   * @description User eMail
   * @type string
   */
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

/**
 * Users
 *
 * @description Collection of Users
 *
 * @see User
 */
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

const TOP10_KEY = 'usersTopTen';

export const UsersTop10 = selector({
  key: TOP10_KEY,
  get: ({ get }) => {
    const users = get(UsersAtom);
    return users.slice(0, 10);
  },
});

const BOTTOM10_KEY = 'usersBottomTen';

export const UsersBottom10 = selector({
  key: BOTTOM10_KEY,
  get: ({ get }) => {
    const users = get(UsersAtom);
    return users.slice(users.length - 10);
  },
});

export default UsersAtom;
