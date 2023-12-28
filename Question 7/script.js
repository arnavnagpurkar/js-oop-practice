class Book {
    constructor(title, author, publicationYear) {
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
    }

    details() {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Publication Year: ${this.publicationYear}`);
    }
}

class Ebook extends Book {
    constructor(title, author, publicationYear, price) {
        super(title, author, publicationYear);
        this.price = price;
    }

    details() {
        super.details();
        console.log(`Price: ${this.price}`)
    }
}

let ebook1 = new Ebook("JS OOP Mastery", "Arnav Nagpurkar", 2023, 600);
ebook1.details();