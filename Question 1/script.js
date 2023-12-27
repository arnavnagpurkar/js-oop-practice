class Person{
    constructor(name, age, country){
        this.name = name;
        this.age = age;
        this.country = country;
    }
    viewDetails(){
        console.log(`Name: ${this.name}`)
        console.log(`Age: ${this.age}`)
        console.log(`Country: ${this.country}`)
    }
}

let person1 = new Person("Arnav", "13", "India")
console.log("Details of Person 1:")
console.log(person1.viewDetails())

let person2 = new Person("Harry", "29", "India")
console.log("Details of Person 2:")
console.log(person2.viewDetails())