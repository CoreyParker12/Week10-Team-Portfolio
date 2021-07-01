const Engineer = require('../lib/Engineer')

describe('Engineer', () => {
    it('Returns predefined values for engineer', () => {
        const test = new Engineer('Corey', '1', 'corey@corey.com', 'CoreyParker12');

        expect(test.getName()).toEqual('Corey');
        expect(test.getId()).toEqual('1');
        expect(test.getEmail()).toEqual('corey@corey.com');
        expect(test.getGithubEngineer()).toEqual('CoreyParker12');

        expect(test.getRole()).toEqual('Engineer');
    })
});