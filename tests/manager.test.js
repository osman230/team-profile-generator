const { TestWatcher } = require('@jest/core');
const Manager = require('../lib/manager');

test('makes a manager profile', () => {
    const manager = new Manager('Benny James', '5555', 'benny@gmail.com', '32');
    expect(manager.name).toBe('Benny James');
    expect(manager.id).toBe('5555');
    expect(manager.email).toBe('benny@gmail.com');
    expect(manager.office).toBe('32');

})