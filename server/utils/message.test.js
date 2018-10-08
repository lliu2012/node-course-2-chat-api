const expect = require('expect');

const { generateMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    const resultObj = generateMessage('Admin', 'Hey');

    expect(resultObj.from).toBe('Admin');
    expect(resultObj.text).toBe('Hey');
    expect(resultObj.createdAt).toBeA('number');
  });
});
