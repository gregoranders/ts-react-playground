import React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';

import * as TestSubject from '@atoms/button';

describe(`${TestSubject.Button.displayName}`, () => {
  it('exports default', () => {
    expect(TestSubject.default).toBeDefined();
  });

  const TestComponent = TestSubject.default;

  const OnClick = jest.fn();

  afterEach(() => {
    OnClick.mockReset();
  });

  it('snapshot', (): void => {
    const snapshot = create(<TestComponent onClick={OnClick} />);
    snapshot.toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  it('mount', () => {
    const testSubject = mount(<TestComponent onClick={OnClick} />);
    expect(testSubject.text()).toBe('Button');
  });

  it('click', () => {
    const testSubject = mount(<TestComponent onClick={OnClick} />);
    expect(testSubject.text()).toBe('Button');
    expect(OnClick.mock.calls.length).toEqual(0);
    testSubject.find('button').simulate('click');
    expect(OnClick.mock.calls.length).toEqual(1);
  });
});
