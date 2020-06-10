import React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';

import * as TestSubject from '@organisms/main';

describe(`${TestSubject.Main.displayName}`, () => {
  it('exports default', () => {
    expect(TestSubject.default).toBeDefined();
  });

  const TestComponent = TestSubject.default;

  describe('snapshot', () => {
    it('string', (): void => {
      const snapshot = create(<TestComponent>test</TestComponent>);
      snapshot.toJSON();
      expect(snapshot).toMatchSnapshot();
    });

    it('element', (): void => {
      const snapshot = create(
        <TestComponent>
          <span>test</span>
        </TestComponent>,
      );
      snapshot.toJSON();
      expect(snapshot).toMatchSnapshot();
    });
  });

  describe('mount', () => {
    it('string', () => {
      const testSubject = mount(<TestComponent>test</TestComponent>);
      expect(testSubject.text()).toBe('test');
    });

    it('string', () => {
      const testSubject = mount(
        <TestComponent>
          <span>test</span>
        </TestComponent>,
      );
      expect(testSubject.text()).toBe('test');
    });
  });
});
