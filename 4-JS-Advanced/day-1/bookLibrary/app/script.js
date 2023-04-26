// - function constructor to create a book object (name, price, author)
// - function constructor to create an author object (name, email)
// - get number of books from user
// - array of book objects filled by user (validated form)
// - fill a table with data
// - each row contains book info, edit and delete options
// - any changes to the books should reflect on the array


// FUNCTION CONSTRUCTORS ///////////////////////////////

function Book(name, price, author) {
    this.name = name;
    this.price = price;
    this.author = author;
}

function Author(name, email) {
    this.name = name;
    this.email = email;
}

////////////////////////////////////////////////////////

var bookNumSection = document.querySelector("#book-num-section");
var numField = document.querySelector("#num-field");
var bookNumSubmitBtn = document.querySelector("#submit-num");
var bookFormSection = document.querySelector("#book-form");
var bookFormSubmitBtn = document.querySelector("#submit-form");
var bookTableSection = document.querySelector("#book-table");
var editBookDataSection = document.querySelector("#edit-book-data");
var editFormBtn = document.querySelector("#edit-form");
var emptyBookDataSection = document.querySelector('#book-data-empty');
var returnBtn = document.querySelector('#return');
var bookNum = null; // number of books that will be entered by the user
var bookArr = [];


// NUM OF BOOKS SUBMISSION ///////////////////////////////////////////////////
bookNumSubmitBtn.addEventListener("click", function() {
    if (parseInt(numField.value)) {
        bookNum = parseInt(numField.value);
        bookNumSection.classList.add('d-none');
        bookFormSection.classList.remove('d-none');
    }
});


// BOOK FORM SUBMISSION //////////////////////////////////////////////////////

bookFormSubmitBtn.addEventListener("click", function () {
    var bookName = document.getElementById("book-name");
    var bookPrice = document.getElementById("book-price");
    var authorName = document.getElementById("author-name");
    var authorEmail = document.getElementById("author-email");
    
    var validForm = validateForm(bookName, bookPrice, authorName, authorEmail);

    if (validForm) {
        var bookObj = new Book(
            bookName.value, 
            bookPrice.value, 
            new Author(authorName.value, authorEmail.value));
            bookArr.push(bookObj);

        if (bookArr.length < bookNum) {
            // reset fields
            bookName.value = "";
            bookPrice.value = "";
            authorName.value = "";
            authorEmail.value = "";
    
            // update form heading
            var bookFormHeading = document.getElementById("book-form-heading");
            bookFormHeading.innerHTML = `📕 Book No. ${bookArr.length + 1}`;
        } else {
            bookFormSection.classList.add('d-none');
            bookTableSection.classList.remove("d-none");
            populateBookTable();
        }
    }
})


// CREATE BOOK TABLE FUNCTION //////////////////////////////////////////////

function populateBookTable() {
    var table = bookTableSection.firstElementChild;
    var tbody = table.lastElementChild;

    // clear table if it is populated
    while (tbody.lastChild) {
        tbody.lastChild.remove();
    };

    for (var i = 0; i < bookArr.length; i++) {
        var tr = document.createElement('tr');

        var tdBookName = document.createElement('td');
        tdBookName.innerHTML = bookArr[i].name;

        var tdBookPrice = document.createElement('td');
        tdBookPrice.innerHTML = bookArr[i].price;

        var tdAuthorName = document.createElement('td');
        tdAuthorName.innerHTML = bookArr[i].author.name;

        var tdAuthorEmail = document.createElement('td');
        tdAuthorEmail.innerHTML = bookArr[i].author.email;

        var tdEditBtn = document.createElement('td');
        var editBtn = document.createElement('button');
        editBtn.classList = 'btn btn-sm btn-success';
        editBtn.innerHTML = 'Edit';
        tdEditBtn.append(editBtn);
        
        // add event listener to edit button
        (function (index) {
            editBtn.addEventListener('click', function () {
                populateEditForm(index);
            })
        })(i);

        var tdDeleteBtn = document.createElement('td');
        var deleteBtn = document.createElement('button');
    
        deleteBtn.classList = 'btn btn-sm btn-success';
        deleteBtn.innerHTML = 'Delete';
        tdDeleteBtn.append(deleteBtn);

        // add event listener to delete button
        (function (index) {
            deleteBtn.addEventListener('click', function () {
                deleteBookData(index);
            });
        })(i);

        tr.append(tdBookName);
        tr.append(tdBookPrice);
        tr.append(tdAuthorName);
        tr.append(tdAuthorEmail);
        tr.append(tdEditBtn);
        tr.append(tdDeleteBtn);
        tbody.append(tr);
    }
}

