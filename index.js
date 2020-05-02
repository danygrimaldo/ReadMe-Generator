
const inquirer = require("inquirer");
const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const util = require("util");

const writeToFile = util.promisify(fs.writeFile);

const questions = [
    {
        type: "input",
        message: "What is your GitHub username? ",
        name: "username",
    },
    {
        type: "input",
        message: "Project Name: ",
        name: "title",
        default: "User inputs title here!"
    },
    {
        type: "input",
        name: "description",
        message: "description: ",
        default: "User inputs description here!"
    },
    {
        type: "input",
        message: "Table of Contents: ",
        name: "tableOfCont",
        default: "User inputs table of contents here!"
    },
    {
        type: "input",
        name: "installation",
        message: "Installation: ",
        default: "User inputs installation information here!"
    },
    {
        type: "input",
        message: "Usage: ",
        name: "usage",
        default: "User inputs usage info here!"
    },
    {
        type: "input",
        message: "License: ",
        name: "license",
        default: "User inputs licensing information here!"
    },
    {
        type: "input",
        message: "Contributing: ",
        name: "contributing",
        default: "User inputs all contributers here!"
    },
    {
        type: "input",
        message: "Tests: ",
        name: "tests",
        default: "User inputs test information here!"
    },
    {
        type: "input",
        message: "Questions: ",
        name: "questions",
        default: "User inputs any questions they have, here!"
    }
];

async function init() {
    try {
        const answers = await inquirer.prompt(questions);
        await api.getUser(answers.username);
        const ReadMe = generateMarkdown(answers);


        await writeToFile("ReadMe.md", ReadMe);
        console.log("Successfully generated a ReadMe!");
    } catch (err) {
        console.log(err);
    }
}

init();