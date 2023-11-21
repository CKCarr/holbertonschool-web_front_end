// 0. Create basic cookie

function setCookies() {
    let firstname = document.getElementById(`firstname`).value;
    let email = document.getElementById('email').value;

    let date = new Date();
    date.setTime(date.getTime() + (10 * 24 * 60 * 60 * 1000));
    let expireDate = "expires=" + date.toUTCString();

    document.cookie = "firstname=" + firstname;
    document.cookie = "email=" + email;
}

function showCookies() {
    // create a new paragraph element
    let para = document.createElement('p');

    // Get cookies & render as inner HTML of the paragraph
    para.innerHTML = "Cookies: " + document.cookie;

    // append paragraph to body
    document.body.appendChild(para);
}
