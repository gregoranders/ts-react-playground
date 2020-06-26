import React, { create, mount } from '@app/test-utils';

import { MemoryRouter } from 'react-router-dom';

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
