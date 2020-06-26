import React, { create, mount } from '@app/test-utils';

import { DefaultUser } from '@models/user';

import * as TestSubject from '@atoms/user';

describe(`${TestSubject.UserView.displayName}`, () => {
  it('exports default', () => {
    expect(TestSubject.default).toBeDefined();
  });

  const TestComponent = TestSubject.default;

  const OnClick = jest.fn();

  afterEach(() => {
    OnClick.mockReset();
  });

  it('snapshot', (): void => {
    const snapshot = create(<TestComponent user={DefaultUser} />);
    snapshot.toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  it('mount', () => {
    const testSubject = mount(<TestComponent user={DefaultUser} />);
    expect(testSubject.text()).toBe('First NameLast NameeMail');
  });
});
