const Employee = require("../lib/employee");

class Manager extends Employee {
    constructor (officeNumber) {
        super()
        this.officeNumber = officeNumber;
    }
    role = "Manager"
}

module.exports = Manager