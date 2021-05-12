const Handlebars = require("handlebars")
const fs = require("fs")

function teamBuilder(data) {
    console.log(fs.readFileSync('./src/employees.handlebars', {encoding: "utf8"}))
    const template = Handlebars.compile(fs.readFileSync('./src/employees.handlebars', {encoding: "utf8"}));
    return template(data);

}

module.exports = teamBuilder;