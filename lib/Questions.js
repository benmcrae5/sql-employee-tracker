const mainMenu = [
    {
        type: 'list',
        choices: ["View all Departments",
            "View all Roles",
            "View all Employees",
            "Add a Department",
            "Add a Role",
            "Add an Employee",
            "Update an Employee Role",
            "Exit"
        ],
        name: 'mainSelect',
        message: "What would you like to do: ",
        default: '',
    }
]

const departmentQs = [
    {
        type: "input",
        name: "dep_name",
        message: "Please enter the name of the department you would like to add: ",
    }
]

const roleQs = [
    {
        type: "input",
        name: "title",
        message: "Please enter the name of the role you would like to add: ",
    },
    {
        type: "input",
        name: "salary",
        message: "Please enter the salary for this role: ",
    },
    {
        type: 'list',
        choices: [ /* fill in options from db */],
        name: 'department_id',
        message: "which department does this role belong to? ",
        default: '',    }
]


const employeeQs = [
    {
        type: "input",
        name: "first_name",
        message: "Please enter the first name for this employee: ",
    },
    {
        type: "input",
        name: "last_name",
        message: "Please enter the last name for this employee: ",
    },
    {
        type: 'list',
        choices: [ /* fill in options from db */],
        name: 'role_id',
        message: "What is the role for this employee?",
        default: '',
    },
    {
        type: 'list',
        choices: [{name:"n/a", value: null}, /* fill in options from db */],
        name: 'manager_id',
        message: "who is this employee's manager?",
        default: '',
    }
]

const selectEmployee = [
    {
        type: 'list',
        choices: [ /* fill in options from db */],
        name: 'id',
        message: "Please select an employee: ",
    }
]

module.exports = { mainMenu, departmentQs, roleQs, employeeQs, selectEmployee };