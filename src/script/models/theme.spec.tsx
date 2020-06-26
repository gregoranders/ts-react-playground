import * as TestSubject from '@models/theme';

describe(`models/theme`, () => {
  const mockedSetItem = jest.fn();
  const mockedGetItem = jest.fn();

  beforeEach(() => {
    // This needs to be like this
    // https://github.com/facebook/jest/issues/6798#issuecomment-440988627
    window.localStorage.__proto__.getItem = mockedGetItem;
    window.localStorage.__proto__.setItem = mockedSetItem;
  });

  it('exports Theme enum', () => {
    expect(TestSubject.Theme).toBeDefined();
  });

  it('exports Atom', () => {
    expect(TestSubject.ThemeAtom).toBeDefined();
  });

  it('exports default', () => {
    expect(TestSubject.default).toBeDefined();
  });

  it('default and Atom are the same', () => {
    expect(TestSubject.default).toBe(TestSubject.ThemeAtom);
  });

  describe('loadTheme', () => {
    it('should be exported (testing)', () => {
      expect(TestSubject.loadTheme).toBeDefined();
    });

    it('should return THEME.LIGHT as default', () => {
      // eslint-disable-next-line unicorn/no-useless-undefined
      mockedGetItem.mockReturnValue(undefined);
      const theme = TestSubject.loadTheme();
      expect(theme).toBe(TestSubject.Theme.LIGHT);
    });

    it('should return stored theme', () => {
      mockedGetItem.mockReturnValue('1');
      const theme = TestSubject.loadTheme();
      expect(theme).toBe(TestSubject.Theme.DARK);
    });
  });

  describe('storeTheme', () => {
    it('should be exported', () => {
      expect(TestSubject.storeTheme).toBeDefined();
    });

    it('should write to localStore', () => {
      TestSubject.storeTheme(TestSubject.Theme.DARK);
      expect(mockedSetItem).toHaveBeenNthCalledWith(1, 'themeAtom', TestSubject.Theme.DARK.toString());
    });
  });
});
