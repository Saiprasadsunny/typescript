// private modifier
class Employee {
    private empName: string;
    constructor(name: string) {
        this.empName = name;
    }

    salary(salary: number = 10000) {
        console.log('Hello, ' + this.empName + ' Your Salary -' + salary);
    }
}

let emp = new Employee("Anil").empName; 
//error: property 'empName' is private and only accesible in the class 'Employee'.
