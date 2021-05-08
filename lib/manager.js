const Employee = require("../lib/employee");

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;
    }
    role = "Manager"
}

module.exports = Manager