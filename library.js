//Book examples for testing
let book1 = new Book('LOTR', 'J.R.R tolkein', '1000', 'yes');
let book2 = new Book('Homo Deus', 'Yuval Noah Harari', '575', 'yes');
let book3 = new Book('Pride and Prejudice', 'Jane Austen', '750', 'no');

//Initial global variables
let myLibrary = [book1, book2, book3]; 
let bookItemDiv;
let removeitem;

//Object constructor/Blueprint
function Book(bookName, author, pages, readStatus, remove) {
    this.bookName = bookName
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
    this.remove = remove
/*  this.bookinfo = function() {
  }
*/
};

//Add Book button
const addBook = document.querySelector('#addBook');
addBook.addEventListener('click', addBookToLibrary);
function addBookToLibrary() {
  if (document.querySelector('#bookName').value && document.querySelector('#author').value 
  && document.querySelector('#readStatus').value) {
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

//Loop to add book elements to table.
const libraryDisplayDiv = document.querySelector('.libraryDisplayDiv');
function addBookToTable() {
  while (libraryDisplayDiv.firstChild) {
  libraryDisplayDiv.removeChild(libraryDisplayDiv.firstChild)
  };
  myLibrary.forEach(function(bookitem, index) {
    addGridItem();
    bookItemDiv.id = "griditem" + index;
    bookItemDiv.innerText = bookitem.bookName;
    addGridItem();
    bookItemDiv.id = "griditem" + index;
    bookItemDiv.innerText = bookitem.author;
    addGridItem();
    bookItemDiv.id = "griditem" + index;
    bookItemDiv.innerText = bookitem.pages;
    addGridItem();
    bookItemDiv.id = "griditem" + index;
    bookItemDiv.innerText = bookitem.readStatus;
    bookItemDiv = document.createElement('BUTTON');
    bookItemDiv.className = 'griditem';
    libraryDisplayDiv.appendChild(bookItemDiv);
    bookItemDiv.id = "removeitem" + index;
    bookItemDiv.innerText = 'Remove';
   // bookItemDiv.onclick = "getID(this.id)"
    removeitem = document.querySelector('#removeitem' + index);
    removeitem.addEventListener('click', removeBook)
  });
};

// Add griditem
function addGridItem() {
  bookItemDiv = document.createElement("div");
  bookItemDiv.className = 'griditem';
  libraryDisplayDiv.appendChild(bookItemDiv);
};

//get remove book ID?
function getID(){
  console.log()
}
//Remove book
function removeBook(arrayindex) {
  //arrayindex = ???;

  console.log(indexOf(removeitem));
  myLibrary.splice(arrayindex, 1);
  console.log('remove item');
}

/*Display Library
const openLibrary = document.querySelector('#openLibrary');
openLibrary.addEventListener('click', libraryDisplay);
const libraryDisplayDiv = document.querySelector('.libraryDisplayDiv');
function libraryDisplay() {
   while (libraryDisplayDiv.firstChild) {
     libraryDisplayDiv.removeChild(libraryDisplayDiv.firstChild)
  };
  for (let i = 0; i < myLibrary.length; i++) {
    let bookItemDiv = document.createElement("div");
    bookItemDiv.className = 'bookItemDiv';
    bookItemDiv.id = "bookItemDiv" + [i];
  bookItemDiv.innerText = (Object.values(myLibrary[i]));
    libraryDisplayDiv.appendChild(bookItemDiv);
    console.log('iterations');
  };
};
*/