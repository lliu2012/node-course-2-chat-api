const expect = require('expect');

const { isRealString } = require('./validation');

// import
describe('isRealString', () => {
  it('should reject non-string value', () => {
    var isString = isRealString(false);

    expect(isString).toBe(false);

    var isString = isRealString(36);

    expect(isString).toBe(false);
  });

  it('should reject string with only spaces', () => {
    var isString = isRealString('      ');

    expect(isString).toBe(false);
  });

  it('should allow string with non-space characters', () => {
    var isString = isRealString(' test ');

    expect(isString).toBe(true);
  });
});
