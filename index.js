// 
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [];

//
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

//
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log('Your readme.md is being generated...');
        writeToFile("README.md", generateMarkdown(answers));
        console.log('Your readme.md has been generated!');
      });
}

// Function call to initialize app
init();
