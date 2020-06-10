import * as TestSubject from '@models/user';

describe(`models/user`, () => {
  it('exports generate', () => {
    expect(TestSubject.generate).toBeDefined();
  });

  it('exports generateAsync', () => {
    expect(TestSubject.generateAsync).toBeDefined();
  });

  it('exports default user', () => {
    expect(TestSubject.DefaultUser).toBeDefined();
  });

  it('exports prop-type', () => {
    expect(TestSubject.UserPropTypes).toBeDefined();
  });

  it('exports default', () => {
    expect(TestSubject.default).toStrictEqual(TestSubject.UsersAtom);
  });

  it('exports Atom', () => {
    expect(TestSubject.UsersAtom).toBeDefined();
  });

  it('exports Selector', () => {
    expect(TestSubject.UsersLength).toBeDefined();
  });

  it('generate default number of users', async () => {
    const result = TestSubject.generate();
    expect(result.length).toBe(100);
  });

  it('generate 2 users', async () => {
    const result = TestSubject.generate(2);
    expect(result.length).toBe(2);
  });

  it('generate 0 users', async () => {
    const result = TestSubject.generate(0);
    expect(result.length).toBe(0);
  });

  it('generate async default number of users', async () => {
    const result = await TestSubject.generateAsync();
    expect(result.length).toBe(100);
  });

  it('generate async 2 users', async () => {
    const result = await TestSubject.generateAsync(2);
    expect(result.length).toBe(2);
  });

  it('generate async 0 users', async () => {
    const result = await TestSubject.generateAsync(0);
    expect(result.length).toBe(0);
  });
});
