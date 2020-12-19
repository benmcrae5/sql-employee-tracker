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

module.exports = { mainMenu };