const employee = {
    name : "grace",
    streetAddress : "3 Walthum Road"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
return {
    ...employee, 
    [key]: value
}
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key]= value;
    return employee
}
function deleteFromEmployeeByKey(employee, name) {
    let newEmployee = {...employee}
    delete newEmployee.name
    return newEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name
    return employee
}

