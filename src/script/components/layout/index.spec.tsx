import React, { mount, create } from '@app/testUtils';

import { MemoryRouter } from 'react-router-dom';

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
      expect(testSubject.text()).toMatch(/^Header.*Anders$/);
    });
    it('element', () => {
      const testSubject = mount(
        <MemoryRouter>
          <TestComponent>
            <span>test</span>
          </TestComponent>
        </MemoryRouter>,
      );
      expect(testSubject.text()).toMatch(/Header.*© 2020 by Gregor Anders/);
    });
  });
});
