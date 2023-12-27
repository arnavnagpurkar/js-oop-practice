class Shape {
    area() {
        throw ReferenceError("This method must be written in other subclasses");
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }
}

class Triangle extends Shape {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }

    area() {
        return 1 / 2 * this.base * this.height;
    }
}

// Checking (this will throw ReferenceError)
// let shape1 = new Shape();
// shape1.area()

let circle1 = new Circle(15)
console.log(`Area of circle1: ${circle1.area()}`)

let circle2 = new Circle(28)
console.log(`Area of circle2: ${circle2.area()}`)


let triangle1 = new Triangle(12, 16)
console.log(`Area of triangle1: ${triangle1.area()}`)

let triangle2 = new Triangle(18, 32)
console.log(`Area of triangle2: ${triangle2.area()}`)