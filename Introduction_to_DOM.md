
# Day 1: Introduction to DOM

## 🔍 What is the DOM?
- DOM stands for **Document Object Model**.
- It is a **tree-like structure** representing the content of a webpage.
- Each node in the DOM corresponds to a part of the HTML document: elements, text, comments, etc.

## 🔗 Why is the DOM Important?
- It allows JavaScript to interact with HTML and CSS.
- You can dynamically change content, structure, and style using the DOM.

## 🌳 DOM Tree Example:
```html
<html>
  <body>
    <p>Hello World</p>
  </body>
</html>
```
- The DOM tree has nodes: `html` > `body` > `p` > text node

## 🧪 Basic Example:
```html
<p id="demo">Hello World</p>
<script>
  const para = document.getElementById("demo");
  console.log(para.textContent); // Hello World
</script>
```

## 📝 Exercises:
1. Create an HTML file with `<h1>`, `<p>`, and a button.
2. Access and log each element using `document.getElementById`.
3. Change the paragraph text on button click.


