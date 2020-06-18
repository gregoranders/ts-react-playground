import React, { mount, create } from '@app/testUtils';

import * as TestSubject from '@app/loading';

describe(`${TestSubject.Loading.displayName}`, () => {
  it('exports default', () => {
    expect(TestSubject.default).toBeDefined();
  });

  const TestComponent = TestSubject.default;

  it('snapshot', (): void => {
    const snapshot = create(<TestComponent />);
    snapshot.toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  it('mount', async () => {
    const testSubject = mount(<TestComponent timeout={10} />);
    expect(testSubject.text()).toBe(``);
    return expect(
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(true);
        }, 500);
      }),
    ).resolves.toBeTruthy();
  });
});
