const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const emailValidator = require('email-validator');

const OUTPUT_DIR = path.resolve(__dirname, "final");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/Render");
const Employee = require("./lib/Employee");

let team = [];
let managerAdd = true;

const questions = {
    Manager: [
        
    ]




}