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

const book1 = new Book ('In Search of Lost Time','Marcel Proust','123','Reading');
book1.addBookToLibrary();
const book2 = new Book ('Ulysses','James Joyce', '234', 'Not Read');
book2.addBookToLibrary();
const book3 = new Book ('One Hundred Years of Solitude','Gabriel Garcia', '224', 'Finished');
book3.addBookToLibrary();
const book4 = new Book ('Hamlet','William Shakespeare', '224', 'Reading');
book4.addBookToLibrary();

const bookDisplay = document.getElementById('book-display');
let bookInfo = '';

Book.prototype.info = function(){
    let card = document.createElement('div');
    let cardCloseBtn = document.createElement('button');
    cardCloseBtn.textContent = 'x';
    cardCloseBtn.classList.add('card-close-btn');
    let cardTitle = document.createElement('div');
    cardTitle.textContent = `"${this.title}"`;
    let cardAuthor = document.createElement('div');
    cardAuthor.textContent = `by ${this.author}`;
    let cardPage = document.createElement('div');
    cardPage.textContent = `${this.page} pages`;
    let cardStatus = document.createElement('button');
    cardStatus.textContent = `${this.status}`;
    cardStatus.classList.add('status-btn');

    if (cardStatus.textContent == 'Not Read'){
        cardStatus.style.backgroundColor = 'red';
    }else if(cardStatus.textContent == 'Finished'){
        cardStatus.style.backgroundColor = 'green';
    }else{
        cardStatus.style.backgroundColor = 'blue';
    }
    cardStatus.onclick = () => changeStatus(cardStatus);
    
    card.appendChild(cardCloseBtn);
    card.appendChild(cardTitle);
    card.appendChild(cardAuthor);
    card.appendChild(cardPage);
    card.appendChild(cardStatus);

    cardCloseBtn.onclick = () => removeCard(cardTitle.textContent);

    card.classList.add('card');
    return card;
}
//let readingStatus = ['not read', 'reading', 'finished'];

function changeStatus(readingStatus){
    if (readingStatus.textContent == 'Not Read'){
        readingStatus.style.backgroundColor = 'blue';
        readingStatus.innerHTML = 'Reading'
    }else if (readingStatus.textContent == 'Reading'){
        readingStatus.style.backgroundColor = 'green';
        readingStatus.innerHTML = 'Finished';
    }else{
        readingStatus.style.backgroundColor = 'red';
        readingStatus.innerHTML = 'Not Read';
    }
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
    let newBook = new Book(inputTitle, inputAuthor, inputPage, inputStatus);
    newBook.addBookToLibrary();
    displayNewBook();
    closePopup(e);
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

function closePopup(e){
    e.preventDefault();
    overLay.classList.remove('overlay-active');
    popup.classList.remove('popup-open');
}