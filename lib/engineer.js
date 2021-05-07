const Employee = require("../lib/employee");

class Engineer extends Employee {
    constructor (github) {
        super()
        this.github = github;
    }
    role = "Engineer"
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer