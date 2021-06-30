const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(nameBasic, employeeBasic, emailBasic, githubEngineer) {
        super(nameBasic, employeeBasic, emailBasic);
        this.githubEngineer = githubEngineer;
    }

    getRole() {
        return 'Engineer';

    }

    getGithubEngineer() {
        return this.githubEngineer;
    }

}

module.exports = Engineer;