xport default function createEmployeesObject(departmentName = '', employees = []) {
  return {
    [departmentName]: [...employees],
  };
}
