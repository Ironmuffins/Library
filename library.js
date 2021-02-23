//Initial variables and test examples
let book1 = new Book('LOTR', 'J.R.R tolkein', '1000', 'yes');
let book2 = new Book('Homo Deus', 'Yuval Noah Harari', '575', 'yes');
let book3 = new Book('Pride and Prejudice', 'Somebody?', '750', 'no');
let myLibrary = [book1, book2, book3];

//Object constructor/Blueprint
function Book(bookName, author, pages, readStatus) {
    this.bookName = bookName
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
  if (document.querySelector('#bookName').value && document.querySelector('#author').value 
  && document.querySelector('#readStatus').value){
  newBookName = document.querySelector('#bookName').value;
  newAuthor = document.querySelector('#author').value;
  newPages = document.querySelector('#pages').value;
  newReadStatus = document.querySelector('#readStatus').value;
  let newBook = new Book(newBookName, newAuthor, newPages, newReadStatus);
  myLibrary.push(newBook);
  addBooktotable()
  document.getElementById("bookForm").reset();
  console.log(myLibrary);
  };
};

//Display Library
//const openLibrary = document.querySelector('#openLibrary');
//openLibrary.addEventListener('click', libraryDisplay);
//const libraryDisplayDiv = document.querySelector('.libraryDisplayDiv');
//function libraryDisplay() {
//   while (libraryDisplayDiv.firstChild) {
//     libraryDisplayDiv.removeChild(libraryDisplayDiv.firstChild)
//  };
//  for (let i = 0; i < myLibrary.length; i++) {
//    let bookItemDiv = document.createElement("div");
//    bookItemDiv.className = 'bookItemDiv';
//    bookItemDiv.id = "bookItemDiv" + [i];
//  bookItemDiv.innerText = (Object.values(myLibrary[i]));
//    libraryDisplayDiv.appendChild(bookItemDiv);
//    console.log('iterations');
//  };
//};

//Adding new book info to grid. Super messy and dumb, need a more efficient solution
const libraryDisplayDiv = document.querySelector('.libraryDisplayDiv');
function addBooktotable() {
  let bookItemDiv = document.createElement("div");
  bookItemDiv.className = 'griditem';
  libraryDisplayDiv.appendChild(bookItemDiv);
  bookItemDiv.innerText = newBookName;
  let bookItemDiv2 = document.createElement("div");
  bookItemDiv2.className = 'griditem';
  libraryDisplayDiv.appendChild(bookItemDiv2);
  bookItemDiv2.innerText = newAuthor;
  let bookItemDiv3 = document.createElement("div");
  bookItemDiv3.className = 'griditem';
  libraryDisplayDiv.appendChild(bookItemDiv3);
  bookItemDiv3.innerText = newPages;
  let bookItemDiv4 = document.createElement("div");
  bookItemDiv4.className = 'griditem';
  libraryDisplayDiv.appendChild(bookItemDiv4);
  bookItemDiv4.innerText = newReadStatus;
}