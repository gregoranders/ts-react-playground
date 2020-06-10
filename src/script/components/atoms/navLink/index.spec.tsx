import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';

import * as TestSubject from '@atoms/navLink';

describe(`${TestSubject.NavLink.displayName}`, () => {
  it('exports default', () => {
    expect(TestSubject.default).toBeDefined();
  });

  const TestComponent = TestSubject.default;

  describe('snapshot', () => {
    it('active', (): void => {
      const snapshot = create(
        <MemoryRouter initialEntries={['/about']}>
          <TestComponent to="/about" className="green">
            test
          </TestComponent>
        </MemoryRouter>,
      );
      snapshot.toJSON();
      expect(snapshot).toMatchSnapshot();
    });

    it('inactive', (): void => {
      const snapshot = create(
        <MemoryRouter initialEntries={['/']}>
          <TestComponent to="/about" className="green">
            test
          </TestComponent>
        </MemoryRouter>,
      );
      snapshot.toJSON();
      expect(snapshot).toMatchSnapshot();
    });
  });

  describe('mount', () => {
    it('active', () => {
      const testSubject = mount(
        <MemoryRouter initialEntries={['/about']}>
          <TestComponent to="/about">test</TestComponent>
        </MemoryRouter>,
      );
      expect(testSubject.text()).toBe('test');
    });
  });
});
