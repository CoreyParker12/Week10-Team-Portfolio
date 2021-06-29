const index = require('../index');


const testing = ()
class Employee {
    constructor(name, id, email) {
        this.role = 'Employee';
        this.name = name;
        this.email = email;
        this.id = id;
    }

    getRole() {
        return this.role;
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    getId() {
        return this.id;
    }

}

module.exports = Employee;

