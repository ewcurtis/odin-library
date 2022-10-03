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
    let book = new Book(ftitle.value, fauthor.value, fpages.value, fread.checked);
        myLibrary.push(book);

}

//Displays all books in html dashboard
function displayLibrary() {

}

//Generates book in html dashboard
function displayBook() {

}

//Removes book from myLibrary and html Dashboard
function removeBook() {

}

bookBtn.addEventListener("click", e => {
    form.style.cssText = "display: block";
    body.setAttribute("class", "background");

});

//Creates new book and adds it to the dashboard in html and the myLibrary array in js
newBook.addEventListener("click", e => {
    if (ftitle.checkValidity() && fauthor.checkValidity() && fpages.checkValidity()) {
        addBookToLibrary();
        form.style.cssText = "display: none";
        body.removeAttribute("class", "background");
        ftitle.value = "";
        fauthor.value = "";
        fpages.value = "";
        fread.checked = false;
    } else {
        fpages.reportValidity();
        fauthor.reportValidity();
        ftitle.reportValidity();
        
    }

});

//cancels creation of a new book
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