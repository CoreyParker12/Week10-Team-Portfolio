const Employee = require('./Employee');

class Intern extends Employee {
    constructor(nameBasic, employeeBasic, emailBasic, internSchool) {
        super(nameBasic, employeeBasic, emailBasic);
        this.internSchool = internSchool;
    }

    getRole() {
        return 'Intern';

    }

    getInternSchool() {
        return this.internSchool;
    }

}

module.exports = Intern;