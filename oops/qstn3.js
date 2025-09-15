class Library {
  // property
  bookDetails = {
    101: {
      bookId: 101,
      title: "JavaScript Basics",
      author: "John Doe",
      availableCopies: 3,
    },
    102: {
      bookId: 102,
      title: "Learn React",
      author: "Jane Smith",
      availableCopies: 5,
    },
    103: {
      bookId: 103,
      title: "Mastering Node.js",
      author: "David Wilson",
      availableCopies: 2,
    },
    104: {
      bookId: 104,
      title: "Angular for Beginners",
      author: "Sophia Lee",
      availableCopies: 4,
    },
  };

  // methods to implement:

  // 1. validateBook(bookId)  → check if book exists
  validateBook(bookId) {
    if (bookId in this.bookDetails) {
      console.log("book existing");
    } else {
      console.log("book not existing");
    }
  }

  // 2. borrowBook(bookId) → decrease availableCopies by 1 (if available)
  borrowBook(bookId) {
    if (bookId in this.bookDetails) {
      this.bookDetails[bookId].availableCopies =
        this.bookDetails[bookId].availableCopies - 1;
      console.log(this.bookDetails[bookId]);
    } else {
      console.log("book not found");
    }
  }

  // 3. returnBook(bookId) → increase availableCopies by 1
  returnBook(bookId) {
    if (bookId in this.bookDetails) {
      this.bookDetails[bookId].availableCopies =
        this.bookDetails[bookId].availableCopies + 1;
      console.log(this.bookDetails[bookId]);
    } else {
      console.log("book not found");
    }

    
}
// 4. checkAvailability(bookId) → display available copies
checkAvail(bookId){
    if(bookId in this.bookDetails){
        console.log(this.bookDetails[bookId].availableCopies)
    }else{
        console.log("book not found")
    }
  }
}
let obj = new Library();
obj.validateBook(101);
obj.borrowBook(102);
obj.returnBook(101);
obj.checkAvail(101)
