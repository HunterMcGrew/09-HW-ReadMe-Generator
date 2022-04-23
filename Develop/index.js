// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// Steps to Solve
    // 1. User answers questions
    // 2. Pass answers in the .then()
    // 3. Hand offf to Generate Markdown to create MD syntax
    // 4. pass MD to writeToFile

// TODO: Create an array of questions for user input
// const questions = [
//     "Project Title?",
//     "Description:",
//     "Installation:",
//     "Usage:",
//     "Contribution Guidelines:",
//     "Test Instructions:",
// ];
const questions = [
    {
        name: "project title",
        message: "What is the Project Title?",
        response: "string"
    },
    {
        name: "description",
        message: "Describle the Project:",
        response: "string"
    },
    {
        name: "installation",
        message: "Installation Instructions:",
        response: "string"
    },
    {
        name: "usage",
        message: "Usage Information:",
        response: "string"
    },
    {
        name: "contribute",
        message: "Contribution Guidelines",
        response: "string"
    },
    {
        name: "test",
        message: "Test Instructions",
        response: "string"
    },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // use fs.writefile here
    // how do i use the markdown file here???
        // maybe a rest??? 
        // maybe import markdown functions here?????????? <=
}

// TODO: Create a function to initialize app
function init() {
    // write inquirer prompt here 
    inquirer.prompt(questions);
    // call writeToFile inside my .then()
        // how to send answers from users into markdown functions?? 
    // pass answers to write to file here   (DATA)
}

// Function call to initialize app
init();
