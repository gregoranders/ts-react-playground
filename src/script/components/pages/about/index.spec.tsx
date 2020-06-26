import React, { create, mount } from '@app/test-utils';

import * as TestSubject from '@pages/about';

describe(`${TestSubject.AboutPage.displayName}`, () => {
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
    expect(testSubject.text()).toBe('AboutPage');
  });
});
