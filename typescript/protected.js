var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//protected modifier
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
var Employer = /** @class */ (function (_super) {
    __extends(Employer, _super);
    function Employer(empName, department) {
        var _this = _super.call(this, empName) || this;
        _this.department = department;
        return _this;
    }
    Employer.prototype.salary = function (salary) {
        if (salary === void 0) { salary = 20000; }
        _super.prototype.salary.call(this, salary);
    };
    return Employer;
}(Employee));
var empSal = new Employer("Anil", "IT");
console.log(empSal.salary());
console.log(empSal.empName); //error- the property 'empName' is protected and only accesible within the class 'Employee' and its child class.
