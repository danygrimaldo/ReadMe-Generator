function generateMarkdown(data) {
  return `
# ${data.title}
### GitHub ID: ${data.username}

## Description: 
${data.description}

## Table of Contents:
* Installation
* Usage
* License
* Contributing
* Tests
* Questions
* ${data.tableOfCont}

## Installation:
${data.installation}

## Usage:
${data.usage}

## License:
${data.license}

## Contributing:
* ${data.contributing}

## Tests:
* ${data.tests}

## Questions:
* ${data.questions}


[![GitHub Release](https://img.shields.io/github/release/tterb/PlayMusic.svg?style=flat)]()


![GitHub Avatar Image](https://avatars.githubusercontent.com/${data.username})
`;
}

module.exports = generateMarkdown;
