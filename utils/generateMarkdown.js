// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return "[![License: MIT](https://img.shields.io/badge/License-${License}-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `\n * [License](#License)\n`
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `\n ## License\n
  ${license}`
  } else {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Table of Contents
- [Project Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Username](#username)
- [Email](#email)
- [License](#license)

## Description
${data.description}

## Installation
${data.intallation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Username
${data.username}

## Email
${data.email}

## License
${data.license}

`;
}


module.exports = generateMarkdown;
