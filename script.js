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
    cardTitle.classList.add('card-title');
    let cardAuthor = document.createElement('div');
    cardAuthor.textContent = `by ${this.author}`;
    let cardPage = document.createElement('div');
    cardPage.textContent = `${this.page} pages`;
    let cardStatus = document.createElement('button');
    cardStatus.textContent = `${this.status}`;
    cardStatus.classList.add('status-btn');

    if (cardStatus.textContent == 'Not Read'){
        cardStatus.style.backgroundColor = '#ca3433';
        cardStatus.style.color = '#d2bab5';
    }else if(cardStatus.textContent == 'Finished'){
        cardStatus.style.backgroundColor = '#6fcd6f';
        cardStatus.style.color = '#297b2a';
    }else{
        cardStatus.style.backgroundColor = '#a6d1ec';
        cardStatus.style.color = '#1d3676';
    }
    cardStatus.onclick = () => changeStatus(cardStatus);
    
    card.appendChild(cardCloseBtn);
    card.appendChild(cardTitle);
    card.appendChild(cardAuthor);
    card.appendChild(cardPage);
    card.appendChild(cardStatus);

    cardCloseBtn.onclick = () => removeCard(card, cardTitle);

    card.classList.add('card');
    return card;
}

//display the library
function displayLibrary(){
    for (const book of myLibrary){
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

//remove book card
function removeCard(card, bookTitle){
    bookDisplay.removeChild(card);
    let bookIndex = myLibrary.findIndex(book => `"${book.title}"` == bookTitle.textContent);
    myLibrary.splice(bookIndex,1);
}

//change status and color button
function changeStatus(readingStatus){
    let bookIndex = myLibrary.findIndex(book => book.status == readingStatus.textContent);
    console.log(bookIndex);
    console.log(myLibrary[bookIndex]);
    if (readingStatus.textContent == 'Not Read'){
        readingStatus.style.backgroundColor = '#a6d1ec';
        readingStatus.style.color = '#1d3676';
        readingStatus.innerHTML = 'Reading';
        myLibrary[bookIndex].status = readingStatus.innerHTML;
    }else if (readingStatus.textContent == 'Reading'){
        readingStatus.style.backgroundColor = '#6fcd6f';
        readingStatus.style.color = '#297b2a';
        readingStatus.innerHTML = 'Finished';
        myLibrary[bookIndex].status = readingStatus.innerHTML;
    }else{
        readingStatus.style.backgroundColor = '#ca3433';
        readingStatus.style.color = '#d2bab5';
        readingStatus.innerHTML = 'Not Read';
        myLibrary[bookIndex].status = readingStatus.innerHTML;
    }
    console.log(myLibrary[bookIndex]);
}