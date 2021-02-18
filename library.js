let myLibrary = [];
let bookName;
let author;
let pages;
let readStatus;

function Book(bookName, author, pages, readStatus) {
    this.bookNname = bookName
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
    this.bookinfo = function() {

    }
  };

addBook = document.querySelector('#addBook');
addBook.addEventListener('click', addBookToLibrary)

function addBookToLibrary() {
  bookName = document.querySelector('#bookName').value;
  author = document.querySelector('#author').value;
  pages = document.querySelector('#pages').value;
  readStatus = document.querySelector('#readStatus').value;
  let newBook = new Book(bookName, author, pages, readStatus)
  console.log(newBook);
  myLibrary.push(newBook);
  console.log(myLibrary);
}