const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('../team-profile-generator/src/generateHTML');


//team members
const Engineer = require('../team-profile-generator/lib/engineer');
const Intern = require('../team-profile-generator/lib/intern');
const Manager = require('../team-profile-generator/lib/manager');
const Employee = require('../team-profile-generator/lib/employee');
const { type } = require('os');
const { inherits } = require('util');
const teamMembers = [];

//add employees

function addEmployees() {
    inquirer.prompt([
    {   
        type: 'list',
        name: 'addEmployees',
        message: "Would you like to add employee's?",
        choices: ["Add an Engineer", "Add an Intern", "Add a Manager", "No employees to add"],    
    }])
        .then((response) => {
        if (response.addEmployees === "Add an Engineer") {
            addEngineer();
        }
        if (response.addEmployees === "Add an Intern") {
            addIntern();
        }
        if (response.addEmployees === "Add a Manager") {
            addManager();
        }
        else if (response.addEmployees == "No employees to add") {
            generatePage(teamMembers);
        }
        }  
    )};

//adding managers

function addManager() {
    inquirer.prompt([
     {
        type: 'input',
        name: 'name',
        message: "Please enter the manager's name:"    
     },
    {
        type: 'input',
        name: 'id',
        message: "Please enter the manager's ID number:"    
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter the manager's email:"    
    },
    {
        type: 'input',
        name: 'office',
        message: "Please enter the manager's office number:"    
    },
    ])
        .then((managerAnswer) => {
        let manager = new Manager(managerAnswer.name, managerAnswer.id, managerAnswer.email, managerAnswer.office)
        teamMembers.push(manager);
        addEmployees();
    })};

//adding engineers

function addEngineer() {
inquirer.prompt([
 {
    type: 'input',
    name: 'name',
    message: "Please enter the engineer's name:"    
 },
{
    type: 'input',
    name: 'id',
    message: "Please enter the engineer's ID number:"    
},
{
    type: 'input',
    name: 'email',
    message: "Please enter the engineer's email:"    
},
{
    type: 'input',
    name: 'github',
    message: "Please enter the engineer's github username:"    
},
])
    .then((engineerAnswer) => {
    let engineer = new Engineer(engineerAnswer.name, engineerAnswer.id, engineerAnswer.email, engineerAnswer.github)
    teamMembers.push(engineer);
    addEmployees();
})};

//adding interns

function addIntern() {
inquirer.prompt([
 {
    type: 'input',
    name: 'name',
    message: "Please enter the intern's name:"
 },
{
    type: 'input',
    name: 'id',
    message: "Please enter the intern's ID number:"    
},
{
    type: 'input',
    name: 'email',
    message: "Please enter the intern's email:"    
},
{
    type: 'input',
    name: 'school',
    message: "Please enter the intern's school:"    
},
])
    .then((internAnswer) => {
    let intern = new Intern(internAnswer.name, internAnswer.id, internAnswer.email, internAnswer.school)
    teamMembers.push(intern);
    addEmployees();
})};

function generatePage(teamMembers) {
    writeData = generateHTML(teamMembers)
    fs.writeFile('../team-profile-generator/dist/employees.html', writeData, err => {
    if (err) {
        throw err
     }
        else {
            console.log('success!!!');
        }
    });
};

addEmployees();

