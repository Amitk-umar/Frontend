# Introduction of DOM

## Part 1: HTML to Browser Pipeline in DOM 🌐

When we write HTML, CSS, and JavaScript, the browser cannot directly understand them. The browser follows a complete pipeline to convert your code into a visual webpage. Understanding this pipeline helps you understand:

*   DOM
*   CSSOM
*   Rendering
*   Reflow
*   Repaint
*   Browser Performance

### The Big Question
Suppose you write:
```html
<!DOCTYPE html>
<html>
<head>
  <title>My Website</title>
</head>
<body>
  <h1>Hello World</h1>
</body>
</html>
```
How does this become a webpage? The answer is:

```text
HTML → Parsing → Tokenization → DOM Tree → CSSOM Tree → Render Tree → Layout → Paint → Screen
```

### Complete Browser Pipeline

```text
HTML File
     ↓
Parsing
     ↓
Tokenization
     ↓
DOM Tree
     ↓
CSS File
     ↓
Parsing
     ↓
CSSOM Tree

DOM + CSSOM
     ↓
Render Tree
     ↓
Layout
     ↓
Paint
     ↓
Screen
```

### Real-Life Analogy
Imagine building a house:
*   **HTML:** Raw construction material (Bricks, Doors, Windows).
*   **DOM Tree:** Blueprint of the house (Which room is connected to which room).
*   **CSSOM:** Decoration instructions (Wall colors, Furniture, Lighting).
*   **Render Tree:** Final decorated house plan.
*   **Layout:** Measure room sizes.
*   **Paint:** Actually paint and build everything.

### Why This Pipeline Matters
Every webpage you visit (Google, Facebook, Amazon, YouTube) goes through this process. All browsers perform this pipeline before showing content.

**Quick Revision:**

| Step | Purpose |
| :--- | :--- |
| **HTML** | Raw document |
| **Parsing** | Reading code |
| **Tokenization** | Breaking into tokens |
| **DOM Tree** | HTML structure |
| **CSSOM Tree** | CSS structure |
| **Render Tree** | Combined visual structure |
| **Layout** | Calculate positions |
| **Paint** | Draw pixels |

---

## Part 2: Parsing 🔍

Parsing is the process where the browser reads the HTML document and understands its structure.

### What is Parsing?
Parsing means reading code and converting it into a structure the browser can understand. Suppose the browser receives:
```html
<h1>Hello</h1>
```
The browser cannot immediately display it. First, it must understand:
1.  This is a heading element.
2.  Its content is "Hello".

### Parsing Flow
```text
HTML Code → Parser Reads Character by Character → Creates Meaningful Pieces → DOM Tree
```

### Example
**HTML:**
```html
<body>
  <h1>Hello</h1>
</body>
```
**Parser reads:** `<` `body` `>` `<` `h1` `>` `Hello` `</` `h1` `>` `</` `body` `>` and understands the hierarchy.

### Why Parsing is Important
Without parsing, `<h1>Hello</h1>` would simply be text. The browser would not know tag names, nesting, or parent-child relationships.

> **Important Interview Point:** The browser starts parsing HTML from **top to bottom**. Order matters.

**Quick Revision:**

| Term | Meaning |
| :--- | :--- |
| **Parsing** | Reading and understanding HTML |
| **Input** | HTML code |
| **Output** | Structured representation |
| **Direction** | Top to Bottom |

---

## Part 3: Tokenization 🧩

Before building the DOM Tree, the browser converts HTML into tokens.

### What is Tokenization?
Tokenization means breaking HTML into small understandable pieces called **Tokens**.

### Example
**HTML:**
```html
<h1>Hello World</h1>
```
**Browser breaks it into:**
*   Start Tag Token → `<h1>`
*   Text Token → `Hello World`
*   End Tag Token → `</h1>`

### Types of Tokens
1.  **Start Tag Token:** `<div>` (Start Tag: div)
2.  **End Tag Token:** `</div>` (End Tag: div)
3.  **Text Token:** `Hello` (Text: Hello)
4.  **Attribute Token:** `<img src="image.jpg">` (Tag: img, Attribute: src, Value: image.jpg)

### Why Tokenization Exists
Computers understand structured data better than raw text. Instead of viewing `<div class="box">Hello</div>` as text, the browser converts it into manageable pieces.

**Quick Revision:**

| Token Type | Example |
| :--- | :--- |
| **Start Tag** | `<div>` |
| **End Tag** | `</div>` |
| **Text** | `Hello` |
| **Attribute** | `class` |
| **Value** | `box` |

---

## Part 4: DOM Tree 🌳

This is one of the most important concepts in Web Development.

