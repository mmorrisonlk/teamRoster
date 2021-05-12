const inquirer = require("inquirer");
const fs = require('fs')
const teamBuilder = require('./src/teamhtml')

inquirer
  .prompt([
    {
        type: 'input',
        message: 'What is the employee\'s name?',
        name: 'employeeName',
    },
    {
        type: 'input',
        message: 'What is their employee ID?',
        name: 'employeeId'
    },
    {
        type: 'input',
        message: 'What is their email address?',
        name: 'employeeEmail',
    },
    {
        type: 'list',
        message: 'What role have they been hired for?',
        name: 'employeeRole',
        choices: ['Employee', 'Intern', 'Engineer', 'Manager']
    },
    {
        type: 'input',
        message: 'What office number has been assigned to this Manager?',
        name: 'officeNumber',
        when: (answers) => answers.employeeRole === 'Manager'
    },
    {
        type: 'input',
        message: 'What is the Engineer\'s github?',
        name: 'github',
        when: (answers) => answers.employeeRole === 'Engineer'
    },
    {
        type: 'input',
        message: 'What school is the intern from?',
        name: 'internSchool',
        when: (answers) => answers.employeeRole === 'Intern'
    },
  ])
  .then((data) => {
    fs.appendFile('employeeList.html', teamBuilder(data), (err) => err ? console.log(err) : console.log(data)
    );
  })