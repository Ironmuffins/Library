function books(name, author, readstatus) {
    this.name = name
    this.author = author
    this.readstatus = readstatus
    this.bookinfo = function() {
      return(name + " by " + author + ". I have " + readstatus)
    }
  }

  const theHobbit = new books('The Hobbit', 'J.R.R. Tolkein', 'read it twice');
  const HarryPotter = new books('Harry Potter', 'J.K Rowling', "never read it");
  theHobbit.bookinfo();
  console.log(theHobbit.bookinfo());