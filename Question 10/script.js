class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    totalPrice(quantity) {
        return this.price * quantity;
    }
}

class PersonalCareProduct extends Product {
    constructor(id, name, price, warranty) {
        super(id, name, price);
        this.warranty = warranty;
    }

    totalPrice(quantity) {
        return `${this.price * quantity} + ${this.warranty} years warranty`;
    }
}

let pcp1 = new PersonalCareProduct(569, "Chips", 20, 1)
console.log(pcp1.totalPrice(5))