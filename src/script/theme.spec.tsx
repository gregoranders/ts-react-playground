import React, { RecoilRoot, create, mount } from '@app/testUtils';

import * as TestSubject from '@app/theme';
import ThemeAtom, { Theme } from '@models/theme';
import { MuiThemeProvider } from '@material-ui/core';

describe(`${TestSubject.ThemeProvider.displayName}`, () => {
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
    expect(testSubject.text()).toBe('ThemeProvider');
  });

  describe('themes', () => {
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
      expect(testSubject.find(MuiThemeProvider)).toHaveProp('theme', TestSubject.themeLight);
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
      expect(testSubject.find(MuiThemeProvider)).toHaveProp('theme', TestSubject.themeDark);
    });
  });
});
