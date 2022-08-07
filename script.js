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

console.log(myLibrary);