
# Day 4: Events and Event Listeners

## 🔔 What is an Event?
- An event is an action that occurs in the browser (e.g., click, keypress, mouseover).

## 📌 How to Handle Events?
- `element.addEventListener(event, callback)` is used to run code when an event happens.

## ✨ Common Events:
- `click`, `mouseover`, `mouseout`, `keydown`, `submit`, `input`

## 🆚 Inline vs addEventListener:
| Feature             | Inline (HTML)                | `addEventListener` (JS)     |
|---------------------|------------------------------|------------------------------|
| Multiple handlers   | ❌ Not possible               | ✅ Yes                        |
| Separation of logic | ❌ Mixed with HTML            | ✅ Cleaner & separate         |
| Flexibility         | ❌ Limited                    | ✅ Can remove dynamically     |

### Inline Example (Not Recommended):
```html
<button onclick="alert('Clicked!')">Click me</button>
```

### Modern Approach with addEventListener:
```javascript
document.getElementById('btn').addEventListener('click', function(e) {
  alert('Button clicked!');
});
```

## 📝 Exercises:
1. Log the key pressed inside an input (`keydown` event).
2. Change background color of a div when mouse enters and leaves.
