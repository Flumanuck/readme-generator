// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input (INQUIRER DOCUMENTATION)
const questions = [
  //Title
  {
    type: "input",
    name: "title",
    message: "What is your application called?",
  },
  //Description
  {
    type: "input",
    name: "description",
    message: "Please write a brief description of your application",
  },
  //Installation
  {
    type: "input",
    name: "installation",
    message: "How do you install this application?",
  },
  //Usage
  {
    type: "input",
    name: "usage",
    message: "How is the app supposed to be used?",
  },
  //Contributing
  {
    type: "input",
    name: "contributing",
    message: "How can someone contribute to the application?",
  },
  //Tests
  {
    type: "input",
    name: "test",
    message: "How do you run the tests for your application?",
  },
  //License
  {
    type: "list",
    name: "license",
    message: "What type of license do you want to use?",
    choices: [
      "MIT License",
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Mozilla Public License 2.0",
      "Apache License 2.0",
      "Boost Software License 1.0",
      "The Unlicense",
      "None",
    ],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Success!");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (data) {
    const readme = generateMarkdown(data);
    writeToFile("README.md", readme);
  });
}

// Function call to initialize app
init();
