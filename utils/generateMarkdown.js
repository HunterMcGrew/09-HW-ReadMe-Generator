// function to generate body of ReadMe File

function generateMarkdown(answers) {
  var license = "";
  if (answers.license === "MIT") {
     license = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  }
  
  if (answers.license === "GPLv2") {
     license = "![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)";
  }

  if (answers.license === "Apache") {
     license = "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
  }
  if (answers.license === "BSD 3-clause") {
     license = "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)";
  };

  const markdown = `# ${answers.projectTitle}
  
  ${license}

  ${answers.description}

  ## Table of Contents

  + [Installation Instructions](#installation-instructions)
  + [Usage](#usage)
  + [Contributing](#contributing)
  + [Test](#test)
  + [License](#license)
  + [Questions](#questions)
  

  ## Installation Instructions

  ${answers.installation}

  ## Usage

  ${answers.usage}

  ## Contributing

  ${answers.contribute}

  ## Test

  ${answers.test}

  ## License

  ${license}

  ## Questions

  My GitHub: <https://github.com/${answers.github}/>

  If you have any additional questions, feel free to contact me by email: <${answers.email}>
`;
return markdown;
}

// export function
module.exports = generateMarkdown;
