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
                console.log("\nPlease enter a valid Project Title.");
            }
        }
    },
    {
        type: "input",
        message: "Describle the Project:",
        name: "description",
        validate: (answer) => {
            if (answer.length < 1) {
                console.log("\nPlease enter a valid Project Description.");
            }
        }
    },
    {
        type: "input",
        message: "Installation Instructions:",
        name: "installation",
        validate: (answer) => {
            if (answer.length < 1) {
                console.log("\nPlease enter valid Installation Instructions.");
            }
        }
    },
    {
        type: "input",
        message: "Usage Information:",
        name: "usage",
        validate: (answer) => {
            if (answer.length < 1) {
                console.log("\nPlease give Usage Information.");
            }
        }
    },
    {
        type: "input",
        message: "Contribution Guidelines",
        name: "contribute",
        validate: (answer) => {
            if (answer.length < 1) {
                console.log("\nPlease enter a valid response.");
            }
        }
    },
    {
        type: "input",
        message: "Test Instructions",
        name: "test",
        validate: (answer) => {
            if (answer.length < 1) {
                console.log("\nPlease enter Testing Instructions.");
            }
        }
    }
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) { // do i need filename?
    // use fs.writefile here
    fs.writeFile(filename, data, err => {
        if (err) {return console.log(err);}
    })

        // maybe a rest??? 
        // maybe import markdown functions here?????????? <=
}

// TODO: Create a function to initialize app
function init() {
    // write inquirer prompt here 
    const answers = inquirer.prompt(questions)
    // call writeToFile inside my .then()
    // .then((data) => {
    //     writeToFile("README.md", data)
    .then((answers) => fs.writeFileSync("README.md", generateMarkdown(answers)))
    // .then(() => writeFileAsync("README.md", markdown))
    // .then(() => writeToFile())
    .catch((err) => console.log(err));
    
}
    // how to send answers from users into markdown functions?? 
    // pass answers to write to file here   (DATA)

// Function call to initialize app
init();
