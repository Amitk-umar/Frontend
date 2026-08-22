# Mastering Prototypes in JavaScript

Hello friends! If you're learning JavaScript, the concept of "Prototypes" can sound a bit confusing at first, but it's actually very simple once you get the basic idea. Here is your complete guide in simple terms.

## Prototypes & `__proto__` Explained

Every object in JavaScript has a hidden internal property called `[[Prototype]]`. Browsers historically exposed this as `__proto__`. 

Think of `__proto__` as a **reference pointer** to another object (its parent). If JavaScript cannot find a property in your current object, it will say, *"Wait, let me check the parent object using its `__proto__`!"*

On the other hand, `prototype` is a special property that belongs **only to functions** (specifically constructor functions). It serves as a blueprint. When you create an object, its `__proto__` is set to the constructor's `prototype`.

**Simple Example:**
```javascript
function Car(brand) {
    this.brand = brand;
}

// Adding a method to the blueprint (prototype)
Car.prototype.startEngine = function() {
    console.log(this.brand + " engine started... Vroom vroom!");
};

const myCar = new Car("Tata Harrier");
myCar.startEngine(); // Output: Tata Harrier engine started... Vroom vroom!

// Here, myCar's __proto__ points to Car's prototype
console.log(myCar.__proto__ === Car.prototype); // true
```

## Prototype Chaining & Inheritance

What happens if you ask for a property and it's not in the object, nor in its parent? JavaScript will keep going up the `__proto__` link until it reaches `null`. This sequence of objects linked together is called the **Prototype Chain**.

Through this chain, we achieve **Prototypal Inheritance**. We don't strictly copy properties from one object to another; instead, we just link them. If the parent object gets a new property, the child gets access to it instantly!

**Chain Example:**
```javascript
const grandFather = { property: "Village Farm house" };
const father = { __proto__: grandFather, vehicle: "Bajaj Scooter" };
const son = { __proto__: father, gadget: "Smartphone" };

// JS looks for 'property' in son -> not found. 
// Goes to father -> not found. 
// Goes to grandFather -> found!
console.log(son.property); // Output: Village Farm house
```

## Updating `__proto__` (The Right Way)

Directly modifying `obj.__proto__` is actually considered **bad practice** in real-world code because it is very slow and hurts performance. 

The **best and recommended way** to set or update a prototype is by using `Object.setPrototypeOf()` for existing objects, or `Object.create()` when making a new object.

**Best Practice Example:**
```javascript
const userActions = {
    login() {
        console.log(this.name + " bhai has successfully logged in.");
    }
};

const admin = {
    name: "Amit",
    deletePost() {
        console.log("Spam post deleted.");
    }
};

// ✅ CORRECT WAY to update prototype (admin now inherits from userActions)
Object.setPrototypeOf(admin, userActions);

admin.login();      // Output: Amit bhai has successfully logged in.
admin.deletePost(); // Output: Spam post deleted.
```

### Summary of Rules
*   **Rule 1:** Use `Object.create(parent)` when you are creating a brand new object.
*   **Rule 2:** Use `Object.setPrototypeOf(child, parent)` if the child object is already created and you want to update its prototype.
*   **Rule 3:** Never use `child.__proto__ = parent` in your actual production code.
