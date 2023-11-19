// functions for 10. Another Get API

function addPostRow(data) {
    const postElement = $(`<p id='row-${data.id}'></p>`);
    
    const postInfo = $(`<span>Post created with id ${data.id}, title: ${data.title}, author: ${data.author}</span>`);

    const deleteButton = $('<span>').text('(delete) ').on('click', function() {
        deletePost(data.id);
    });

    $(postElement).append(postInfo).prepend(deleteButton);

    $('#postForm').after(postElement);

}


function deletePost(id) {
    $.ajax({
        url: `http://localhost:3000/posts/${id}`,
        method: 'DELETE',
        success: function() {
            $(`#row-${id}`).remove();
        },
        error: function() {
            alert('Error: Post was not deleted!')
        }
    });
}

function listPosts() {
    $.get("http://localhost:3000/posts", function(data) {
        data.forEach(addPostRow);
    }).fail(function() {
        alert("Server Error");
    });
}

// functions for 11. Post query

function buildForm() {
        $('<form>').attr('id', 'postForm').append(

            $('<div>').append(
                $('<label>').attr('for', 'author').text('Author '),
                $('<input>').attr('type', 'text').attr('id', 'author')
            ),
            $('<div>').append(
                $('<label>').attr('for', 'title').text('Title '),
                $('<textarea>').attr('id', 'title')
            ),
            $('<input>').attr("type", 'submit').val("Submit")

        ).appendTo('body');

        $('#postForm').on('submit', function(e) {
            e.preventDefault();
            sendForm();
        });

}


function sendForm(){

    $('#postForm').after('<p>About to send the query to the API</p>');

    const data = {
        author: $('#author').val(),
        title: $('#title').val()
    };

    $.post({
        url: 'http://localhost:3000/posts',
        data: JSON.stringify(data),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function(response) {
            console.log("Response: ", response); // debug input data
            addPostRow(response);
        },
        error: function() {
            alert('Error sending POST query!')
        }
    });

}

$(document).ready(function() {
    listPosts();
    buildForm();
});

