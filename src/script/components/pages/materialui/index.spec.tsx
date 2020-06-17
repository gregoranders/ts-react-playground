import React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';

import * as TestSubject from '@pages/materialui';

describe(`${TestSubject.MaterialUIPage.displayName}`, () => {
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
    expect(testSubject.text()).toBe('HideMaterialUIPage');
  });

  describe('interaction', () => {
    it('should contain `Hide` in initial state', () => {
      const testSubject = mount(<TestComponent />);
      expect(testSubject.text()).toBe('HideMaterialUIPage');
    });
    it('should contain `Show` when clicked', () => {
      const testSubject = mount(<TestComponent />);
      testSubject.find('button').simulate('click');
      expect(testSubject.text()).toBe('Show');
    });
  });
});
