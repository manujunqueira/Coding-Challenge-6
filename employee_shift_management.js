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


// Task 3 - Create a Function to Assign a New Shif

function assignShift(employeeName, day, hours) { //find employee by name
    let employee = employees.find(emp => emp.name === employeeName);

    if (!employee){
        console.log(`ERROR: Employee ${employeeName} not found`); // if employee name is not found, it logs a error message
        return;
    }

    const existingShift = employee.shifts.find(shift => shift.day === day); //see if employee is already assigned a shift for the day

    if(existingShift){
        console.log(`Employee ${employeeName} is already assigned for ${day}.`); // if the employee is already working on that day, it logs a message alerting
    } else {
        employee.shifts.push({ day: day, hours: hours}); // if the employee is free to work, it assigns the new shift to them and console a message for the new shift
        console.log(`New shift added: employee ${employeeName} was successfully assigned to work on ${day} for ${hours}.`);
    }
}

assignShift(`Max`, `Friday`, 6);
assignShift(`Jonh`, `Tuesday`, 8);


