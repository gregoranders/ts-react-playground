import React from 'react';
import { mount } from 'enzyme';

import * as TestSubject from '@app/application';

describe(`${TestSubject.Application.displayName}`, () => {
  it('exports default', () => {
    expect(TestSubject.default).toBeDefined();
  });

  const TestComponent = TestSubject.default;

  it('mount', () => {
    const testSubject = mount(<TestComponent basename="/" />);
    expect(testSubject.text()).toBe(``);
  });
});
