# JavaScript Classes and Constructors

In JavaScript, a **class** is a blueprint for creating objects. It encapsulates data (properties) and behavior (methods) into a single, reusable structure. 

A **constructor** is a special method inside that class that gets called automatically when you create a new instance (a new object) from the class. It is primarily used to set up the object's initial properties.

## Basic Syntax

Here is how a class and its constructor work together:

```javascript
// 1. Defining the Class
class Car {
  
  // 2. The Constructor
  constructor(make, model, year) {
    this.make = make;   // 'this' refers to the specific object being created
    this.model = model;
    this.year = year;
  }

  // 3. A Class Method (Behavior)
  startEngine() {
    console.log(`The ${this.year} ${this.make} ${this.model}'s engine is running.`);
  }
}

// 4. Creating Instances using the 'new' keyword
const myCar = new Car("Toyota", "Corolla", 2024);
const yourCar = new Car("Honda", "Civic", 2023);

myCar.startEngine(); // Output: The 2024 Toyota Corolla's engine is running.
```

## Key Concepts

* **The `class` keyword:** Used to declare a class. By convention, class names always start with a capital letter (PascalCase).
* **The `constructor()` method:** 
    * There can only be **one** method named `constructor` in a class.
    * It runs exactly once per object creation.
    * If you don't define a constructor, JavaScript automatically adds an empty, invisible one for you.
* **The `this` keyword:** Inside the constructor, `this` refers to the new object being created. `this.make = make` means "set the 'make' property of this specific new object to whatever value was passed in."
* **The `new` keyword:** You must use `new` when calling a class. It tells JavaScript to create a fresh, empty object, run the constructor to populate it, and then return the finished object.

## Class Inheritance

Classes can also inherit from other classes using the `extends` keyword, which allows you to create specialized versions of existing classes.

```javascript
class ElectricCar extends Car {
  constructor(make, model, year, batteryLife) {
    // Call the parent class constructor using 'super'
    super(make, model, year); 
    this.batteryLife = batteryLife;
  }

  charge() {
    console.log(`Charging the ${this.make}... Battery at 100%.`);
  }
}

const myEv = new ElectricCar("Tesla", "Model 3", 2024, "300 miles");
myEv.startEngine(); // Inherited method
myEv.charge();      // Own method
```
