const { describe, it } = require("@jest/globals");
const Employee = require("../lib/employee");

describe("Employee class", () => {
    it("Get name should return the name of the employee", () => {
        const kenobi = new Employee("Kenobi", 1, "wan@gmail.com")
        expect(kenobi.getName()).toBe("Kenobi");
    });
    
    it("Get ID should return the ID of the employee", () => {
        const kenobi = new Employee("Kenobi", 1, "wan@gmail.com")
        expect(kenobi.getId(1)).toBe(1);
    });

    it("Get email should return the email of the employee", () => {
        const kenobi = new Employee("Kenobi", 1, "wan@gmail.com")
        expect(kenobi.getEmail()).toBe("wan@gmail.com");
    });

    it("Get role should return the role of the employee", () => {
        const kenobi = new Employee("Kenobi", 1, "wan@gmail.com")
        expect(kenobi.getRole()).toBe("Employee");
    });
});