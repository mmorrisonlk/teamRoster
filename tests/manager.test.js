const { describe, it } = require("@jest/globals");
const Employee = require("../lib/employee");
const Manager = require("../lib/Manager");

describe("Manager class", () => {
    it("Get role should return Manager", () => {
        const kenobi = new Manager()
        expect(kenobi.getRole()).toBe("Manager");
    });
});