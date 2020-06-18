import React, { mount, create } from '@app/testUtils';

import { MemoryRouter } from 'react-router-dom';

import * as TestSubject from '@organisms/nav';

describe(`${TestSubject.Nav.displayName}`, () => {
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
    expect(testSubject.text()).toBe('HomeMaterial UIAbout');
  });
});
