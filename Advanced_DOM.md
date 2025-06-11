
# Day 8: Advanced DOM Topics

## 🎯 Event Delegation
- Attach one event listener to a parent instead of many children.
- Use `event.target` to find the clicked element.

## Example:
```javascript
document.querySelector('ul').addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    alert('Clicked on: ' + e.target.textContent);
  }
});
```

## 👀 MutationObserver
- Watches for changes in the DOM tree (e.g. element added/removed).

## Example:
```javascript
const observer = new MutationObserver((mutations) => {
  console.log(mutations);
});

observer.observe(document.body, { childList: true, subtree: true });
```

## 📝 Exercises:
1. Build a task list with dynamic add/remove and delegate events.
2. Use MutationObserver to log changes when items are added or deleted.
