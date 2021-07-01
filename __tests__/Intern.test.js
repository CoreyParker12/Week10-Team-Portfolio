const Intern = require('../lib/Intern')

describe('Intern', () => {
    it('Returns predefined values for intern', () => {
        const test = new Intern('Corey', '1', 'corey@corey.com', 'UGA');

        expect(test.getName()).toEqual('Corey');
        expect(test.getId()).toEqual('1');
        expect(test.getEmail()).toEqual('corey@corey.com');
        expect(test.getInternSchool()).toEqual('UGA');

        expect(test.getRole()).toEqual('Intern');
    })
});