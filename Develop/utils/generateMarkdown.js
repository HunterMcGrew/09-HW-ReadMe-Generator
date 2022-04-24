// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(answers) {
  var license = "";
  if (answers.license === "MIT") {
    var license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
    return license;
  }
  
  if (answers.license === "GPLv2") {
    var license = "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]";
    return license;
  }

  if (answers.license === "Apache") {
    var license = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
    return license;
  }
  if (answers.license === "BSD 3-clause") {
    var license = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]";
    return license;
  }
};

// put the render license shit in generate markdown so it can share answers var

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  
  const markdown = `# ${answers.projectTitle}
  
  ${license}

  ${answers.description}

  ## Table of Contents

  [Installation Instructions](#Installation-Instructions)
  [Usage](#Usage)
  [Contributing](#Contributing)
  [Test](#Test)
  [Questions](#Questions)


  ## Installation Instructions

  ${answers.installation}

  ## Usage

  ${answers.usage}

  ## Contributing

  ${answers.contribute}

  ## Test

  ${answers.test}

  ## Questions

  My GitHub: <https://github.com/${answers.github}/>

  If you have any additional questions, feel free to contact me by email: <${answers.email}>
`;
return markdown;
}

module.exports = generateMarkdown;
