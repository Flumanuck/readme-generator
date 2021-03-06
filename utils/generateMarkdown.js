// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "None") {
    return "";
  } else if (license == "MIT License") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license == "GNU AGPLv3") {
    return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
  } else if (license == "GNU GPLv3") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license == "GNU LGPLv3") {
    return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
  } else if (license == "Mozilla Public License 2.0") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else if (license == "Apache License 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license == "Boost Software License 1.0") {
    return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  } else if (license == "The Unlicense") {
    return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "None") {
    return "";
  } else if (license == "MIT License") {
    return "https://opensource.org/licenses/MIT";
  } else if (license == "GNU AGPLv3") {
    return "https://www.gnu.org/licenses/agpl-3.0";
  } else if (license == "GNU GPLv3") {
    return "https://www.gnu.org/licenses/gpl-3.0";
  } else if (license == "GNU LGPLv3") {
    return "https://www.gnu.org/licenses/lgpl-3.0";
  } else if (license == "Mozilla Public License 2.0") {
    return "https://opensource.org/licenses/MPL-2.0";
  } else if (license == "Apache License 2.0") {
    return "https://opensource.org/licenses/Apache-2.0";
  } else if (license == "Boost Software License 1.0") {
    return "https://www.boost.org/LICENSE_1_0.txt";
  } else if (license == "The Unlicense") {
    return "http://unlicense.org/";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "None") {
    return "";
  } else if (license == "MIT License") {
    return "";
  } else if (license == "GNU AGPLv3") {
    return "";
  } else if (license == "GNU GPLv3") {
    return "";
  } else if (license == "GNU LGPLv3") {
    return "";
  } else if (license == "Mozilla Public License 2.0") {
    return "";
  } else if (license == "Apache License 2.0") {
    return "";
  } else if (license == "Boost Software License 1.0") {
    return "";
  } else if (license == "The Unlicense") {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Test](#test)
* [License](#license)

## Description
${data.description}

## Installation
${data.installation}

## Usage 
${data.usage}

## Contributing
${data.contributing}

## Test
${data.test}

## License
${licenseBadge}
${licenseLink}
${licenseSection}
`;
}

module.exports = generateMarkdown;
