const { describe, it } = require("@jest/globals");
const Employee = require("../lib/employee");
const Engineer = require("../lib/engineer");

describe("Engineer class", () => {
    it("Get github should return the github of the engineer", () => {
        const kenobi = new Engineer("yeet.git")
        expect(kenobi.getGithub()).toBe("yeet.git")
    });

    it("Get role should return engineer", () => {
        const kenobi = new Engineer()
        expect(kenobi.getRole()).toBe("Engineer");
    });
});