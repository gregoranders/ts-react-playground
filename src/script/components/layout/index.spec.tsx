import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';

import * as TestSubject from '@components/layout';

describe(`${TestSubject.Layout.displayName}`, () => {
  it('exports default', () => {
    expect(TestSubject.default).toBeDefined();
  });

  const TestComponent = TestSubject.default;

  describe('snapshot', () => {
    it('string', (): void => {
      const snapshot = create(
        <MemoryRouter>
          <TestComponent>test</TestComponent>
        </MemoryRouter>,
      );
      snapshot.toJSON();
      expect(snapshot).toMatchSnapshot();
    });
    it('element', (): void => {
      const snapshot = create(
        <MemoryRouter>
          <TestComponent>
            <span>test</span>
          </TestComponent>
        </MemoryRouter>,
      );
      snapshot.toJSON();
      expect(snapshot).toMatchSnapshot();
    });
  });

  describe('mount', () => {
    it('string', () => {
      const testSubject = mount(
        <MemoryRouter>
          <TestComponent>test</TestComponent>
        </MemoryRouter>,
      );
      expect(testSubject.text()).toBe(`HeaderHomeAbouttest© 2020 by Gregor Anders`);
    });
    it('element', () => {
      const testSubject = mount(
        <MemoryRouter>
          <TestComponent>
            <span>test</span>
          </TestComponent>
        </MemoryRouter>,
      );
      expect(testSubject.text()).toBe(`HeaderHomeAbouttest© 2020 by Gregor Anders`);
    });
  });
});
