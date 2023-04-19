export default function createIteratorObject(report) {
  let departments = Object.values(report);
  let employees = [];

  // Flatten the employee arrays of all departments
  departments.forEach(department => {
    employees.push(...department.employees);
  });

  let currentIndex = 0;

  return {
    next: function() {
      if (currentIndex < employees.length) {
        return { value: employees[currentIndex++], done: false };
      } else {
        return { done: true };
      }
    }
  };
}
