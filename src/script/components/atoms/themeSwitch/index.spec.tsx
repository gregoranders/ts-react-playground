import React, { RecoilRoot, create, mount } from '@app/test-utils';

import { Switch } from '@material-ui/core';

import * as TestSubject from '@atoms/themeSwitch';

import ThemeAtom, { Theme } from '@models/theme';

Theme;
ThemeAtom;

describe(`${TestSubject.ThemeSwitch.displayName}`, () => {
  it('exports default', () => {
    expect(TestSubject.default).toBeDefined();
  });

  const TestComponent = TestSubject.default;

  const OnClick = jest.fn();

  afterEach(() => {
    OnClick.mockReset();
  });

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
    expect(testSubject.text()).toBe('');
  });

  it('click', () => {
    const testSubject = mount(
      <RecoilRoot>
        <TestComponent />
      </RecoilRoot>,
    );

    expect(testSubject.find('.Mui-checked')).toHaveLength(0);
    testSubject.find('input').simulate('click');
    expect(testSubject.find('.Mui-checked')).toHaveLength(5);

    expect(testSubject.find('.Mui-checked')).toHaveLength(5);
    testSubject.find('input').simulate('click');
    expect(testSubject.find('.Mui-checked')).toHaveLength(0);
  });

  describe('theme', () => {
    it('light', () => {
      const testSubject = mount(
        <RecoilRoot
          initializeState={({ set }) => {
            set(ThemeAtom, Theme.LIGHT);
          }}
        >
          <TestComponent />
        </RecoilRoot>,
      );
      // eslint-disable-next-line unicorn/no-fn-reference-in-iterator
      expect(testSubject.find(Switch)).toHaveProp('checked', false);
    });

    it('dark', () => {
      const testSubject = mount(
        <RecoilRoot
          initializeState={({ set }) => {
            set(ThemeAtom, Theme.DARK);
          }}
        >
          <TestComponent />
        </RecoilRoot>,
      );
      // eslint-disable-next-line unicorn/no-fn-reference-in-iterator
      expect(testSubject.find(Switch)).toHaveProp('checked', true);
    });
  });
});
