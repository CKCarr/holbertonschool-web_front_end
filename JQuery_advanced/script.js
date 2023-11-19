function addPostRow(data) {
    $('body').append(`<p><span>Post created with id ${data.id}, title: ${data.title}, author: ${data.author}</span></p>`);
}

function listPosts() {
    $.get("http://localhost:3000/posts", function(data) {
        data.forEach(addPostRow);
    }).fail(function() {
        alert("Server Error");
    });
}


$(document).ready(function() {
    listPosts();
});

