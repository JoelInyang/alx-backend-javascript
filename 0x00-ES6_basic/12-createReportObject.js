export default function createReportObject(employeesList) {
  // Create an empty object to store all employees by department
  const allEmployees = {};

  // Loop through the employeesList and group employees by department
  for (const employee of employeesList) {
    if (!allEmployees[employee.department]) {
      allEmployees[employee.department] = [employee.name];
    } else {
      allEmployees[employee.department].push(employee.name);
    }
  }

  // Return the report object with allEmployees and getNumberOfDepartments method
  return {
    allEmployees,
    getNumberOfDepartments: function() {
      return Object.keys(allEmployees).length;
    }
  };
}
