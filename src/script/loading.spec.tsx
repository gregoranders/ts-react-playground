import React, { act, create, memo, mount } from '@app/testUtils';

import * as TestSubject from '@app/loading';

describe(`${TestSubject.Loading.displayName}`, () => {
  it('should export component', () => {
    expect(TestSubject.Loading).toBeDefined();
  });

  it('should export default', () => {
    expect(TestSubject.default).toBeDefined();
  });

  it('should export memoized component as default', () => {
    expect(TestSubject.default).toStrictEqual(memo(TestSubject.Loading));
  });

  it('should match default', (): void => {
    const snapshot = create(<TestComponent />);
    expect(snapshot).toMatchSnapshot();
  });

  const TestComponent = TestSubject.default;

  it('should have default props', () => {
    const testSubject = mount(<TestSubject.Loading />);

    act(() => {
      testSubject.update();
    });

    expect(testSubject).toHaveProp('type', 'loading');
    expect(testSubject).toHaveProp('indicator', '&middot;');
    expect(testSubject).toHaveProp('timeout', 300);
  });

  it('should use provided `className`', () => {
    const testSubject = mount(<TestComponent type="test" />);
    expect(testSubject).toHaveProp('type', 'test');
  });

  it('should use provided `timeout`', () => {
    const testSubject = mount(<TestComponent timeout={123} />);
    expect(testSubject).toHaveProp('timeout', 123);
  });

  it('should use provided `indicator`', () => {
    const testSubject = mount(<TestComponent indicator={'a'} />);
    expect(testSubject).toHaveProp('indicator', 'a');
  });

  it('should add default indicator each time custom timeout passes', () => {
    const stepForwardInTime = (steps = 10) => {
      act(() => {
        jest.advanceTimersToNextTimer(steps);
        testSubject.update();
      });
    };
    const testSubject = mount(<TestComponent timeout={1} />);
    expect(testSubject.find('span').text()).toBe('');
    stepForwardInTime(2);
    expect(testSubject.find('span').text()).toBe('·');
    stepForwardInTime(1);
    expect(testSubject.find('span').text()).toBe('··');
    stepForwardInTime(1);
    expect(testSubject.find('span').text()).toBe('···');
    stepForwardInTime(1);
    expect(testSubject.find('span').text()).toBe('····');
    stepForwardInTime(1);
    expect(testSubject.find('span').text()).toBe('·····');
    stepForwardInTime(1);
    expect(testSubject.find('span').text()).toBe('····');
    stepForwardInTime(1);
    expect(testSubject.find('span').text()).toBe('···');
    stepForwardInTime(1);
    expect(testSubject.find('span').text()).toBe('··');
    stepForwardInTime(1);
    expect(testSubject.find('span').text()).toBe('·');
    stepForwardInTime(1);
    expect(testSubject.find('span').text()).toBe('··');
  });

  it('should add custom indicator each time custom default timeout passes', () => {
    const stepForwardInTime = (steps = 10) => {
      act(() => {
        jest.advanceTimersToNextTimer(steps);
        testSubject.update();
      });
    };
    const testSubject = mount(<TestComponent indicator={'b'} timeout={3} />);
    expect(testSubject.find('span').text()).toBe('');
    stepForwardInTime(6);
    expect(testSubject.find('span').text()).toBe('b');
    stepForwardInTime(3);
    expect(testSubject.find('span').text()).toBe('bb');
  });
});
