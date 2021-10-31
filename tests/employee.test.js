const { TestWatcher } = require('@jest/core');
const Employee = require('../lib/employee');

test('makes a new employee', () => {
    const employee = new Employee('Jennifer Lawrence', '0000', 'jenlaw@gmail.com');
    expect(employee.name).toBe('Jennifer Lawrence');
    expect(employee.id).toBe('0000');
    expect(employee.email).toBe('jenlaw@gmail.com');

})