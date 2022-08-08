let myLibrary = [];

function Book(title, author, page, status){
    this.title = title;
    this.author = author;
    this.page = page;
    this.status = status;
}
//add book to the library
Book.prototype.addBookToLibrary = function(){
    myLibrary.push(this);
}

const book1 = new Book ('In Search of Lost Time','Marcel Proust','123','reading');
book1.addBookToLibrary();
const book2 = new Book ('Ulysses','James Joyce', '234', 'not read');
book2.addBookToLibrary();
const book3 = new Book ('One Hundred Years of Solitude','Gabriel Garcia', '224', 'finsihed');
book3.addBookToLibrary();
const book4 = new Book ('Hamlet','William Shakespeare', '224', 'reading');
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
//display the library
function displayLibrary(){
    for (const book of myLibrary){
        if (book.title )
        bookInfo = book.info();
        bookDisplay.appendChild(bookInfo);
    }
}
displayLibrary();

//get book infor from input
const submitBtn = document.getElementById('submit-btn').addEventListener('click', (e) =>{
    e.preventDefault();
    const inputTitle = document.getElementById('title').value;
    const inputAuthor = document.getElementById('author').value;
    const inputPage = document.getElementById('page').value;
    const inputStatus = document.getElementById('status').value;
    console.log('clicked');
    console.log(inputTitle);
    console.log(inputStatus);
    let newBook = new Book(inputTitle, inputAuthor, inputPage, inputStatus);
    console.log(newBook);
    newBook.addBookToLibrary();
    console.log(myLibrary);
    displayNewBook();
    closePopup();
    const form = document.querySelector('.form');
    form.reset();
});

//display newest book
function displayNewBook(){
    const lastIndex = myLibrary.length - 1
    const inputBook = myLibrary[lastIndex].info();
    bookDisplay.appendChild(inputBook);
}
//popup form for adding new book
const addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', openPopup);
const overLay = document.getElementById('overlay');

function openPopup(){
    const popup = document.getElementById('popup');
    popup.classList.add('popup-open');
    overLay.classList.add('overlay-active');
}

//close popup form
const xBtn = document.getElementById('x-btn');
xBtn.addEventListener('click', closePopup);

function closePopup(){
    overLay.classList.remove('overlay-active');
    popup.classList.remove('popup-open');
}