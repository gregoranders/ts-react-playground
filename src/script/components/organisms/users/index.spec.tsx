import React, { RecoilRoot, act, create, mount } from '@app/testUtils';

import * as TestSubject from '@organisms/users';

describe(`${TestSubject.UsersModelView.displayName}`, () => {
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
    expect(testSubject.text()).toBe('Generate Users [0]');
  });

  it('mount', () => {
    const testSubject = mount(
      <RecoilRoot>
        <TestComponent />
      </RecoilRoot>,
    );
    act(() => {
      testSubject.find('button').simulate('click');
    });
    expect(testSubject.text()).toContain('Generate Users [15]');
  });
});