// DELETE BUTTON (IN TABLE) CLICK HANDLER ////////////////////////////////////
function deleteBookData (index) {
    
    bookArr.splice(index, 1);
    if(!bookArr.length) {
        returnToFirstPageOption();
    } else {
        populateBookTable();
    }
};

// EDIT BUTTON (IN TABLE) CLICK HANDLER /////////////////////////////////////
function populateEditForm(index) {
    var bookObj = bookArr[index];

    bookTableSection.classList.add("d-none");
    editBookDataSection.classList.remove('d-none');

    editBookDataSection.dataset.bookId = index;

    var bookNameEdit = document.getElementById("edit-book-name");
    var bookPriceEdit = document.getElementById("edit-book-price");
    var authorNameEdit = document.getElementById("edit-author-name");
    var authorEmailEdit = document.getElementById("edit-author-email");

    // populate form with book data
    bookNameEdit.value = bookObj.name;
    bookPriceEdit.value = bookObj.price;
    authorNameEdit.value = bookObj.author.name;
    authorEmailEdit.value = bookObj.author.email;
}

// EDIT BOOK DATA FORM SUBMISSION /////////////////////////////////////////////
editFormBtn.addEventListener("click", function () {
    var bookObj = bookArr[editBookDataSection.dataset.bookId];

    var bookNameEdit = document.getElementById("edit-book-name");
    var bookPriceEdit = document.getElementById("edit-book-price");
    var authorNameEdit = document.getElementById("edit-author-name");
    var authorEmailEdit = document.getElementById("edit-author-email");
    
    validateForm(bookNameEdit, bookPriceEdit, authorNameEdit, authorEmailEdit);
    var validForm = validateForm(bookNameEdit, bookPriceEdit, authorNameEdit, authorEmailEdit);


    if (validForm) {
        bookObj.name = bookNameEdit.value;
        bookObj.price = bookPriceEdit.value;
        bookObj.author.name = authorNameEdit.value;
        bookObj.author.email = authorEmailEdit.value;

        bookTableSection.classList.remove("d-none");
        editBookDataSection.classList.add('d-none');
        populateBookTable();
    }
})

// IF BOOK DATA IS EMPTY ///////////////////////////////////////////////////
function returnToFirstPageOption() {
    emptyBookDataSection.classList.remove('d-none');
    bookTableSection.classList.add('d-none');
}

returnBtn.addEventListener('click', function() {
    bookNumSection.classList.remove('d-none');
    emptyBookDataSection.classList.add('d-none');
})


