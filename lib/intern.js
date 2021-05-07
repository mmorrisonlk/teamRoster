const Employee = require("../lib/employee");

class Intern extends Employee {
    constructor (school) {
        super()
        this.school = school;
    }
    role = "Intern"
    getSchool() {
        return this.school;
    }
}

module.exports = Intern