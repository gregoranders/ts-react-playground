import React, { RecoilRoot, create, mount } from '@app/testUtils';

import * as TestSubject from '@pages/home';

describe(`${TestSubject.HomePage.displayName}`, () => {
  it('exports default', () => {
    expect(TestSubject.default).toBeDefined();
  });

  const TestComponent = TestSubject.default;

  it('snapshot', (): void => {
    const snapshot = create(
      <RecoilRoot>
        <TestComponent />
      </RecoilRoot>,
    );
    snapshot.toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  it('mount', () => {
    const testSubject = mount(
      <RecoilRoot>
        <TestComponent />
      </RecoilRoot>,
    );
    expect(testSubject.text()).toBe('Generate Users');
  });
});
