function createElement(data) {
    let paragraph = document.createElement('p');
    paragraph.textContent = data;
    document.body.appendChild(paragraph);
}

function queryWikipedia(callback) {
    let xhr = new XMLHttpRequest();
    let url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*';

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                let response = JSON.parse(xhr.responseText);
                let page = response.query.pages;
                let pageId = Object.keys(page)[0];
                let extract = page[pageId].extract;
                callback(extract);
            } else {
                console.error('Error fetching data');
            }
        }
    };

    xhr.open('GET', url);
    xhr.send();
}

queryWikipedia(createElement);
