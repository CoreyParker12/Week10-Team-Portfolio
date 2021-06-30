// Required packages
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');

// Array of questions to be passed to the user
const questions = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the manager\'s name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the manager\'s employee id?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the manager\'s email address?',
            },            
            {
                type: 'input',
                name: 'office',
                message: 'What is the manager\'s office number?',
            },
        ])
    .then((data) => {
        


        const nameBasic = data.name;
        const employeeBasic= data.id;
        const emailBasic = data.email;
        const officeManager = data.office;


        const newManager = new Manager (nameBasic, employeeBasic, emailBasic, officeManager);
        
        writeToFile('index.html', generateEmployeeHTML(newManager));
    });
}

// Writes README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
        err ? console.log(err) : console.log('Successfully created team!')
    );
}

// Generates HTML

const generateEmployeeHTML = (data) => {
return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    ${data.getRole()}
    ${data.nameBasic}
    ${data.employeeBasic}
    ${data.emailBasic}
    ${data.officeManager}
</body>
</html>`
}

// Initializes application upon calling 'node index.js'
questions();
