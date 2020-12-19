const inquirer = require('inquirer');
const mysql = require('mysql2/promise');
const cTable = require('console.table');
const questions = require("./lib/Questions");

let continueBool = true;

//create main menu function
const openMainMenu = async () => {

};

//create view all departments function
const viewAllDepartments = async function() {

};

//create view all roles function
const viewAllroles = async function() {

};

//create view all employees function
const viewAllEmployees = async function() {

};

//create add functions for : department, role, employee
const addDepartment = async function() {

};

const addRole = async function() {

};

const addEmployee = async function() {

};

//create an update employee role function
const updateEmployeeRole = async function() {

};

//main program call function
 const programRun = async function() {
    const dbConnect = mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "",
    })
    while (continueBool){
        let decision = await inquirer.prompt(questions.mainMenu);
        switch(decision.mainSelect){
            case "View all Departments":
                break;
            case "View all Roles":
                break;
            case "View all Employees":
                break;
            case "Add a Department":
                break;
            case "Add a Role":
                break;
            case "Add an Employee":
                break;
            case "Update an Employee Role":
                updateEmployeeRole();
                break;
            case "Exit":
                continueBool = false;
                break;            
        }
    }
 };