// private modifier
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
var emp = new Employee("Anil").empName;
//error: property 'empName' is private and only accesible in the class 'Employee'.
