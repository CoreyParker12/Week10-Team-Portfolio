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

    getId() {
        return this.employeeBasic;
    }

    getEmail() {
        return this.emailBasic;
    }

}

module.exports = Employee;