### What is DOM?
DOM stands for **Document Object Model**. It is a tree-like representation of an HTML document. 

### Why DOM Exists?
JavaScript cannot directly manipulate HTML. Instead:
```text
HTML → DOM → JavaScript Manipulates DOM
```

### Example
**HTML:**
```html
<html>
  <body>
    <h1>Hello</h1>
    <p>World</p>
  </body>
</html>
```
**DOM Tree:**
```text
Document
  │
  └── html
       │
       └── body
             │
             ├── h1
             │     └── Hello
             │
             └── p
                   └── World
```

### DOM Terminology
*   **Parent Node:** `body` is the parent of `h1`.
*   **Child Node:** `h1` is the child of `body`.
*   **Sibling Node:** `h1` and `p` are siblings (same parent).

### DOM is a Live Structure
JavaScript can change it anytime, and the DOM updates instantly.
```javascript
document.querySelector("h1").textContent = "Welcome";
```

> **Important Interview Point:** DOM is not HTML. HTML is text (`<h1>Hello</h1>`), while DOM is an object representation (`{ tagName: "H1", textContent: "Hello" }`).

**Quick Revision:**

| Term | Meaning |
| :--- | :--- |
| **DOM** | Document Object Model |
| **Structure** | Tree |
| **Root** | document |
| **Parent** | Contains child |
| **Child** | Nested element |
| **Sibling** | Same parent |

---

## Part 5: CSSOM Tree 🎨

Just like HTML becomes DOM, CSS becomes CSSOM.

### What is CSSOM?
CSSOM stands for **CSS Object Model**. It is a tree representation of CSS rules.

### Example
**CSS:**
```css
body { background: black; }
h1 { color: white; }
```
**Browser converts it into:**
```text
CSSOM
body
 └─ background: black

h1
 └─ color: white
```

### CSS Parsing Flow
```text
CSS File → Parser → Tokens → CSSOM Tree
```

> **Important Point:** DOM contains structure. CSSOM contains styling. Neither alone can create a webpage.

**Quick Revision:**

| Structure | Purpose |
| :--- | :--- |
| **DOM** | HTML Structure |
| **CSSOM** | CSS Styles |

---

## Part 6: DOM + CSSOM = Render Tree 🖥️

Now the magic happens. 

### What is Render Tree?
Render Tree is a combination of the DOM Tree and the CSSOM Tree.
```text
DOM Tree + CSSOM Tree = Render Tree
```

### Visual Flow
```text
HTML → DOM
                 ↘
                   DOM + CSSOM → Render Tree → Layout → Paint → Screen
                 ↗
CSS  → CSSOM
```

### Hidden Elements
Elements with `display: none;` are **NOT** added to the Render Tree.

### After Render Tree
*   **Layout:** Calculates width, height, position, margin, padding.
*   **Paint:** Actually draws text, colors, borders, images onto the screen.

---

## Part 7: Selection of Elements 🎯

JavaScript interacts with webpages through DOM element selection to change text, styles, add events, or manipulate elements.

### 1. getElementById()
Selects an element using ID.
```javascript
const heading = document.getElementById("title");
console.log(heading);
```

### 2. getElementsByClassName()
Returns an `HTMLCollection`.
```javascript
const items = document.getElementsByClassName("text");
```

### 3. getElementsByTagName()
Returns all matching elements.
```javascript
document.getElementsByTagName("p");
```

### 4. querySelector()
Returns the **first** matching element.
```javascript
document.querySelector(".box");
document.querySelector("#title");
document.querySelector("p");
```

### 5. querySelectorAll()
Returns all matching elements as a `NodeList`.
```javascript
document.querySelectorAll(".box");
```

### querySelector vs querySelectorAll

| Feature | `querySelector` | `querySelectorAll` |
| :--- | :--- | :--- |
| **Match** | First Match | All Matches |
| **Returns** | Single Element | NodeList |

*(Note: `document.querySelector()` and `document.querySelectorAll()` are the most commonly used methods in modern JavaScript and React).*

---
---

# DOM Class 2 Notes

## Part 1: DOM Tree 🌳

Before learning how to manipulate elements, we must understand how the browser represents HTML internally.

### Why Do We Need DOM?
HTML itself is just text. JavaScript cannot directly manipulate this text. Therefore, the browser converts HTML into objects.
```text
HTML → DOM → JavaScript Manipulates DOM
```

> **Important Interview Point:** HTML and DOM are not the same. HTML is raw text. DOM is the object representation the browser uses.

**Quick Revision:**

| Term | Meaning |
| :--- | :--- |
| **DOM** | Document Object Model |
| **Structure** | Tree |
| **Parent** | Contains child |
| **Child** | Nested inside parent |
| **Sibling** | Same parent |
| **Root Node** | document |

