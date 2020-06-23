import React, { act, create, mount } from '@app/testUtils';

import * as TestSubject from '@atoms/button';

describe(`${TestSubject.Button.displayName}`, () => {
  it('exports default', () => {
    expect(TestSubject.default).toBeDefined();
  });

  const TestComponent = TestSubject.default;

  const OnClick = jest.fn();

  afterEach(() => {
    OnClick.mockReset();
  });

  it('snapshot', (): void => {
    const snapshot = create(<TestComponent onClick={OnClick} />);
    snapshot.toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  it('mount', () => {
    const testSubject = mount(<TestComponent onClick={OnClick} />);
    expect(testSubject.text()).toBe('Button');
  });

  describe('click', () => {
    const spy = jest.spyOn(console, 'log').mockImplementation();

    afterEach(() => spy.mockRestore());

    it('should invoke default onClick handler [console.log(event)]', () => {
      const testSubject = mount(<TestComponent>Test</TestComponent>);
      expect(testSubject.text()).toBe('Test');

      act(() => {
        testSubject.find('button').simulate('click');
      });
      expect(spy).toBeCalledTimes(1);
    });

    it('should invoke provided onClick handler', () => {
      const testSubject = mount(<TestComponent onClick={OnClick} />);
      expect(testSubject.text()).toBe('Button');
      expect(OnClick.mock.calls.length).toEqual(0);
      act(() => {
        testSubject.find('button').simulate('click');
      });
      expect(OnClick).toBeCalledTimes(1);
    });
  });
});
