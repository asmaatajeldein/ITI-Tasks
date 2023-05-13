function Book(title, numChapters, genre, author) {
    this.title = title;
    this.numOfChapters = numChapters;
    this.genre = genre;
    this.author = author;
}


function Box(w, h, l, m, content) {
    this.width = w || 0;
    this.height = h || 0;
    this.length = l || 0;
    this.material = m || "";
    
    var contentArr = [];

    // if the content was an array of books and the contentArr was empty
    if(content.constructor === Array) {
        contentArr = contentArr.concat(content);
    } else if (content.constructor === Book) {
        contentArr.append(content);
    }

    this.getContent = function() {
        return contentArr;
    }

    this.numOfBooks = function() {
        return contentArr.length;
    }
    
    // delete book from box
    this.deleteBook = function(titleOfBook) {
        contentArr.forEach(function(book, arrIndex, arr) {
            if(book.title !== titleOfBook) {
                throw(`${nameOfBook} was not found in Box.`);
            }
            arr.splice(arrIndex, 1);
        })
    }

    // delete book type from box
    this.deleteBookType = function(genreOfBook) {
        var numOfBooksDeleted = 0;
        contentArr.forEach(function(book, arrIndex, arr) {
            if(book.genre === genreOfBook) {
                arr.splice(arrIndex, 1);
                numOfBooksDeleted++;
            }
        })
        console.log(`${numOfBooksDeleted} books was found in the ${genreOfBook} genre and deleted.`);
    }

    // add book to content arr
    this.addBook = function (book) {
        if(book.constructor !== Book) {
            throw("book must be a Book object.")
        }

        contentArr.push(book);
        console.log("Book was added successfully.");
    }
}

Box.prototype.toString = function() {
    return `[Dimensions of Box]
    Width: ${this.width}cm,
    Height: ${this.height}cm,
    Material: ${this.material},
    Number of Books: ${this.numOfBooks()} 
    `
}

Box.prototype.valueOf = function() {
    return this.numOfBooks();
}

var book1 = new Book("1984", 23, "Dystopian", "George Orwell");
var book2 = new Book("Pride and Prejudice", 61, "Romance", "Jane Austen");
var book3 = new Book("To Kill a Mockingbird", 31, "Legal drama", "Harper Lee");
var book4 = new Book("The Great Gatsby", 9, "Literary", "F. Scott Fitzgerald");
var book5 = new Book("The Catcher in the Rye", 26, "Bildungsroman", "J.D. Salinger");
var book6 = new Book("The Lord of the Rings", 62, "Fantasy", "J.R.R. Tolkien");
var book7 = new Book("Harry Potter and the Philosopher's Stone", 17, "Fantasy", "J.K. Rowling");
var book8 = new Book("The Hobbit", 19, "Fantasy", "J.R.R. Tolkien");
var book9 = new Book("The Hitchhiker's Guide to the Galaxy", 35, "Science fiction", "Douglas Adams");
var book10 = new Book("Sapiens: A Brief History of Humankind", 20, "Nonfiction", "Yuval Noah Harari");

var bookArr1 = [book1, book2, book3, book4, book5, book6, book7, book8];
var bookArr2 = [book9, book10];

var box1 = new Box(50, 50, 50, "cardboard", bookArr1);
var box2 = new Box(100, 100, 100, "cardboard", bookArr2);