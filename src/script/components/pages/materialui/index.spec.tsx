import React, { mount, create, RecoilRoot } from '@app/testUtils';

import * as TestSubject from '@pages/materialui';

describe(`${TestSubject.MaterialUIPage.displayName}`, () => {
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
    expect(testSubject.text()).toBe('HideMaterialUIPage');
  });

  describe('interaction', () => {
    it('should contain `Hide` in initial state', () => {
      const testSubject = mount(
        <RecoilRoot>
          <TestComponent />
        </RecoilRoot>,
      );
      expect(testSubject.text()).toBe('HideMaterialUIPage');
    });
    it('should contain `Show` when clicked', () => {
      const testSubject = mount(
        <RecoilRoot>
          <TestComponent />
        </RecoilRoot>,
      );
      testSubject.find('button').simulate('click');
      expect(testSubject.text()).toBe('Show');
    });
  });
});
