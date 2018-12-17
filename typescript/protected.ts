//protected modifier
class Employee {
    protected  empName: string;
    constructor(name: string) {
        this.empName = name;
    }
    salary(salary: number = 10000) {
        console.log('Hello, ' + this.empName + ' Your Salary -' + salary);
    }
}
class Employer extends Employee {
    private department: string;

    constructor(empName: string, department: string) {
        super(empName);
        this.department = department;
    }

    salary(salary = 20000) {
        super.salary(salary);
    }
}

let empSal = new Employer("Anil", "IT");
console.log(empSal.salary());
console.log(empSal.empName); //error- the property 'empName' is protected and only accesible within the class 'Employee' and its child class.
