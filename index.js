// Required packages
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');

//const generateHTML = require('./lib/generateHTML');


// Array of questions to be passed to the user
const questions = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your name?',
            },
            {
                type: 'input',
                name: 'office',
                message: 'What is your office number?',
            },

        ])
    .then((answers) => {
        


        const employeeName = answers.name;
        const employeeOffice = answers.office;

        const newEmployee = new Employee (employeeName, employeeOffice);
        
        writeToFile('index.html', generateEmployeeHTML(newEmployee));
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
    ${data.name}
</body>
</html>`
}

// Initializes application upon calling 'node index.js'
questions();