// FORM VALIDATION FUNCTION //////////////////////////////////////////////////
function validateForm(bookName, bookPrice, authorName, authorEmail) {
    var validFeedback = document.createElement('div');
    validFeedback.classList.add('valid-feedback');
    validFeedback.innerHTML = "Looks good!";

    var invalidFeedback = document.createElement('div');
    invalidFeedback.classList.add('invalid-feedback');

    var validBookName = false;
    var validBookPrice = false;
    var validAuthorName = false;
    var validAuthorEmail = false;

    // BOOK NAME VALIDATION ///////////////////////////////////////
    if (!bookName.value) {
        validBookName = false;
        bookName.classList.remove('is-valid');
        bookName.classList.add('is-invalid');
        var bookNameError = invalidFeedback.cloneNode(true);
        bookNameError.innerHTML = "This field is required.";
        if (!bookName.nextElementSibling) {
            bookName.insertAdjacentElement("afterend", bookNameError)
        } else if (bookName.nextElementSibling.classList.contains("valid-feedback")) {
            bookName.nextElementSibling.remove();
            bookName.insertAdjacentElement("afterend", bookNameError);
        }
    } else {
        validBookName = true;
        bookName.classList.remove('is-invalid');
        bookName.classList.add('is-valid');
        if (!bookName.nextElementSibling) {
            bookName.insertAdjacentElement('afterend', validFeedback.cloneNode(true));
        } else if (bookName.nextElementSibling.classList.contains("invalid-feedback")) {
            bookName.nextElementSibling.remove();
            bookName.insertAdjacentElement("afterend", validFeedback.cloneNode(true));
        }
    }

    // BOOK PRICE VALIDATION ///////////////////////////////////////////
    if (!Number(bookPrice.value)) {
        validBookPrice = false;
        bookPrice.classList.remove('is-valid');
        bookPrice.classList.add('is-invalid');

        var bookPriceError = invalidFeedback.cloneNode(true);
        bookPriceError.innerHTML = "Please provide a valid price.";
        if (!bookPrice.nextElementSibling) {
            bookPrice.insertAdjacentElement("afterend", bookPriceError)
        } else if (bookPrice.nextElementSibling.classList.contains("valid-feedback")) {
            bookPrice.nextElementSibling.remove();
            bookPrice.insertAdjacentElement("afterend", bookPriceError);
        }
    } else {
        validBookPrice = true;
        bookPrice.classList.remove('is-invalid');
        bookPrice.classList.add('is-valid');
        if (!bookPrice.nextElementSibling) {
            bookPrice.insertAdjacentElement('afterend', validFeedback.cloneNode(true));
        } else if (bookPrice.nextElementSibling.classList.contains("invalid-feedback")) {
            bookPrice.nextElementSibling.remove();
            bookPrice.insertAdjacentElement("afterend", validFeedback.cloneNode(true));
        }
    }

    // AUTHOR NAME VALIDATION ///////////////////////////////////////////
    if (!authorName.value && !isNaN(authorName.value)) {
        validAuthorName = false;
        authorName.classList.remove('is-valid');
        authorName.classList.add('is-invalid');

        var authorNameError = invalidFeedback.cloneNode(true);
        authorNameError.innerHTML = "Please provide a valid name.";
        if (!authorName.nextElementSibling) {
            authorName.insertAdjacentElement("afterend", authorNameError)
        } else if (authorName.nextElementSibling.classList.contains("valid-feedback")) {
            authorName.nextElementSibling.remove();
            authorName.insertAdjacentElement("afterend", authorNameError);
        }
    } else {
        validAuthorName = true;
        authorName.classList.remove('is-invalid');
        authorName.classList.add('is-valid');
        if (!authorName.nextElementSibling) {
            authorName.insertAdjacentElement('afterend', validFeedback.cloneNode(true));
        } else if (authorName.nextElementSibling.classList.contains("invalid-feedback")) {
            authorName.nextElementSibling.remove();
            authorName.insertAdjacentElement("afterend", validFeedback.cloneNode(true));
        }
    }

    // AUTHOR EMAIL VALIDATON ///////////////////////////////////////////
    regEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (!authorEmail.value || !regEmail.test(authorEmail.value)) {
        validAuthorEmail = false;
        authorEmail.classList.remove('is-valid');
        authorEmail.classList.add('is-invalid');

        var authorEmailError = invalidFeedback.cloneNode(true);
        authorEmailError.innerHTML = "Please provide a valid email.";
        if (!authorEmail.nextElementSibling) {
            authorEmail.insertAdjacentElement("afterend", authorEmailError)
        } else if (authorEmail.nextElementSibling.classList.contains("valid-feedback")) {
            authorEmail.nextElementSibling.remove();
            authorEmail.insertAdjacentElement("afterend", authorEmailError);
        }
    } else {
        validAuthorEmail = true;
        authorEmail.classList.remove('is-invalid');
        authorEmail.classList.add('is-valid');
        if (!authorEmail.nextElementSibling) {
            authorEmail.insertAdjacentElement('afterend', validFeedback.cloneNode(true));
        } else if (authorEmail.nextElementSibling.classList.contains("invalid-feedback")) {
            authorEmail.nextElementSibling.remove();
            authorEmail.insertAdjacentElement("afterend", validFeedback.cloneNode(true));
        }
    }

    if (validBookName && validBookPrice && validAuthorName && validAuthorEmail) {
        bookName.classList.remove("is-valid");
        bookPrice.classList.remove("is-valid");
        authorName.classList.remove("is-valid");
        authorEmail.classList.remove("is-valid");

        bookName.nextElementSibling.remove();
        bookPrice.nextElementSibling.remove();
        authorName.nextElementSibling.remove();
        authorEmail.nextElementSibling.remove();
        return true;
    } else {
        return false;
    }
}