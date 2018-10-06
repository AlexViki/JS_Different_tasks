let books = {};

$(document).ready(() => {
    $('#modal-add-book-ok').on('click', addBookToLibrary);
});

function addBookToLibrary() {
    let formData = $('form').serializeArray();
    console.log(formData);
    let inputArray = [];
    for (key in formData) {
        inputArray[formData[key]['name']] = formData[key]['value'];
    }
    console.log(inputArray);

    let data = $(this).attr('data');
    console.log('===========================' + data);

    if (data == undefined) {
        let vendorCode = Math.round(Math.random() * 100000);
        books[vendorCode] = inputArray;
        drawBook(vendorCode);
        //console.log(books);
    } else {
        books[data] = inputArray;
        drawBook(data);
    }
    console.log(books);
    $('#modal-add-book').modal('hide');
};

let drawBook = (vendor) => {
    let books = $('.book[data=' + vendor + ']');
    let div = document.createElement('div');
    div.className = 'col-lg-3 book';
    div.setAttribute('data', vendor);

    let bookName = document.createElement('h3');
    bookName.className = 'book-title';
    bookName.innerHTML = books[vendor]['book-name'];

    let bookAuthor = document.createElement('p');
    bookAuthor.className = 'book-author';
    bookAuthor.innerHTML = books[vendor]['book-author'];

    let bookYear = document.createElement('p');
    bookYear.className = 'book-year';
    bookYear.innerHTML = books[vendor]['book-year'];
    
    let vendorNumber = document.createElement('p');
    vendorNumber.className = 'book-vendor-number';
    vendorNumber.innerHTML = 'Vendor number: ' + vendor;

    let link = document.createElement('a');
    link.className = 'book-link btn-book-block btn btn-success';
    link.setAttribute('href', books[vendor]['book-link']);
    link.setAttribute('target', '_blank');
    link.innerHTML = 'Download';

    let buttonEdit = document.createElement('button');
    buttonEdit.className = 'edit btn-book-block btn btn-success';
    buttonEdit.innerHTML = 'Edit';
    buttonEdit.setAttribute('data', vendor);
    //buttonEdit.addEventListener('click', runBtnEdit);
    buttonEdit.onclick = runBtnEdit;

    div.appendChild(bookName);
    div.appendChild(bookAuthor);
    div.appendChild(bookYear);
    div.appendChild(vendorNumber);
    div.appendChild(link);
    div.appendChild(buttonEdit);
    
    $('.book-panel').append(div);
};

function runBtnEdit() {
    //console.log('edit book');
    let data = $(this).attr('data');
    console.log(data);
    // show modal windows for edit book
    $('#modal-add-book').modal('show');
    $('form #book-name').val(books[data]['book-name']);
    $('form #book-author').val(books[data]['book-author']);
    $('form #book-year').val(books[data]['book-year']);
    $('form #book-link').val(books[data]['book-link']);
    // add atribute "date" for button "Add book" it's need for modifyi
    $('#modal-add-book-ok').attr('data', data);
};