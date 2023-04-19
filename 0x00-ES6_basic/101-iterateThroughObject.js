export default function iterateThroughObject(reportWithIterator) {
  let employeeNames = [];

  let employeeIterator = reportWithIterator;
  let currentEmployee = employeeIterator.next();
  while (!currentEmployee.done) {
    employeeNames.push(currentEmployee.value.name);
    currentEmployee = employeeIterator.next();
  }

  return employeeNames.join(" | ");
}

