import React from 'react';
import { RecoilRoot } from 'recoil';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';

import * as TestSubject from './index';

describe(`${TestSubject.HomePage.displayName}`, () => {
  it('exports default', () => {
    expect(TestSubject.default).toBeDefined();
  });

  const TestComponent = TestSubject.default;

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
});
