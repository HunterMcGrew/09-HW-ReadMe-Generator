// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
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
        name: "projectTitle",
        message: "What is the Project Title?",

        // response: "string"
    },
    {
        type: "input",
        name: "description",
        message: "Describle the Project:",
        // response: "string"
    },
    {
        type: "input",
        name: "installation",
        message: "Installation Instructions:",
        // response: "string"
    },
    {
        type: "input",
        name: "usage",
        message: "Usage Information:",
        // response: "string"
    },
    {
        type: "input",
        name: "contribute",
        message: "Contribution Guidelines",
        // response: "string"
    },
    {
        type: "input",
        name: "test",
        message: "Test Instructions",
        // response: "string"
    }
]

// TODO: Create a function to write README file
function writeToFile(projectTitle, description, installation, usage, contribute, test) { // do i need filename?
    // use fs.writefile here
    fs.writeFile(README.md, data)
    // how do i use the markdown file here???
    `
    # ${projectTitle}

    ${description}

    ## Installation Instructions

    ${installation}

    ## Usage

    ${usage}

    ## Contributing

    ${contribute}

    ## Test

    ${test}

    `
        // maybe a rest??? 
        // maybe import markdown functions here?????????? <=
}

// TODO: Create a function to initialize app
function init() {
    // write inquirer prompt here 
    inquirer.prompt(questions)
    // call writeToFile inside my .then()
    // .then((data) => {
    //     writeToFile("README.md", data)
    .then((answers) => fs.writeFileSync("README.md", writeToFile(fileName, answers)))
    .then(() => console.log("Secessfully passed to writeToFile"))
    .catch((err) => console.log(err))
    
}
    // how to send answers from users into markdown functions?? 
    // pass answers to write to file here   (DATA)


// Function call to initialize app
init();
