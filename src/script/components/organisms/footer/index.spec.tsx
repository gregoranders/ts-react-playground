import React, { mount, create } from '@app/testUtils';

import * as TestSubject from '@organisms/footer';

describe(`${TestSubject.Footer.displayName}`, () => {
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
    const year = new Date().getFullYear();
    expect(testSubject.text()).toBe(`© ${year} by Gregor Anders`);
  });
});
