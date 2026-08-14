# JavaScript Beginner Practice Questions (Phase -2 ) Sheet - 3

## 1. `forEach()`

### Intermediate Question

You are given an array of prices.

Print each price with `"₹"` before it.

``` javascript
let prices = [100, 250, 399, 499];
```

### Hint

-   `forEach()` runs once for every element.
-   You don't return anything here.
-   Use `console.log()` inside it.

------------------------------------------------------------------------

### Hard Question

You are given an array of students.

``` javascript
let students = [
  { name: "Anubhav", marks: 85 },
  { name: "Rahul", marks: 42 },
  { name: "Aman", marks: 90 },
];
```

Print:

-   `"Pass"` if marks are greater than 50.
-   `"Fail"` otherwise.

**Output:**

``` text
Anubhav - Pass
Rahul - Fail
Aman - Pass
```

### Hint

-   Loop through objects using `forEach()`.
-   Use condition checking inside the loop.

------------------------------------------------------------------------

## 2. `map()`

### Intermediate Question

Convert all names into uppercase.

``` javascript
let names = ["anubhav", "rahul", "aman"];
```

**Expected Output:**

``` javascript
["ANUBHAV", "RAHUL", "AMAN"]
```

### Hint

-   `map()` creates a new array.
-   Use `.toUpperCase()`.

------------------------------------------------------------------------

### Hard Question

You are given products.

``` javascript
let products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 },
];
```

Create a new array where every product has a new property
`discountPrice`.

-   Discount = **10%**

**Expected Output:**

``` javascript
[
  { name: "Laptop", price: 50000, discountPrice: 45000 },
  { name: "Phone", price: 20000, discountPrice: 18000 }
]
```

### Hint

Return a new object from `map()`.

Formula:

``` javascript
price - (price * 10 / 100)
```

------------------------------------------------------------------------

## 3. `filter()`

### Intermediate Question

Filter all even numbers.

``` javascript
let nums = [1, 2, 3, 4, 5, 6, 7, 8];
```

**Expected Output:**

``` javascript
[2, 4, 6, 8]
```

### Hint

-   `filter()` keeps elements when the condition is `true`.

------------------------------------------------------------------------

### Hard Question

You are given users.

``` javascript
let users = [
  { name: "Anubhav", active: true },
  { name: "Rahul", active: false },
  { name: "Aman", active: true },
];
```

Return only active users.

### Hint

-   Check `active === true`.
-   Return the condition directly.

------------------------------------------------------------------------

## 4. `reduce()`

### Intermediate Question

Find the total sum of the array.

``` javascript
let nums = [10, 20, 30, 40];
```

**Expected Output:**

``` text
100
```

### Hint

-   `reduce()` needs:
    -   accumulator
    -   current value

------------------------------------------------------------------------

### Hard Question

Count the frequency of elements.

``` javascript
let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
```

**Expected Output:**

``` javascript
{
  apple: 3,
  banana: 2,
  orange: 1
}
```

### Hint

-   Create an empty object `{}` as the initial value.
-   Increase the count if the key already exists.

------------------------------------------------------------------------

## 5. `find()`

### Intermediate Question

Find the first number greater than `50`.

``` javascript
let nums = [20, 35, 60, 80];
```

**Expected Output:**

``` text
60
```

### Hint

-   `find()` returns the first matching element.

------------------------------------------------------------------------

### Hard Question

Find a user with the username `"admin"`.

``` javascript
let users = [
  { username: "rahul" },
  { username: "admin" },
  { username: "aman" }
];
```

### Hint

``` javascript
user.username === "admin"
```

------------------------------------------------------------------------

## 6. `findIndex()`

### Intermediate Question

Find the index of number `90`.

``` javascript
let nums = [10, 40, 90, 50];
```

### Hint

-   `findIndex()` returns the index number.

------------------------------------------------------------------------

### Hard Question

Find the index of the first failed student.

``` javascript
let students = [
  { name: "A", marks: 90 },
  { name: "B", marks: 30 },
  { name: "C", marks: 70 },
];
```

**Condition:**

-   Failed if `marks < 40`

### Hint

-   Use the condition directly inside the callback.

------------------------------------------------------------------------

## 7. `some()`

### Intermediate Question

Check if any number is negative.

``` javascript
let nums = [10, 20, -5, 40];
```

**Expected Output:**

``` text
true
```

### Hint

-   `some()` returns `true` if at least one condition matches.

------------------------------------------------------------------------

### Hard Question

Check if any product is out of stock.

``` javascript
let products = [
  { name: "Laptop", stock: 5 },
  { name: "Phone", stock: 0 },
];
```

### Hint

``` javascript
stock === 0
```

------------------------------------------------------------------------

## 8. `every()`

### Intermediate Question

Check if all numbers are positive.

``` javascript
let nums = [10, 20, 30, 40];
```

**Expected Output:**

``` text
true
```

### Hint

-   `every()` checks all elements.

------------------------------------------------------------------------

### Hard Question

Check if all students passed.

``` javascript
let students = [
  { name: "A", marks: 80 },
  { name: "B", marks: 45 },
  { name: "C", marks: 60 },
];
```

**Passing Marks:**

``` text
40
```

### Hint

``` javascript
marks >= 40
```
