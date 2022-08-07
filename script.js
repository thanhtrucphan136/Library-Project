let myLibrary = [];

function Book(title, author, page, status){
    this.title = title;
    this.author = author;
    this.page = page;
    this.status = status;
}

Book.prototype.addBookToLibrary = function(){
    myLibrary.push(this);
}

const book1 = new Book ('book1','truc','23','read');
book1.addBookToLibrary();
const book2 = new Book ('book2','trung', '234', 'not read');
book2.addBookToLibrary();
const book3 = new Book ('book3','trung', '24', 'read');
book3.addBookToLibrary();

const bookDisplay = document.getElementById('book-display');
let bookInfo = '';

Book.prototype.info = function(){
    let card = document.createElement('div');
    card.textContent = `Title: ${this.title} Author: ${this.author} Page Number: ${this.page} Status: ${this.status}`;
    return card;
}

function displayBook(){
    for (const book of myLibrary){
        bookInfo = book.info();
        bookDisplay.appendChild(bookInfo);
    }
}

displayBook();

