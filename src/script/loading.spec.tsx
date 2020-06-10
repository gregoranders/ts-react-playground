import React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';

import * as TestSubject from '@app/loading';

describe(`${TestSubject.Loading.displayName}`, () => {
  it('exports default', () => {
    expect(TestSubject.default).toBeDefined();
  });

  const TestComponent = TestSubject.default;

  it('snapshot', (): void => {
    const snapshot = create(<TestComponent />);
    snapshot.toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  it('mount', () => {
    const testSubject = mount(<TestComponent />);
    expect(testSubject.text()).toBe(``);
  });
});
