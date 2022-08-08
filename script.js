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

const book1 = new Book ('book1sdfsadfsafsf','truc','23','read');
book1.addBookToLibrary();
const book2 = new Book ('book2asfasdfasdfsadfsdfasdfasfdasfsafasfsfdasfsafsf','trung', '234', 'not read');
book2.addBookToLibrary();
const book3 = new Book ('book3sdfdsafasdfafsadfssdfsadfsadfsdasfddsfsdfsd','trung', '24', 'read');
book3.addBookToLibrary();
const book4 = new Book ('book3sdfsdfsdsf','trung', '24', 'read');
book4.addBookToLibrary();

const bookDisplay = document.getElementById('book-display');
let bookInfo = '';

Book.prototype.info = function(){
    let card = document.createElement('div');
    let cardTitle = document.createElement('div');
    cardTitle.textContent = `"${this.title}"`;
    let cardAuthor = document.createElement('div');
    cardAuthor.textContent = `by ${this.author}`;
    let cardPage = document.createElement('div');
    cardPage.textContent = `${this.page} pages`;
    let cardStatus = document.createElement('div');
    cardStatus.textContent = `${this.status}`;
    card.appendChild(cardTitle);
    card.appendChild(cardAuthor);
    card.appendChild(cardPage);
    card.appendChild(cardStatus);
    card.classList.add('card');
    return card;
}

function displayBook(){
    for (const book of myLibrary){
        bookInfo = book.info();
        bookDisplay.appendChild(bookInfo);
    }
}

displayBook();

