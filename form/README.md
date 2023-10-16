# FORMS
## Learning objectives

How to create an HTML5 form
- This is created by using the \<form> element.<br>
Provided in this example

```
<!DOCTYPE html>
<html>
    <head>
        <title>Form Example</title>
    </head>
    <body>

        <form action="submit.py" method="post">

            <!-- Form inputs go here -->

            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>

            <label for="number">Phone Number:</label>
            <input type="number" id="number" name="number" required>

            <input type="submit" value="Submit">

        </form>
    </body>
</html>
```

How to choose the right input type
- "HTML5 includes many built-in input types, such as text, email, password, number, date, etc.
Choose the type based on the data you want to collect. As in this example, use type="email" for email addresses, type="number" for numbers, and type="date" for dates."

How to constrain a form field with regular expressions
- You can use the pattern attribute to apply a regular expression to an input field. For example, to validate an email address, you can use:

```
<input type="email" id="email" name="email"
    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}">

/*You can remember the email regex as a postal address analogy:

"Street name (local part) @ City (domain) . Postal Code (TLD)"
-or-
ema1l.Nam3_P3rson%Plac3+0r-Th1ng @ 3Mai1-D0Main . codeT0pL3v3lD0Main
*/

```

How to style inputs for invalid, valid, and required fields

- Use CSS selectors to style inputs.
```
<!-- valid inputs border in green,
     invalid inputs border in red,
     required inputs with a yellow background. -->

input:valid {
    border: 2px solid green;
}

input:invalid {
    border: 2px solid red;
}

input:required {
    background-color: yellow;
}
```

How to build a a comment form
- When you build a comment form, you can add a textarea element for users to enter their comments:

```
<label for="comment">Comment:</label>
<textarea id="comment" name="comment" rows="4" cols="50" required></textarea>
```

How to build a simple search form
- YOu would add an input field of type search.
```
<label for="search">This is a Search LAbel on the browser :) :</label>
<input type="search" id="search" name="search" placeholder="Type Search Parameters in this input bar...">

```

How to create usable and accessible forms
- To create usable and accessible forms, follow best practices:

    - Use clear labels for each input using the \<label> element.
    - Ensure proper contrast between text and background colors for readability.
    - Add appropriate alt="" text for form-related images.
    - Use semantic HTML elements to structure your form.
    - Test your forms with screen readers to ensure accessibility.
     <<< Use Browser tools and test as you build :) >>>
