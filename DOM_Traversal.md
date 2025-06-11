
# Day 5: DOM Tree Navigation (Traversal)

## 🔍 Navigating the DOM Tree

### Parent and Child
- `parentNode`, `parentElement`
- `childNodes` (includes text/comments), `children` (only element nodes)

### Siblings
- `nextSibling`, `nextElementSibling`
- `previousSibling`, `previousElementSibling`

## Example:
```javascript
let el = document.querySelector('.item');
console.log(el.parentNode); // Parent node
console.log(el.children); // All child elements
console.log(el.nextElementSibling); // Next element
```

## 🆚 childNodes vs children
| Feature        | `childNodes`         | `children`             |
|----------------|----------------------|-------------------------|
| Includes text? | ✅ Yes                | ❌ No                   |
| Node Type      | All node types       | Only elements           |

## 📝 Exercises:
1. Select a container and log all its child elements.
2. On click of an item, highlight its previous and next sibling.
