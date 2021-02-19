//Initial variables
let book1 = new Book('LOTR', 'J.R.R tolkein', '1000', 'yes');
let book2 = new Book('Homo Deus', 'Yuval Noah Harari', '575', 'yes');
let book3 = new Book('Pride and Prejudice', 'Somebody?', '750', 'no');
let myLibrary = [book1, book2, book3];

//Object constructor/Blueprint
function Book(bookName, author, pages, readStatus) {
    this.bookNname = bookName
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
//  this.bookinfo = function() {
//
//  }
  };

//Add Book button
const addBook = document.querySelector('#addBook');
addBook.addEventListener('click', addBookToLibrary);
function addBookToLibrary() {
  newBookName = document.querySelector('#bookName').value;
  newAuthor = document.querySelector('#author').value;
  newPages = document.querySelector('#pages').value;
  newReadStatus = document.querySelector('#readStatus').value;
  let newBook = new Book(newBookName, newAuthor, newPages, newReadStatus);
  myLibrary.push(newBook);
  console.log(myLibrary);
};

//Display Library
const openLibrary = document.querySelector('#openLibrary');
openLibrary.addEventListener('click', libraryDisplay);
const libraryDisplayDiv = document.querySelector('.libraryDisplayDiv');
function libraryDisplay() {
  for (let i = 0; i < myLibrary.length; i++) {
    let bookItemDiv = document.createElement("div");
    bookItemDiv.className = 'bookItemDiv';
    bookItemDiv.id = "bookItemDiv" + [i];
    libraryDisplayDiv.appendChild(bookItemDiv);
    console.log('iterations');
}
}
