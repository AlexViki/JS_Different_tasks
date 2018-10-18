let comments = [];

document.getElementById('comment-add').addEventListener('click', ()=>{
    event.preventDefault();
    getDateFromForm();
});

let getDateFromForm = ()=>{
    let commentName = document.getElementById('comment-name');
    let commentBody = document.getElementById('comment-body');
    let comment = {
        name: commentName.value,
        body: commentBody.value,
        time: new Date().toLocaleString()
    };
    commentName.value = '';
    commentBody.value = '';
    comments.push(comment);  
    saveComments();
    showComments();
};

// save all comments to the local storage
let saveComments = ()=>{
    localStorage.setItem('comments', JSON.stringify(comments));
};

// load date from local storege
let loadComments = ()=>{
    if (localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));
    showComments();
};

// showing comments on the page
let showComments = ()=>{
    let commentField = document.getElementById('commnt-field');
    let out = '';
    comments.forEach((item)=>{
        out += `<div class="card alert alert-success" style="width: auto;">
                    <div class="card-body">
                        <p class="small alert alert-secondary text-left"><b>${item.name}</b> - <em>${item.time}</em></p>
                        <p class="card-text">${item.body}</p>
                    </div>
                </div>`;
        commentField.innerHTML = out;
    })
};

// for reading local storage during loading page
loadComments();