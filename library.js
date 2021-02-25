//Initial variables
let myLibrary = []; 

//Book examples for testing
//let book1 = new Book('LOTR', 'J.R.R tolkein', '1000', 'yes');
//let book2 = new Book('Homo Deus', 'Yuval Noah Harari', '575', 'yes');
//let book3 = new Book('Pride and Prejudice', 'Somebody?', '750', 'no');

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
  addBookToTable();
  document.getElementById("bookForm").reset();
  console.log(myLibrary);
  };
};

//A slightly less dumb loop to add book elements to table.
const libraryDisplayDiv = document.querySelector('.libraryDisplayDiv');
function addBookToTable() {
  while (libraryDisplayDiv.firstChild) {
  libraryDisplayDiv.removeChild(libraryDisplayDiv.firstChild)
  };
  for (let i = 0; i < myLibrary.length; i++) {
    let bookItemDiv = document.createElement("div");
    bookItemDiv.className = 'griditem';
    libraryDisplayDiv.appendChild(bookItemDiv);
    bookItemDiv.innerText = myLibrary[i].bookName;
    bookItemDiv = document.createElement("div");
    bookItemDiv.className = 'griditem';
    libraryDisplayDiv.appendChild(bookItemDiv);
    bookItemDiv.innerText = myLibrary[i].author;
    bookItemDiv = document.createElement("div");
    bookItemDiv.className = 'griditem';
    libraryDisplayDiv.appendChild(bookItemDiv);
    bookItemDiv.innerText = myLibrary[i].pages;
    bookItemDiv = document.createElement("div");
    bookItemDiv.className = 'griditem';
    libraryDisplayDiv.appendChild(bookItemDiv);
    bookItemDiv.innerText = myLibrary[i].readStatus;
    bookItemDiv = document.createElement("div");
    bookItemDiv.className = 'griditem';
    libraryDisplayDiv.appendChild(bookItemDiv);
    bookItemDiv.innerText = 'Remove';
  };
};




//myLibrary.forEach(element => console.log(element));

//  for (const property in myLibrary[0]) {
///    console.log(`${property}: ${myLibrary[0][property]}`);
//  }

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