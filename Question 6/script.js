class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    annualSalary() {
        return `Annual Salary: ${this.salary * 12}`;
    }
}

class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }

    department() {
        return this.department;
    }

    annualSalary() {
        let oldAnnualSalary = super.annualSalary();
        let bonus = 10;
        let newAnnualSalary = (bonus / 100) * oldAnnualSalary + oldAnnualSalary;
        return `New Annual Salary: ${newAnnualSalary}(Includes Bonus)`;
    }
}

let emp1 = new Employee("Arnav", 10000)
let manager1 = new Manager("Arnav Nagpurkar", 60000, "Head of JavaScript")
let manager2 = new Manager("Haris Ali Khan", 30000, "Head of Python")

console.log("Employee 1:")
console.log(emp1.annualSalary())

console.log("Manager 1:")
console.log(manager1.annualSalary())

console.log("Manager 2:")
console.log(manager2.annualSalary())