---

## Part 2: Fetching Elements in DOM 🎯

Before modifying elements, we first need to select them (DOM Selection).

### 1. getElementById()
Selects an element using its ID. IDs should be unique.
```javascript
const heading = document.getElementById("title");
```

### 2. getElementsByClassName()
Selects all elements with the same class. Returns an `HTMLCollection`.
```javascript
const items = document.getElementsByClassName("text");
```

### 3. getElementsByTagName()
Selects all elements of a specific tag. Returns an `HTMLCollection`.
```javascript
const paragraphs = document.getElementsByTagName("p");
```

### 4. querySelector()
Returns the first matching element using CSS selectors.
```javascript
const box = document.querySelector(".box");
```

### 5. querySelectorAll()
Returns all matching elements using CSS selectors as a `NodeList`.
```javascript
const boxes = document.querySelectorAll(".box");
```

**Quick Revision:**

| Method | Purpose |
| :--- | :--- |
| **getElementById()** | Select by ID |
| **getElementsByClassName()**| Select by Class |
| **getElementsByTagName()** | Select by Tag |
| **querySelector()** | First Match |
| **querySelectorAll()** | All Matches |

---

## Part 3: innerHTML 🏗️

One of the most commonly used DOM properties. Allows us to read or write HTML content inside an element.

### Example
```javascript
const box = document.getElementById("box");

// Reading
console.log(box.innerHTML);

// Updating
box.innerHTML = "<h2>Welcome</h2>";

// Adding Multiple Elements
box.innerHTML = `
  <h1>Hello</h1>
  <p>Welcome</p>
  <button>Click Me</button>
`;
```

> **Security Warning ⚠️:** Never insert untrusted user input using `innerHTML` as it can lead to XSS (Cross-Site Scripting) attacks.

**Quick Revision:**

| Feature | `innerHTML` |
| :--- | :--- |
| **Reads HTML** | Yes |
| **Writes HTML** | Yes |
| **Understands Tags**| Yes |
| **Security Risk** | Yes |

---

## Part 4: textContent 📝

`textContent` reads or updates only text and ignores HTML tags.

### Example
```javascript
const box = document.getElementById("box");

// Reading
console.log(box.textContent); // Returns plain text

// Updating
box.textContent = "Welcome to JavaScript";
```

### innerHTML vs textContent

| Feature | `innerHTML` | `textContent` |
| :--- | :--- | :--- |
| **Reads/Writes** | HTML | Text |
| **Understands Tags** | Yes | No (Ignores them) |
| **Security** | Less Secure | More Secure |

---

## Part 5: classList 🎨

`classList` is used to manage CSS classes dynamically. Heavily used in Dark Mode, Modals, Dropdowns, Accordions, and React.

### Methods
```javascript
const box = document.getElementById("box");

// 1. Add Class
box.classList.add("active", "visible");

// 2. Remove Class
box.classList.remove("active");

// 3. Toggle Class (Removes if exists, adds if it doesn't)
box.classList.toggle("dark");

// 4. Check Class (Returns true/false)
if (box.classList.contains("active")) {
  console.log("Class Found");
}
```

### Complete Example
**HTML/CSS:**
```html
<button id="btn">Toggle</button>
<div id="box">Content</div>

<style>
  .hidden { display: none; }
</style>
```

**JavaScript:**
```javascript
const btn = document.getElementById("btn");
const box = document.getElementById("box");

btn.addEventListener("click", () => {
  box.classList.toggle("hidden");
});
```

**Quick Revision:**

| Method | Purpose |
| :--- | :--- |
| **add()** | Add class |
| **remove()** | Remove class |
| **toggle()** | Add/Remove automatically |
| **contains()** | Check if class exists |

---

## Final DOM Manipulation Revision Sheet 🚀

| Topic | Key Point |
| :--- | :--- |
| **DOM Tree** | Object representation of HTML |
| **getElementById()** | Select by ID |
| **getElementsByClassName()** | Select by Class |
| **getElementsByTagName()** | Select by Tag |
| **querySelector()** | First matching element |
| **querySelectorAll()** | All matching elements |
| **innerHTML** | Reads/Writes HTML |
| **textContent** | Reads/Writes Text |
| **classList.add()** | Add class |
| **classList.remove()** | Remove class |
| **classList.toggle()** | Toggle class |
| **classList.contains()**| Check class |

### Learning Flow
```text
DOM Tree → Fetching Elements → innerHTML → textContent → classList → DOM Manipulation → Interactive Web Pages
```
*Master these topics thoroughly before moving to Events and Event Listeners, as almost every DOM project uses these concepts daily.*
