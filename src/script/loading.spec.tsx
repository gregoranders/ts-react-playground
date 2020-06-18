import React, { act, create, mount } from '@app/testUtils';

import * as TestSubject from '@app/loading';

describe(`${TestSubject.Loading.displayName}`, () => {
  it('exports default', () => {
    expect(TestSubject.default).toBeDefined();
  });

  const TestComponent = TestSubject.default;

  it('snapshot', (): void => {
    const snapshot = create(<TestComponent />);
    expect(snapshot).toMatchSnapshot();
  });

  it('mount', () => {
    const stepForwardInTime = (steps = 10) => {
      act(() => {
        jest.advanceTimersToNextTimer(steps);
      });
    };
    const testSubject = mount(<TestComponent timeout={10} />);
    stepForwardInTime(10);
    expect(testSubject.find('h1').text()).toBe('·');
    stepForwardInTime(9);
    expect(testSubject.find('h1').text()).toBe('··');
    stepForwardInTime(9);
    expect(testSubject.find('h1').text()).toBe('···');
    stepForwardInTime(9);
    expect(testSubject.find('h1').text()).toBe('····');
    stepForwardInTime(9);
    expect(testSubject.find('h1').text()).toBe('·····');
    stepForwardInTime(9);
    expect(testSubject.find('h1').text()).toBe('····');
    stepForwardInTime(9);
    expect(testSubject.find('h1').text()).toBe('···');
    stepForwardInTime(9);
    expect(testSubject.find('h1').text()).toBe('··');
    stepForwardInTime(9);
    expect(testSubject.find('h1').text()).toBe('·');
    stepForwardInTime(9);
    expect(testSubject.find('h1').text()).toBe('··');
  });
});
