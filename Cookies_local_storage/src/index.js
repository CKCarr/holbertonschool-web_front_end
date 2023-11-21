// 0. Create basic cookie

function setCookies() {
    let firstname = document.getElementById(`firstname`).value;
    let email = document.getElementById('email').value;

    document.cookie = `firstname=${firstname}; path=/`;
    document.cookie = `email=${email}; path=/`;
}

function showCookies() {
    // create a new paragraph element
    let para = document.createElement('p');

    // Get cookies & render as inner HTML of the paragraph
    para.innerHTML = `Cookies: ${document.cookie}`;

    // append paragraph to body
    document.body.appendChild(para);

}
