// public modifiers
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.empName = name;
    }
    Employee.prototype.salary = function (salary) {
        if (salary === void 0) { salary = 10000; }
        console.log('Hello, ' + this.empName + ' Your Salary -' + salary);
    };
    return Employee;
}());
var empSal = new Employee("Anil");
console.log(empSal.salary());
console.log(empSal.salary(40000));
