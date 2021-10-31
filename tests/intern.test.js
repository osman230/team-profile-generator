const { TestWatcher } = require('@jest/core');
const Intern = require('../lib/intern');

test('makes an intern profile', () => {
    const intern = new Intern('Leslie Williams', '2222', 'leslie@gmail.com', 'UofM');
    expect(intern.name).toBe('Leslie Williams');
    expect(intern.id).toBe('2222');
    expect(intern.email).toBe('leslie@gmail.com');
    expect(intern.school).toBe('UofM');

})