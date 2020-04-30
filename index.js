
const inquirer = require("inquirer");
const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");
//fs

const questions = [
    {
        type: "input",
        message: "What is your GitHub username? ",
        name: "username"
    },
    {
        type: "input",
        message: "Project Name: ",
        name: "projectName"
    },
    {
        type: "input",
        name: "description",
        message: "description: "
    },
    {
        type: "input",
        message: "Table of Contents: ",
        name: "tableOfCont"
    },
    {
        type: "input",
        name: "installation",
        message: "Installation: "
    },
    {
        type: "input",
        message: "Usage: ",
        name: "usage"
    },
    {
        type: "input",
        message: "License: ",
        name: "license"
    },
    {
        type: "input",
        message: "Contributing: ",
        name: "contributing"
    },
    {
        type: "input",
        message: "Tests: ",
        name: "tests"
    },
    {
        type: "input",
        message: "Questions: ",
        name: "questions"
    }
];
function writeToFile(fileName, data) {
    //fs
}

async function init() {
    const answers = await inquirer.prompt(questions);
    // console.log(answers)
    api.getUser(answers.username);
}

init();