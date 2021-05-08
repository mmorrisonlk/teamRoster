const { describe, it } = require("@jest/globals");
const Employee = require("../lib/employee");
const Intern = require("../lib/intern");

describe("Intern class", () => {
    it("Get school should return the shcool of the Intern", () => {
        const kenobi = new Intern("name", "id", "email", "dummythiccU")
        expect(kenobi.getSchool()).toBe("dummythiccU")
    });

    it("Get role should return Intern", () => {
        const kenobi = new Intern()
        expect(kenobi.getRole()).toBe("Intern");
    });
});