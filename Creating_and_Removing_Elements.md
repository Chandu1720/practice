
# Day 6: Creating and Removing Elements

## ➕ Creating Elements
- `document.createElement('tag')`
- `element.appendChild(node)` to add at end
- `element.insertBefore(newNode, existingNode)` to insert before

## ➖ Removing/Replacing Elements
- `element.removeChild(child)`
- `element.replaceChild(newChild, oldChild)`

## Example:
```javascript
let li = document.createElement('li');
li.textContent = 'New Item';
document.querySelector('ul').appendChild(li);
```

## 🆚 appendChild vs insertBefore
| Feature           | appendChild       | insertBefore               |
|-------------------|-------------------|----------------------------|
| Position          | Adds at end       | Adds before specific node  |
| Simplicity        | ✅ Simple          | 🔄 Needs reference node     |

## 📝 Exercises:
1. Add items to a list when a button is clicked.
2. Remove a list item when it’s clicked.
