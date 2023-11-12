/*  Changing DOM with closure
Using closure, it changes the style of the entire page and set the font-size, font-weight, text-transform, background-color, and color
*/

function changeMode(size, weight, transform, background, color) {
    return function() {
        document.body.style.fontSize = size;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
}
function main() {
    let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    let screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    let paragraph = document.createElement("p");
    paragraph.textContent = "Welcome Holberton!";
    document.body.appendChild(paragraph);

    function createButton(btnText, btnMode) {
        let button = document.createElement("button");
        button.textContent = btnText;
        button.addEventListener('click', btnMode);
        document.body.appendChild(button);
    }
    createButton("Spooky", spooky);
    createButton("Dark mode", darkMode);
    createButton("Scream mode", screamMode);
}
main();
