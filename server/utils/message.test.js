const expect = require('expect');

const { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    const resultObj = generateMessage('Admin', 'Hey');

    expect(resultObj.from).toBe('Admin');
    expect(resultObj.text).toBe('Hey');
    expect(resultObj.createdAt).toBeA('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    const coords = {
      latitude: 29.9000498,
      longitude: -95.5806954
    };

    const from = 'Admin';
    const url = `https://www.google.com/maps?q=${coords.latitude},${
      coords.longitude
    }`;

    const resultObj = generateLocationMessage(
      'Admin',
      coords.latitude,
      coords.longitude
    );

    // console.log(resultObj);

    // expect(resultObj.from).toBe('Admin');
    // expect(resultObj.url).toBe(
    //   `https://www.google.com/maps?q=${coords.latitude},${coords.longitude}`
    // );
    expect(resultObj.createdAt).toBeA('number');
    expect(resultObj).toInclude({ from, url });
  });
});
