# SASS && SCSS 
## Learning Objectives


<details>

<summary>What Sass means</summary>

Sass stands for "Syntactically Awesome Style Sheets." It's a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). Sass makes it easier to write and maintain CSS code by adding features like variables, nesting, and mixins.
</details>

<details>
<summary>How to write Sass & Scss file</summary>

Sass files have two formats: Sass and Scss.
- Sass: Uses indentation and doesn't require curly braces and semicolons.
   ```
    body
        font-family: Arial, sans-serif
        color: #333
    ```
- Scss: It looks very similar to regular CSS but allows you to use Sass features.
    ```
    body {
      font-family: Arial, sans-serif;
      color: #333;
    }
    ```
</details>


<details>
<summary>What is the difference between Sass and Scss</summary>

The main difference is in their syntax:
- Sass uses indentation and omits curly braces and semicolons.
- Scss uses a syntax that closely resembles CSS, with curly braces and semicolons.

You can choose the format that you find more comfortable, but Scss is more popular and widely used.
</details>


<details>
<summary>What is the Sass preprocessing</summary>

Sass preprocessing refers to the step where your Sass or Scss code is converted into standard CSS.
This process is necessary because browsers can only understand CSS. You typically use a tool like "Sass Compiler" or "Node-sass" to perform this conversion.
</details>


<details>
<summary>How to declare a variable</summary>

In Sass, you can declare variables using the '$' symbol'
```
$primary-color: #007bff;
$font-family: Arial, sans-serif;

body {
  font-family: $font-family;
  color: $primary-color;
}
```
</details>


<details>
<summary>How to use nested definition</summary>

Sass allows you to nest CSS selectors, making your code more organized:
```
nav {
  ul {
    list-style: none;
    li {
      display: inline-block;
      a {
        text-decoration: none;
      }
    }
  }
}
```

</details>


<details>
<summary>How to import a Sass file</summary>

You can import other Sass files using the @import directive:
```
@import 'variables'; // Import a file named '_variables.scss'
```
</details>


<details>
<summary>How to use mixins</summary>

Mixins are reusable blocks of code. Here's how to define and use a mixin:
```
@mixin button-style {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
}

.button {
  @include button-style;
}
```

</details>


<details>
<summary>How to declare extend/inheritance styles</summary>

You can use the @extend directive to inherit styles from another selector:
```
.button {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
}

.submit-button {
  @extend .button;
  border: 1px solid #007bff;
}
```
</details>


<details>
<summary>How to manipulate operators</summary>

Sass allows you to perform basic arithmetic operations in your styles. For example:
```
$base-font-size: 16px;

body {
  font-size: $base-font-size * 1.2; // This will be 19.2px
}
```
</details>

