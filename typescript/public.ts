// public modifiers
class Employee {
    empName: string;
    constructor(name: string) {
        this.empName = name;
    }
 salary(salary: number = 10000) {
        console.log('Hello, ' + this.empName + ' Your Salary -' + salary);
    }
}
let empSal = new Employee("Anil");
console.log(empSal.salary());
console.log(empSal.salary(40000));
