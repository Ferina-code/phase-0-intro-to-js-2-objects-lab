const employee = {}
function updateEmployeeWithKeyAndValue(employees, key, value) {

    return Object.assign({}, employees, { [key]: value });
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;

    return employee;


}
function deleteFromEmployeeByKey(employee, key) {
    const Same = Object.assign({}, employee);
    delete Same[key];

    return Same;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    Object.assign({}, employee);
    delete employee[key];

    return employee;
}