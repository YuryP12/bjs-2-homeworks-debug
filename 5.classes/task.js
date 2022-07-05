//Задача №1. Печатное издание

class PrintEditionItem {
    constructor (name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name; 
        this.releaseDate = releaseDate; 
        this.pagesCount = pagesCount; 
        this.state = state; 
        this.type = type;
    }

    fix() {
    this.state = this.state * 1.5;
    }

  set state(newStateOfPrint) {

    if(newStateOfPrint< 0) {
      this._state = 0;
    } 
    
    if(newStateOfPrint > 100) {
      this._state = 100;
    } else {
      this._state = newStateOfPrint;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type) {
        super(name, releaseDate, pagesCount, state = 100, type);
        this.type = "magazine";
    }
}
  
class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state = 100, type) {
        super(name, releaseDate, pagesCount, state = 100, type);
        this.type = "book";
        this.author = author;
    }
}
class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100, type) {
        super(author, name, releaseDate, pagesCount, state = 100, type);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100, type) {
        super(author, name, releaseDate, pagesCount, state = 100, type);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100, type) {
        super(author, name, releaseDate, pagesCount, state = 100, type);
        this.type = "detective";
    }
}

// Задача №2. Библиотека

class Library {
    constructor(name) {
      this.name = name;
      this.books = [];
    }
  
    addBook(book) {

    if (book._state >= 30) {
      this.books.push(book);
      }
    }
  
    findBookBy(type, value) {
      for(let i = 0; i < this.books.length; i++) {

        if (this.books[i][type] === value) {

          return this.books[i];
        }
      }

      return null;
    }
  
    giveBookByName(bookName) {
      for(let i = 0; i < this.books.length; i++) {

        if (this.books[i].name === bookName) {

          return  this.books.splice(i, 1)[0];
        }
      }

      return null;
    }
}
  