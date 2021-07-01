const Manager = require('../lib/Manager')

describe('Manager', () => {
    it('Returns predefined values for manager', () => {
        const test = new Manager('Corey', '1', 'corey@corey.com', '1');

        expect(test.getName()).toEqual('Corey');
        expect(test.getId()).toEqual('1');
        expect(test.getEmail()).toEqual('corey@corey.com');
        expect(test.getOfficeManager()).toEqual('1');

        expect(test.getRole()).toEqual('Manager');
    })
});