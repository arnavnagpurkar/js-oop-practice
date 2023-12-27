class Vehicle {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    details() {
        console.log(`Model: ${this.model}`)
        console.log(`Year: ${this.year}`)
    }
}

class Car extends Vehicle {
    constructor(model, year, doors) {
        super(model, year);
        this.doors = doors;
    }

    details() {
        super.details()
        console.log(`Has ${this.doors} doors.`)
    }
}

let car1 = new Car("Tata Nexon", 2021, 4)
console.log("Car 1 Details:")
console.log(car1.details())

let car2 = new Car("Tata Tigor", 2017, 4)
console.log("Car 2 Details:")
console.log(car2.details())