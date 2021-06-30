const Employee = require('./Employee');

class Manager extends Employee {
    constructor(nameBasic, employeeBasic, emailBasic, officeManager) {
        super(nameBasic, employeeBasic, emailBasic);
        // this.role = 'Manager';
        this.officeManager = officeManager;
    }

    getRole() {
        return 'Manager';

    }

    getOfficeManager() {
        return this.officeManager;
    }

}

module.exports = Manager;