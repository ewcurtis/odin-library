let myLibrary = [];

const bookBtn = document.querySelector("#add-book");
const body = document.querySelector("body");

//Form properties
const form = document.querySelector(".popup-form");
const ftitle = document.querySelector("#title");
const fauthor = document.querySelector("#author")
const fpages = document.querySelector("#pages");
const fread = document.querySelector("#read");
const newBook = document.querySelector("#new-book");
const cancelBook = document.querySelector("#cancel-book")

function Book(title, author, pages, read=false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    
}

bookBtn.addEventListener("click", e => {
    form.style.cssText = "display: block";
    body.setAttribute("class", "background");

});

newBook.addEventListener("click", e => {
    form.style.cssText = "display: none";
    body.removeAttribute("class", "background");
    ftitle.value = "";
    fauthor.value = "";
    fpages.value = "";
    fread.checked = false;
});

cancelBook.addEventListener("click", e => {
    form.style.cssText = "display: none";
    body.removeAttribute("class", "background");
    ftitle.value = "";
    fauthor.value = "";
    fpages.value = "";
    fread.checked = false;
});

const b1 = new Book("The Hobbit", "J.R.R. Tolkien", 163);

console.log(`Title: ${b1.title} Author: ${b1.author} Pages: ${b1.pages} Read: ${b1.read}`);