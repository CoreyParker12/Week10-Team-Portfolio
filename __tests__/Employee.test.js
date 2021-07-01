const Employee = require('../lib/Employee')

describe('Employee', () => {
    it('Returns predefined values for employee', () => {
        const test = new Employee('Corey', '1', 'corey@corey.com');

        expect(test.getName()).toEqual('Corey');
        expect(test.getId()).toEqual('1');
        expect(test.getEmail()).toEqual('corey@corey.com');
        expect(test.getRole()).toEqual('Employee');

    })
});