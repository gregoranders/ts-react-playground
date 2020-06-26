import { atom } from 'recoil';
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

// eslint-disable-next-line unicorn/prevent-abbreviations
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

export default UsersAtom;
