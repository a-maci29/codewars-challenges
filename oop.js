//OOP practice:
let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
    return baseSalary + (overtime + rate);
}

//the above is function based and with many parameters, risks being overly complicated

let employee = {
    baseSalary: 30_000,
    overtime: 10,
    rate: 20,
    getWage: function() {
        return this.baseSalary + (this.overtime * this.rate);
    }
}
employee.getWage()

//the following is preferable, because it ~~encapsulates~~ the code block and does not rely on parameters being passed through the function. In practice, this means that information outside the function is not dependent on other information. Generally, the fewer parameters, the better, for more maintainable code.
