import React from 'react';
import { RecoilRoot } from 'recoil';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';

import * as TestSubject from './index';

describe(`${TestSubject.UsersModelView.displayName}`, () => {
  it('exports default', () => {
    expect(TestSubject.default).toBeDefined();
  });

  const TestComponent = TestSubject.default;

  const OnClick = jest.fn();

  afterEach(() => {
    OnClick.mockReset();
  });

  it('snapshot', (): void => {
    const snapshot = create(
      <RecoilRoot>
        <TestComponent />
      </RecoilRoot>,
    );
    snapshot.toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  it('mount', () => {
    const testSubject = mount(
      <RecoilRoot>
        <TestComponent />
      </RecoilRoot>,
    );
    expect(testSubject.text()).toBe('Generate Users [0]');
  });

  it('mount', () => {
    const testSubject = mount(
      <RecoilRoot>
        <TestComponent />
      </RecoilRoot>,
    );
    testSubject.find('button').simulate('click');
    expect(testSubject.text()).toBe('Generate Users [0]');
  });
});
