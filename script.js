let myLibrary = [];

const bookBtn = document.querySelector("#add-book");

function Book(title, author, pages, read=false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    
}

const b1 = new Book("The Hobbit", "J.R.R. Tolkien", 163);

console.log(`Title: ${b1.title} Author: ${b1.author} Pages: ${b1.pages} Read: ${b1.read}`);