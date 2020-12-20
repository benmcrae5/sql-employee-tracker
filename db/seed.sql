INSERT INTO department_table( dep_name )
VALUES ( "Dungeon Delvers");

INSERT INTO department_table( dep_name )
VALUES ( "Castle Keepers");


INSERT INTO role_table( title, salary, department_id)
VALUES ("Warrior", 25000, 1);

INSERT INTO role_table( title, salary, department_id)
VALUES ("Wizard", 150000, 1);

INSERT INTO role_table( title, salary, department_id)
VALUES ("Thief", 1000000, 1);

INSERT INTO role_table( title, salary, department_id)
VALUES ("Knight", 500000, 2);

INSERT INTO role_table( title, salary, department_id)
VALUES ("Advisor", 2000000, 2);


INSERT INTO employee_table( first_name, last_name, role_id, manager_id )
VALUES ( "Adam", "Zaszz", 5, 1);

INSERT INTO employee_table( first_name, last_name, role_id, manager_id )
VALUES ( "Billy", "Yelph", 4, 1);

INSERT INTO employee_table( first_name, last_name, role_id, manager_id )
VALUES ( "Cally", "Xinge", 4, 1);

INSERT INTO employee_table( first_name, last_name, role_id, manager_id )
VALUES ( "Damian", "Underwood", 1, 1);

INSERT INTO employee_table( first_name, last_name, role_id, manager_id )
VALUES ( "Emerette", "Taunder", 3, 1);

INSERT INTO employee_table( first_name, last_name, role_id, manager_id )
VALUES ( "Fey", "Smith", 2, 1);