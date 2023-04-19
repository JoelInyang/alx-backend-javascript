export default function createIteratorObject(report) {
  let employees = [];

  // loop through each department
  for (const department of Object.values(report)) {
    // loop through each employee in the department
    for (const employee of department.employees) {
      employees.push(employee);
    }
  }

  // return the iterator
  return employees[Symbol.iterator]();
}
