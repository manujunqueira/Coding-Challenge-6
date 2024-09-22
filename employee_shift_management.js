// Task 1 - Create an Employees Array of Employee Objects

const employees = [
    {name: `John`, shifts: [{day: `Monday`, hours: 8}, {day: `Wednesday`, hours: 6}] },
    {name: `Sarah`, shifts: [{day: `Tuesday`, hours: 5}, {day: `Thursday`, hours: 7}] },
    {name: `Guimo`, shifts: [{day: `Tuesday`, hours: 7}] },
    {name: `Max`, shifts: [{day: `Friday`, hours: 8}] },
];

// Create array of employees

// Task 2 - Create a Function to Display Employee Shift Details

function displayEmployeeShifts(employees){
    console.log(`Employee: ${employees.name}`) //searches employee in the array and logs their name 

    employees.shifts.forEach(shifts => {
        console.log(`Day: ${shifts.day}, Hours: ${shifts.hours}`); //forEach method locates each employee's shifts, and then it will log their days and hours
    })
};

displayEmployeeShifts(employees[2]);