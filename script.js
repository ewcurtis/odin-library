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
const cancelBook = document.querySelector("#cancel-book");
//dashboard
const dashboard = document.querySelector(".dashboard");

function Book(title, author, pages, read=false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let book = new Book(ftitle.value, fauthor.value, fpages.value, fread.checked);
        myLibrary.push(book);

        return book;

}

//Generates book in html dashboard
function displayBook(b) {
    const bookCard = document.createElement("div");
    bookCard.setAttribute("class", "book-card");
    //Delete button
    const deleteBook = document.createElement("button");
    deleteBook.setAttribute("id", "delete-book")
    deleteBook.textContent = "X";

    //Book Title
    const bookTitle = document.createElement("div");
    const titleP = document.createElement("p");
    titleP.textContent = b.title;

    bookTitle.appendChild(titleP);

    //Book Author
    const bookAuthor = document.createElement("div");
    const authorP = document.createElement("p");
    authorP.textContent = b.author;

    bookAuthor.appendChild(authorP);

    //Number of Pages
    const bookPages = document.createElement("div");
    const pagesH3 = document.createElement("h3");
    pagesH3.textContent = "Pages:";
    const pagesP = document.createElement("p");
    pagesP.textContent = b.pages;

    bookPages.appendChild(pagesH3);
    bookPages.appendChild(pagesP);


    //Whether the book has been read
    const bookRead = document.createElement("div");
    const readH3 = document.createElement("h3");
    readH3.textContent = "Status:"
    const readP = document.createElement("p");
    if (b.read) {
        readP.textContent = "Finished";
    } else {
        readP.textContent = "In Progress";
    }

    bookRead.appendChild(readH3);
    bookRead.appendChild(readP);

    //Append all sections to the card
    bookCard.appendChild(deleteBook);
    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);
    bookCard.appendChild(bookRead);

    //Append card to dashboard
    dashboard.appendChild(bookCard);
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
        let book = addBookToLibrary();
        displayBook(book);
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