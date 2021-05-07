const inquirer = require("inquirer");

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
    
    // switch (true) {
    //     case "Intern":
            
    //         break;
    
    //     default:
    //         break;
    // }
    // {
    //     type: 'input',
    //     message: 'Any usage restrictions for your project?',
    //     name: 'usage',
    // },
    // {
    //     type: 'input',
    //     message: 'Any guidelines for contributing to your project?',
    //     name: 'contribution',
    // },
    // {
    //     type: 'input',
    //     message: 'What tests will you be using?',
    //     name: 'testingInfo',
    // },
  ])
  .then((data) => {
    fs.writeFile('README.md', markyMarkdown(data), (err) => err ? console.log(err) : console.log('Success!')
    );
  })