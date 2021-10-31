const { TestWatcher } = require('@jest/core');
const Engineer = require('../lib/engineer');

test('Make an engineer profile', () => {
    const engineer = new Engineer('Olivia Benson', '1111', 'livben@gmail.com', 'olivia@github.com');
    expect(engineer.name).toBe('Olivia Benson');
    expect(engineer.id).toBe('1111');
    expect(engineer.email).toBe('livben@gmail.com');
    expect(engineer.github).toBe('olivia@github.com');

})