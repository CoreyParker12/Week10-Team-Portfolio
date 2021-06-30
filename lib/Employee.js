//const index = require('../index');

class Employee {
    constructor(nameBasic, employeeBasic, emailBasic) {
        this.role = 'Employee';
        this.nameBasic = nameBasic;
        this.employeeBasic = employeeBasic;
        this.emailBasic = emailBasic;
    }

    getRole() {
        return this.role;
    }

    getName() {
        return this.nameBasic;
    }

    getEmail() {
        return this.employeeBasic;
    }

    getId() {
        return this.emailBasic;
    }

}

module.exports = Employee;

