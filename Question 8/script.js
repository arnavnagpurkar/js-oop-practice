class Animal {
    constructor(species, sound) {
        this.species = species;
        this.sound = sound;
    }

    makeSound() {
        console.log(this.sound);
    }
}

class Dog extends Animal {
    constructor(species, sound, color) {
        super(species, sound);
        this.color = color;
    }

    makeSound(){
        super.makeSound();
        console.log(`Color: ${this.color}`);
    }
}

let dog1 = new Dog("German Shephard", "bhaw bhaw!", "black");
dog1.makeSound();