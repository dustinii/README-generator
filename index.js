// required packages
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project's name?"
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project:"
    },
    {
        type: "input",
        name: "installation",
        message: "What command will install project dependencies?",
        default: 'npm i',
    },
    {
        type: "input",
        name: "usage",
        message: "What is this project's usage for?"
    },
    {
        type: "list",
        name: "license",
        message: "Choose the appropriate license for your project:",
        choices: [
            "MIT",
            "APACHE 2.0",
            "GPL 3.0",
            "BSD 3",
            "None"
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "How can others contribute to this project?",
        default: "Please contact me via email or GitHub for more information."
    },
    {
        type: "input",
        name: "tests",
        message: "Please provide the tests test command:",
        default: 'npm test',
    },
    {
        type: "input",
        name: "github",
        message: "Please enter your GitHub username:"
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email:"
    }
];

// write README file
function writeToFile(fileName, data) {
    const dir = "./its in here";

    // Check if directory exists and if not, create it
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }

    fs.writeFileSync(path.join(dir, fileName), data);
}

// initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log('Your readme.md is being generated...');
        writeToFile("README.md", generateMarkdown(answers));
        console.log('Your readme.md has been generated!');
    });
}

// Function call to initialize app
init();
