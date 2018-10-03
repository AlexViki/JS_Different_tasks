let books = {};

$(document).ready(() => {
    $('#modal-add-book-ok').on('click', addBookToLibrary);
});

let addBookToLibrary = () => {
    //console.log('11111');
    let formData = $('form').serializeArray();
    console.log(formData);
    let inputArray = [];
    for (key in formData) {
        inputArray[formData[key]['name']] = formData[key]['value'];
    }
    console.log(inputArray);
    let vendorCode =Math.round(Math.random() * 100000);
    books[vendorCode] = inputArray;
    //console.log(vendorCode);
    $('#modal-add-book').modal('hide');
    drawBook(vendorCode);
};

let drawBook = (vendor) => {
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
    link.className = 'book-link btn btn-success';
    link.setAttribute('href', books[vendor]['book-link']);
    link.setAttribute('target', '_blank');
    link.innerHTML = 'Download';

    div.appendChild(bookName);
    div.appendChild(bookAuthor);
    div.appendChild(bookYear);
    div.appendChild(vendorNumber)
    div.appendChild(link)
    
    $('.book-panel').append(div);
};