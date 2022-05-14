// required packages
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
// required exported module
const generateMarkdown = require("./utils/generateMarkdown");

// object array for user questions/data
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

// writes ReadMe file to FileSystem
function writeToFile(fileName, data) { 
    // use fs.writefile here
    fs.writeFile(filename, data, err => {
        if (err) {return console.log(err);}
    })
}

// function to perform all the functions needed in order to produce ReadMe file
function init() {
    // takes question array and grabs answers
    const answers = inquirer.prompt(questions)
    // takes answers from prompts, sends it through the generateMarkdown function, and outputs file in the "dist" folder as "README.md"
    .then((answers) => fs.writeFileSync("./dist/README.md", generateMarkdown(answers)))
    // if there are any errors, log it
    .catch((err) => console.log(err));
}

// Function call to initialize app upon starting index.js
init();
