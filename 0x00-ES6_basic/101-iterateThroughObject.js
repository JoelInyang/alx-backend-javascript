export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = [];

  // Loop through each employee in the report
  for (const employee of reportWithIterator) {
    // Add the employee name to the employeeNames array
    employeeNames.push(employee.name);
  }

  // Join the employeeNames array into a string separated by |
  return employeeNames.join(' | ');
}

