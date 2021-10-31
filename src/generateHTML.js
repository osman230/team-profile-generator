//team members
const Employee = require('../lib/employee');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');
const Manager = require('../lib/manager');

// generate profiles

function generateProfiles(teamMembers) {
  let cards = [];
  for (let i = 0; i < teamMembers.length; i++) {
      const profiles = teamMembers[i];
      switch(profiles.getRole()) {
          case 'Engineer':
              const engineer = new Engineer(profiles.name, profiles.id, profiles.email, profiles.github);
              cards.push(addEngineerCard(engineer));
              break;
          case 'Intern':
              const intern = new Intern(profiles.name, profiles.id, profiles.email, profiles.school);
              cards.push(addInternCard(intern));
              break;
          case 'Manager':
              const manager = new Manager(profiles.name, profiles.id, profiles.email, profiles.office);
              cards.push(addManagerCard(manager));
              break;   
      }
  }
  return cards.join(``);
}


let addEngineerCard = (Engineer) => {
  return `
  <div class="card" style="width: 18rem">
    <div class='card-header'>
      <h3 class="card-title">${Engineer.getName()}</h3>
       <ul class="list-group list-group-flush">
      <li class="list-group-item">${Engineer.getRole()}</li>
      <li class="list-group-item">${Engineer.getId()}</li>
      <li class="list-group-item">${Engineer.getEmail()}</li>
      <li class="list-group-item">${Engineer.getGithub()}</li>
      </ul>
    </div>
  </div>
  `
};

let addInternCard = (Intern) => {
    return `
    <div class="card" style="width: 18rem">
      <div class='card-header'>
        <h3 class="card-title">${Intern.getName()}</h3>
         <ul class="list-group list-group-flush">
        <li class="list-group-item">${Intern.getRole()}</li>
        <li class="list-group-item">${Intern.getId()}</li>
        <li class="list-group-item">${Intern.getEmail()}</li>
        <li class="list-group-item">${Intern.getSchool()}</li>
        </ul>
      </div>
    </div>
    `
};

let addManagerCard = (Manager) => {
    return `
    <div class="card" style="width: 18rem">
      <div class='card-header'>
        <h3 class="card-title">${Manager.getName()}</h3>
         <ul class="list-group list-group-flush">
        <li class="list-group-item">${Manager.getRole()}</li>
        <li class="list-group-item">${Manager.getId()}</li>
        <li class="list-group-item">${Manager.getEmail()}</li>
        <li class="list-group-item">${Manager.getOffice()}</li>
        </ul>
      </div>
    </div>
    `
};

function generateHTML(teamMembers) {
    return `

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Employees</title>
    </head>
    <body>
    <div class="jumbotron bg-dark text-white">
      <div class="container">
        <h1 class="display-3 text-center">Employees</h1>
      </div>
    </div>
    <div class="d-flex flex-row flex-wrap justify-content-center">
    ${generateProfiles(teamMembers)}
  </div>
  </body>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
  </html>
        `
};

module.exports = generateHTML;
