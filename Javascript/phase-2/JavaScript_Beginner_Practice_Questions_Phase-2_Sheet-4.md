# JavaScript Beginner Practice Questions (Phase - 2) — Sheet 4

## Beginner Level

### 1. Create an Object

Create an object for a student with:

- `name`
- `age`
- `course`

Then print all values.

---

### 2. Access Properties

Given:

```javascript
const car = {
  brand: "BMW",
  model: "M4",
  year: 2022
};
```

Print:

- `brand`
- `model`

using both:

- Dot notation
- Bracket notation

---

### 3. Update Object Value

Change the age of a user from `20` to `25`.

```javascript
const user = {
  name: "Anubhav",
  age: 20
};
```

---

### 4. Add New Property

Add a new property:

```javascript
isAdmin: true
```

to this object.

---

### 5. Delete Property

Remove the `password` property from the object.

```javascript
const account = {
  username: "john",
  password: "12345"
};
```

---

## Intermediate Level

### 6. Count Properties

Write a function that returns how many properties an object has.

Example:

```javascript
countProperties({ a: 1, b: 2, c: 3 });
// 3
```

**Hint:**

Use:

```javascript
Object.keys()
```

---

### 7. Loop Through Object

Print all keys and values from this object.

```javascript
const person = {
  name: "Rahul",
  age: 22,
  city: "Delhi"
};
```

**Hint:**

Use:

```javascript
for...in
```

---

### 8. Check Property Exists

Check whether `"email"` exists inside an object or not.

**Hint:**

Use the `in` operator:

```javascript
"email" in object
```

---

### 9. Merge Two Objects

Merge these two objects into one.

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
```

**Hint:**

Use the spread operator:

```javascript
...
```

---

### 10. Convert Object to Array

Convert this object into an array of key-value pairs.

```javascript
const user = {
  name: "Aman",
  age: 21
};
```

**Hint:**

Use:

```javascript
Object.entries()
```

---

## Problem-Solving Level

### 11. Find Highest Value

Find the student with the highest marks.

```javascript
const marks = {
  Anubhav: 95,
  Rahul: 82,
  Aman: 90
};
```

**Expected Output:**

```text
Anubhav
```

---

### 12. Sum of Object Values

Find the total salary.

```javascript
const salaries = {
  john: 1000,
  alex: 2000,
  bob: 1500
};
```

**Expected Output:**

```text
4500
```

---

### 13. Nested Object Access

Print:

- `city`
- `pincode`

Given:

```javascript
const user = {
  name: "Anubhav",
  address: {
    city: "Bhopal",
    pincode: 462001
  }
};
```

---

### 14. Object Method Practice

Create an object with:

- `name`
- `marks`
- A method called `getResult`

If `marks > 40`, return:

```text
Pass
```

Otherwise, return:

```text
Fail
```

---

### 15. Convert Array to Object

Convert this array into an object.

```javascript
const arr = ["name", "Anubhav", "age", 24];
```

**Expected Output:**

```javascript
{
  name: "Anubhav",
  age: 24
}
```

---

## Harder Practice Questions

### 16. Frequency Counter

Count the frequency of each character.

**Input:**

```javascript
"banana"
```

**Expected Output:**

```javascript
{
  b: 1,
  a: 3,
  n: 2
}
```

---

### 17. Group By Property

Group users by age.

```javascript
const users = [
  { name: "A", age: 20 },
  { name: "B", age: 21 },
  { name: "C", age: 20 }
];
```

**Expected Output:**

```javascript
{
  20: [
    { name: "A", age: 20 },
    { name: "C", age: 20 }
  ],
  21: [
    { name: "B", age: 21 }
  ]
}
```

---

### 18. Deep Property Check

Check whether this property exists inside an object dynamically:

```text
"user.address.city"
```

**Hint:**

Use:

```javascript
split(".")
```

---

### 19. Object Comparison

Check if two objects have the same keys and values.

**Example:**

```javascript
{ a: 1, b: 2 }
{ a: 1, b: 2 }
```

**Expected Output:**

```javascript
true
```

---

### 20. Remove Duplicate Objects

Remove duplicate objects from an array based on `id`.

**Input:**

```javascript
[
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 1, name: "A" }
]
```

**Expected Output:**

```javascript
[
  { id: 1, name: "A" },
  { id: 2, name: "B" }
]
```
