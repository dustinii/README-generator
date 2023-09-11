//
function renderLicenseBadge(license) {
  if (!license) {
    return ''
  }
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

//
function renderLicenseLink(license) {
  if (!license) {
    return ''
  }
  return `* [License](#license)`;
}

//
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  return `
## License

This project is licensed under the ${license} license.
  `;
}

function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

For any questions, please contact using the information below:

GitHub: [@${data.github}](https://github.com/${data.github})
Email: ${data.email}
  `;
}

module.exports = generateMarkdown;
