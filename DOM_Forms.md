
# Day 7: Handling Forms with the DOM

## 🧾 Form Events
- `submit`: Fires on form submission.
- `input`: Fires on any input change.
- `change`: Fires when input loses focus after change.

## 🎯 Accessing Values
```javascript
document.querySelector('#email').value
```

## 🚫 Prevent Form Submission
Use `event.preventDefault()` inside a submit event handler.

## Example:
```javascript
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  alert("Submitted: " + name);
});
```

## 📝 Exercises:
1. Validate name/email inputs on form submission.
2. Show live preview of input data below the form.
