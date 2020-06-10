import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';

import * as TestSubject from '@organisms/header';

describe(`${TestSubject.Header.displayName}`, () => {
  it('exports default', () => {
    expect(TestSubject.default).toBeDefined();
  });

  const TestComponent = TestSubject.default;

  it('snapshot', (): void => {
    const snapshot = create(
      <MemoryRouter>
        <TestComponent />
      </MemoryRouter>,
    );
    snapshot.toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  it('mount', () => {
    const testSubject = mount(
      <MemoryRouter>
        <TestComponent />
      </MemoryRouter>,
    );
    expect(testSubject.text()).toBe('Header');
  });
});
