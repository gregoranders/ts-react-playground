import React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';

import { DefaultUser } from '@models/user';

import * as TestSubject from '@molecules/users';

describe(`${TestSubject.UsersView.displayName}`, () => {
  it('exports default', () => {
    expect(TestSubject.default).toBeDefined();
  });

  const TestComponent = TestSubject.default;

  const OnClick = jest.fn();

  afterEach(() => {
    OnClick.mockReset();
  });

  it('snapshot', (): void => {
    const snapshot = create(<TestComponent users={[DefaultUser]} />);
    snapshot.toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  it('mount', () => {
    const testSubject = mount(<TestComponent users={[DefaultUser]} />);
    expect(testSubject.text()).toBe('First NameLast NameeMail');
  });
});
