class Rectangle {
    constructor(length, breadth) {
        this.length = length;
        this.breadth = breadth;
    }

    area() {
        return this.length * this.breadth
    }

    perimeter() {
        return 2 * (this.length * this.breadth)
    }
}

let rect1 = new Rectangle(5, 3)
let rect2 = new Rectangle(9, 6)

console.log(`Perimeter of Rectangle 1: ${rect1.perimeter()}`)
console.log(`Area of Rectangle 1: ${rect1.area()}`)

console.log(`Perimeter of Rectangle 2: ${rect2.perimeter()}`)
console.log(`Area of Rectangle 2: ${rect2.area()}`)