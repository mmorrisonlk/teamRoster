const { describe, it } = require("@jest/globals");
const Employee = require("../lib/employee");

describe("Employee class", () => {
    it("Get name should return the name of the employee", () => {
        expect(getName(1).tobe("Dan"));
    });
});