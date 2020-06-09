import * as TestSubject from './user';

describe(`models/user`, () => {
  it('exports default', () => {
    expect(TestSubject.UsersAtom).toBeDefined();
  });

  it('exports Atom', () => {
    expect(TestSubject.UsersAtom).toBeDefined();
  });

  it('exports Selector', () => {
    expect(TestSubject.UsersLength).toBeDefined();
  });
});
