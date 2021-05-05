const { describe, it } = require("@jest/globals");
const Employee = require("../lib/employee");

describe("Employee class", () => {
    it("Get name should return the name of the employee", () => {
        const kenobi = new Employee("Kenobi")
        expect(kenobi.getName(1)).toBe("Obi");
    });
});