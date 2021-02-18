let myLibrary = [];

function Book(name, author, pages, readstatus) {
    this.name = name
    this.author = author
    this.pages = pages
    this.readstatus = readstatus
    this.bookinfo = function() {
     
    }
  };

function addBookToLibrary() {
  console.log('button pressed');
}

  
  const HarryPotter = new Book('Harry Potter', 'J.K Rowling', "never read it");
  //const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkein', '325', 'read it twice');
  //push

addBook = document.querySelector('#addBook');
addBook.addEventListener('click', addBookToLibrary)