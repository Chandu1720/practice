
# Day 3: Styling and Attributes

## 🎨 Styling Elements
- Use `element.style.property` to change styles.
- Use `classList` to toggle CSS classes for dynamic design.

## 🧾 Attribute Manipulation
- `getAttribute(name)`: Gets an attribute value.
- `setAttribute(name, value)`: Sets or updates an attribute.
- `removeAttribute(name)`: Removes an attribute.

## Example:
```javascript
const box = document.querySelector('.box');
box.style.border = '2px solid red';
box.classList.toggle('highlight');
```

## 📝 Exercises:
1. Create a div and toggle a CSS class on button click.
2. Set a custom data attribute like `data-user="John"` using JavaScript.
