# Cookies_local_storage

---

## Table of Contents

1. [Set Up Environment](#set-up-environment)

   1. [Initialize npm in Your Project](#initialize-npm-in-your-project)
   2. [Install Webpack and Webpack Dev Server](#install-webpack-and-webpack-dev-server)
   3. [Verify Installation](#verify-installation)
   4. [Starting the Webpack Dev Server](#starting-the-webpack-dev-server)
   5. [Warning for Mode Not Set](#warning-for-mode-not-set)

2. [Learning Objectives](#learning-objectives)
   1. [Creating Cookies using JavaScript](#creating-cookies-using-javascript)
   2. [Setting Specific Settings for the Cookie](#setting-specific-settings-for-the-cookie)
   3. [Reading Cookies with JavaScript](#reading-cookies-with-javascript)
   4. [Using js-cookie for Easy Cookie Manipulation](#using-js-cookie-for-easy-cookie-manipulation)
   5. [Using Browser Web Storage](#using-browser-web-storage)
   6. [Differences Between Local Storage and Session Storage](#differences-between-local-storage-and-session-storage)

---

## Set Up Environment

---

### 1. Initialize npm in Your Project

 Make sure your project has a package.json file. In your project directory, run:

```bash
npm init -y
```

### 2. Install Webpack and Webpack Dev Server

Install webpack, webpack-cli, and webpack-dev-server in your project. Ensure you are in the project root directory and run:

```bash
npm install webpack webpack-cli webpack-dev-server --save-dev
```

### 3. Verify Installation

After installation, check if webpack-dev-server is present in the node_modules/.bin/ directory:

```bash
ls node_modules/.bin/
```

***Look for webpack-dev-server in the listed files.***

### 4. Starting the Webpack Dev Server

- There are a few different  ways you can set up how you start the webpack-dev- server

- As the project Specifies by running:

```bash
node_modules/.bin/webpack-dev-server
```

- You can use npx which simplifies running locally installed binaries. By running:

```bash
npx webpack-dev-server
```

- You can also add a start script to your package.json file to make running the server more convenient:
In your package.json, add the following line under "scripts": (You may already have the "scripts"  in your package.json, if so  append "start" otherwise append this code to json.

```bash
"scripts": {
    "start": "webpack-dev-server"
    }
```

Then, you can start the server with:

```bash
npm start
```

### 5. Warning for mode not set

- Webpack . default production: requires you to specify a mode which can either be development, production, or none. This setting optimizes the build for each specific environment.

Here's how you can address this warning:

- Create a Webpack Configuration File
Create a file named  ``webpack.config.js`` in the root of your project. This file will contain your Webpack configuration.

- Add Basic Configuration
In the webpack.config.js file, you can start with a basic configuration that specifies the mode. Here’s a simple example:

```bash
module.exports = {
    mode: 'development',
    // Add more configurations as needed
};
```

Set the mode to 'development' as it enables ->more helpful error messages and -> a less optimized build for faster build times.
 For production,  change this to 'production', to enable optimizations like minification and more efficient code.

- Run Webpack Dev Server Again
After setting up your webpack.config.js file, try running the Webpack Dev Server again: ***See Step 4 ^***
This should resolve the warning about the mode not being set. You can further customize the webpack.config.js file with additional configurations like entry points, loaders, plugins, etc., depending on your project's requirements.

---

## Learning Objectives

---

### 1. Creating Cookies using JavaScript

- Basics: Cookies are small pieces of data stored on the client's browser. They are primarily used for session management, personalization, and tracking.

  - ***Creation:*** To create a cookie, you can assign a string to `` document.cookie `` in the following format: "key=value".

```javascript
document.cookie = "username=JohnDoe";
```

### 2. Setting Specific Settings for the Cookie

- Expires and Max-Age: Set the lifetime of a cookie. Expires sets an expiration date, Max-Age sets the lifespan in seconds.

  - ***Path:*** Specifies a path in which the cookie is valid.

  - ***Domain:*** Specifies the domain for which the cookie is valid.

  - ***Secure:*** Marks the cookie to be used with HTTPS only.

  - ***HttpOnly:*** Makes the cookie inaccessible to JavaScript's ``document.cookie`` API; it's only sent to the server.

```javascript

document.cookie = "username=JaneDoe; expires=Fri, 31 Dec 2023 23:59:59 GMT; path=/; secure";
```

### 3. Reading Cookies with JavaScript

- Cookies are stored in `` document.cookie `` as a single string. It's a series of key-value pairs separated by semicolons.

  - To read cookies, you need to parse this string.

```javascript

let cookies = document.cookie.split("; ");
for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].split("=");
    console.log("Key: " + cookie[0] + ", Value: " + cookie[1]);
}
```

### 4. Using js-cookie for Easy Cookie Manipulation

- ***js-cookie:*** A Simple, Lightweight JavaScript API
  - Purpose: js-cookie simplifies the process of working with cookies in JavaScript. It provides an easy-to-use API for creating, reading, updating, and deleting cookies.

***Installation Options***

- ***NPM Package:***
  - You can install js-cookie via npm (Node Package Manager) if you're working in a Node.js environment or using a build tool like Webpack. To install it, you would run the following command in the root of your application:

```bash

npm install js-cookie
```

 This command adds js-cookie to your package.json dependencies, making it part of your project's package management.

- ***CDN (Content Delivery Network):***
  - Alternatively, if you are not using a package manager or a build system, you can include js-cookie in your project via a CDN. This method is common for simpler or frontend-only projects. You can add a ``<script>`` tag in your HTML that points to the js-cookie library hosted on a CDN:

```html
<script src="<https://cdn.jsdelivr.net/npm/js-cookie@latest/dist/js.cookie.min.j>
```

- ***Usage:***
- After installation, you can use js-cookie in your JavaScript code.
It provides an easier way to create, read, and delete cookies.
For example:

Example:

```javascript
// Setting a cookie
Cookies.set('name', 'value', { expires: 7 });

// Reading a cookie
let name = Cookies.get('name');

// Deleting a cookie
Cookies.remove('name');
```

### 5. Using Browser Web Storage

- Web Storage API provides mechanisms by which browsers can store key/value pairs.
    It's more secure and can store more data compared to cookies.

### 6. Differences Between Local Storage and Session Storage

- Local Storage:
  - Persists data across sessions. Data does not expire with the closing of the browser.
    - Useful for storing user preferences or long-term data.
- Session Storage:
  - Data is cleared when the page session ends (when the browser tab is closed).
    - Suitable for temporary storage of information, like a user's input in a form.

Example of Local and Session Storage

```javascript

// Local Storage
localStorage.setItem('key', 'value');
console.log(localStorage.getItem('key'));
localStorage.removeItem('key');

// Session Storage
sessionStorage.setItem('sessionKey', 'sessionValue');
console.log(sessionStorage.getItem('sessionKey'));
sessionStorage.removeItem('sessionKey');
```
