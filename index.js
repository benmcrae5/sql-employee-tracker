const inquirer = require('inquirer');
const mysql = require('mysql2/promise');
const cTable = require('console.table');
const questions = require("./lib/Questions");

let continueBool = true;

//create main menu function
const openMainMenu = async () => await inquirer.prompt(questions.mainMenu);

//create view all departments, roles, and employees function
const viewAllFrom = async (connection, tableName) => {
    console.log("Collecting information from " + tableName + "...\n");
    let [results, fields] = await connection.query(`SELECT * FROM ${tableName}`); 
    if (tableName === "employee_table"){
       [results, fields] = await connection.query(
            "SELECT \
            emp.id, \
            emp.first_name, \
            emp.last_name, \
            rol.title, \
            dep.dep_name department, \
            rol.salary, \
            CONCAT(manage.first_name, ' ', manage.last_name) AS Manager \
            FROM employee_table emp \
            JOIN role_table rol ON emp.role_id=rol.id \
            JOIN department_table dep ON rol.department_id=dep.id \
            JOIN employee_table manage ON emp.manager_id=manage.id"
       ) 
    }
    let table = cTable.getTable(results);

    console.log(table);
    return results;
};

//create add functions for : department, role, employee
const addInfo = async (connection, tableName) => {
    let answers = await askForInfo(connection, tableName);
    console.log("adding new info to " + tableName);
    const { results } = await connection.query(`INSERT INTO ${tableName} SET ?`,
    [ answers ]
    )
};

const askForInfo = async (connection, tableName) => {
    let prompts;
    let enumeration;
    let answers;
    switch (tableName){
        case "department_table":
            prompts = questions.departmentQs;         
            break;
        case "role_table":
            prompts = questions.roleQs;

            [results, fields] = await connection.query(
                "SELECT tab.dep_name, tab.id FROM department_table tab"
                );
            console.log(results);
            results.forEach(el => {
                let entry = {name: el.dep_name, value: el.id}
                prompts[2].choices.push(entry);
            })
            console.log(questions[2]);
            break;
        case "employee_table":
            prompts = questions.employeeQs;
            //gets list of roles for selection
            [results, fields] = await connection.query(
                "SELECT tab.id, tab.title, tab.salary, tab.department_id depId FROM role_table tab"
                );
            results.forEach(el => {
                let entry = {name: el.title, value: el.id};
                prompts[2].choices.push(entry);                
            });
            //gets list of employees for selection
            [results, fields] = await connection.query(
                "SELECT emp.first_name, emp.last_name, emp.id FROM employee_table emp"
                );
            results.forEach(el => {
                let entry = {name: el.first_name + " " + el.last_name, value: el.id};
                prompts[3].choices.push(entry);                
            });
            break;
    }
    console.log(prompts);
    answers = await inquirer.prompt(prompts);
    console.log(answers);
    return answers
}

//create an update employee role function
const updateEmployeeRole = async (connection) => {

};

//connect to database
const connect2db = async () => {
    const dbConnect = await mysql.createConnection({
        host: "localhost",
        port: "3306",
        user: "root",
        //this password was created specifically to be thrown away afterward
        //it is not used anywhere else
        password: "B3n4cc3ss@sql!",
        database: "employee_db",
    });
    console.log ("connected as id " + dbConnect.threadId);

    return dbConnect;
}

//main program call function
 const programRun = async () => {
    
    const dbConnection = await connect2db();

    while (continueBool){
        let selection = await openMainMenu();
        switch(selection.mainSelect){
            case "View all Departments":
                await viewAllFrom(dbConnection, "department_table");
                break;
            case "View all Roles":
                await viewAllFrom(dbConnection, "role_table");
                break;
            case "View all Employees":
                await viewAllFrom(dbConnection, "employee_table");
                break;
            case "Add a Department":
                await addInfo(dbConnection, "department_table");
                break;
            case "Add a Role":
                await addInfo(dbConnection, "role_table");
                break;
            case "Add an Employee":
                await addInfo(dbConnection, "employee_table");
                break;
            case "Update an Employee Role":
                await updateEmployeeRole(dbConnection, "employee_table");
                break;
            case "Exit":
                continueBool = false;
                break;            
        }
    }

    dbConnection.end();
 };

 programRun();