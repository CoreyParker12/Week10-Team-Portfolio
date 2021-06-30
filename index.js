// Required packages
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Array of questions to be passed to the user
const managerQuestions = () => {
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
            }
        ])
    .then((data) => {

        console.log(data)
        const nameBasic = data.name;
        const employeeBasic= data.id;
        const emailBasic = data.email;
        const officeManager = data.office;

        const newManager = new Manager (nameBasic, employeeBasic, emailBasic, officeManager);
        console.log(newManager)
        
        writeToFile('index.html', generateManagerHTML(newManager));


        const addAnother = () => {
            inquirer
                .prompt([
                {
                    type: 'confirm',
                    name: 'another',
                    message: 'Add employee?',
                }]).then((answers) => {
                    if (answers.another) {
                        return employeeQuestions()
                    } else {
                        writeToFile('index.html', generateClosingHTML());  
                    }
                })
        }

        addAnother();

        const employeeQuestions = () => {
            inquirer
                .prompt([
                    {
                        type: 'list',
                        name: 'job',
                        message: 'Engineer or intern?',
                        choices: ['Engineer', 'Intern']
                    },
                ]).then((data) => {
                    if (data.job === 'Engineer') {
                        return engineerQuestions()
                    } else {
                        return internQuestions()
                    }
                })
        }

        const engineerQuestions = () => {
            inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'engineerName',
                        message: 'What is the engineer\'s name?',
                    },
                    {
                        type: 'input',
                        name: 'engineerId',
                        message: 'What is the engineer\'s employee Id?',
                    },
                    {
                        type: 'input',
                        name: 'engineerEmail',
                        message: 'What is the engineer\'s email address?',
                    },
                    {
                        type: 'input',
                        name: 'engineerGithub',
                        message: 'What is the engineer\'s GitHub?',
                    }
                ]).then((data) => {

                    const nameEngineer = data.engineerName;
                    const employeeEngineer= data.engineerId;
                    const emailEngineer = data.engineerEmail;
                    const githubEngineer = data.engineerGithub;
            
                    const newEngineer = new Engineer (nameEngineer, employeeEngineer, emailEngineer, githubEngineer);
                    console.log(newEngineer)
                    
                    writeToFile('index.html', generateEngineerHTML(newEngineer));



                    addAnother();
                })
        }

        const internQuestions = () => {
            inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'internName',
                        message: 'What is the intern\'s name?',
                    },
                    {
                        type: 'input',
                        name: 'internId',
                        message: 'What is the intern\'s employee Id?',
                    },
                    {
                        type: 'input',
                        name: 'internEmail',
                        message: 'What is the intern\'s email address?',
                    },
                    {
                        type: 'input',
                        name: 'internSchool',
                        message: 'What is the intern\'s School?',
                    }
                ]).then((data) => {
                    console.log(data)

                    const nameIntern = data.internName;
                    const employeeIntern= data.internId;
                    const emailIntern = data.internEmail;
                    const githubIntern = data.internSchool;
            
                    const newIntern = new Intern (nameIntern, employeeIntern, emailIntern, githubIntern);
                    console.log(newIntern)
                    writeToFile('index.html', generateInternHTML(newIntern));
                    addAnother()
                })
        }
    })
}

// Writes README file
function writeToFile(fileName, data) {
    fs.appendFile(fileName, data, (err) => 
        err ? console.log(err) : console.log('')
    );
}

// Generates HTML

const generateManagerHTML = (data) => {
return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>

    <link rel="stylesheet" href="./style.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans">
</head>
<body>
<div class="flex-it">
    <div class="boxes"> 
        <h3>${data.nameBasic}</h3>    
        <h2>${data.getRole()}</h2>
        <p>${data.employeeBasic}</p>
        <p>${data.emailBasic}</p>
        <p>${data.getOfficeManager()}</p>
    </div>
`
}

const generateEngineerHTML = (data) => {
    return `
        <div class="boxes"> 
            <h3>${data.nameBasic}</h3>    
            <h2>${data.getRole()}</h2>
            <p>${data.employeeBasic}</p>
            <p>${data.emailBasic}</p>
            <p>${data.getGithubEngineer()}</p>
        </div>
    `
}

    const generateInternHTML = (data) => {
        return `
        <div class="boxes"> 
            <h3>${data.nameBasic}</h3>    
            <h2>${data.getRole()}</h2>
            <p>${data.employeeBasic}</p>
            <p>${data.emailBasic}</p>
            <p>${data.getInternSchool()}</p>
        </div>   
    `
}

        const generateClosingHTML = () => {
        return `
</div>    
</body>
</html>
            `
        }

// Initializes application upon calling 'node index.js'
managerQuestions();
