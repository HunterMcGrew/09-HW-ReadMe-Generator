// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

// Steps to Solve
    // 1. User answers questions
    // 2. Pass answers in the .then()
    // 3. Hand offf to Generate Markdown to create MD syntax
    // 4. pass MD to writeToFile

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the Project Title?",
        name: "projectTitle",
        validate: (answer) => {
            if (answer.length < 1) {
                return console.log("\n\nPlease enter a valid Project Title.\n");
            }
            return true;
        }
    },
    {
        type: "input",
        message: "Describle the Project:",
        name: "description",
        validate: (answer) => {
            if (answer.length < 1) {
                return console.log("\n\nPlease enter a valid Project Description.\n");
            }
            return true;
        }
    },
    {
        type: "input",
        message: "Installation Instructions:",
        name: "installation",
        validate: (answer) => {
            if (answer.length < 1) {
                return console.log("\n\nPlease enter valid Installation Instructions.\n");
            }
            return true;
        }
    },
    {
        type: "input",
        message: "Usage Information:",
        name: "usage",
        validate: (answer) => {
            if (answer.length < 1) {
                return console.log("\n\nPlease give Usage Information.\n");
            }
            return true;
        }
    },
    {
        type: "input",
        message: "Contribution Guidelines:",
        name: "contribute",
        validate: (answer) => {
            if (answer.length < 1) {
                return console.log("\n\nPlease enter a valid response.\n");
            }
            return true;
        }
    },
    {
        type: "input",
        message: "Test Instructions:",
        name: "test",
        validate: (answer) => {
            if (answer.length < 1) {
                return console.log("\n\nPlease enter Testing Instructions.\n");
            }
            return true;
        }
    },
    {
        type: "input",
        message: "Please enter your email address:",
        name: "email",
        validate: (answer) => {
            if (answer.length < 1) {
                return console.log("\n\nPlease enter a valid email address.");
            }
            return true;
        }
    },
    {
        type: "input",
        message: "What is your GitHub Username?",
        name: "github",
        validate: (answer) => {
            if (answer.length < 1) {
                return console.log("\n\nPlease enter a valid GitHub username.\n");
            }
            return true;
        }
    },
    {
        type: "list",
        message: "What license are you using for your project?",
        choices: ["MIT", "GPLv2", "Apache", "GPLv3", "BSD 3-clause\n"],
        name: "license"
    }
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    // use fs.writefile here
    fs.writeFile(filename, data, err => {
        if (err) {return console.log(err);}
    })
}

// TODO: Create a function to initialize app
function init() {
    // write inquirer prompt here 
    const answers = inquirer.prompt(questions)
    .then((answers) => fs.writeFileSync("README.md", generateMarkdown(answers)))
    .catch((err) => console.log(err));
}

// Function call to initialize app
init();
