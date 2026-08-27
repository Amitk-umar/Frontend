# JavaScript mein Static Methods aur Properties 🚀

JavaScript mein `static` ko samajhna bahut aasan hai, bas ek real-life example ko imagine kijiye!

Maan lijiye hum ek **Car banane ki Factory** (Blueprint) ki baat kar rahe hain.
* **Class:** Ye aapki factory ya blueprint hai (jahan car design hoti hai).
* **Objects (Instances):** Ye wo actual cars hain jo factory se ban kar nikalti hain (jaise aapki Red Swift ya meri Blue Honda).

Ab dekhiye:
1. **Normal (Instance) Properties/Methods:** Har car ka apna colour hota hai, aur har car ko chalaya (drive) ja sakta hai. Ye sab **actual car** ke features hain.
2. **Static Properties/Methods:** Agar main puchu, *"Factory ne aaj tak total kitni cars banayi hain?"* ya *"Factory ka helpline number kya hai?"* — ye details kisi ek car (object) ke paas nahi hongi. Ye seedha **Factory (Class)** ki details hain. 

Jo cheezein seedha Class (Factory) se judi hoti hain, kisi individual object se nahi, unhe hum **`static`** banate hain.

---

## Code Example: Car Factory 🚗

Chaliye isko code mein dekhte hain:

```javascript
class Car {
  // 1. STATIC PROPERTY (Factory ka data)
  // Ye kisi ek car ka nahi, puri class ka data hai.
  static totalCarsMade = 0;
  static factoryLocation = "Delhi, India";

  constructor(brand, color) {
    // 2. NORMAL PROPERTIES (Actual Car ka data)
    this.brand = brand;
    this.color = color;
    
    // Jab bhi nayi car banegi, hum factory ka counter +1 kar denge
    Car.totalCarsMade++; 
  }

  // 3. NORMAL METHOD (Actual car action karegi)
  drive() {
    return `Meri ${this.color} ${this.brand} chal rahi hai! Vroom!`;
  }

  // 4. STATIC METHOD (Factory ka action)
  // Ise call karne ke liye actual car ki zarurat nahi hai.
  static getFactoryInfo() {
    return `Ye factory ${this.factoryLocation} mein hai aur abhi tak ${this.totalCarsMade} cars bana chuki hai.`;
  }
}

// --- ISTEMAAL KAISE KAREIN ---

// A. STATIC CHEEZEIN SEEDHA CLASS KE NAAM SE CALL HOTI HAIN
console.log(Car.factoryLocation); // Output: "Delhi, India"
console.log(Car.getFactoryInfo()); // Output: Ye factory Delhi, India mein hai aur abhi tak 0 cars bana chuki hai.

// B. NORMAL CHEEZEIN NAYI CAR (OBJECT) BANAKAR CALL HOTI HAIN
const meriCar = new Car("Swift", "Red");
const dostKiCar = new Car("Honda City", "Black");

console.log(meriCar.drive()); // Output: "Meri Red Swift chal rahi hai! Vroom!"

// C. CHECK KARTE HAIN TOTAL CARS KITNI BANI (STATIC PROPERTY)
console.log(Car.totalCarsMade); // Output: 2
```

### Ek Bahut Zaroori Rule ⚠️
Aap `static` method ya property ko kisi object (car) ke upar call **nahi** kar sakte.
* `Car.totalCarsMade` kaam karega (Kyunki Class ko pata hai).
* `meriCar.totalCarsMade` aapko `undefined` dega (Kyunki ek akeli car ko nahi pata factory ne total kitni cars banayi hain).

---

## Asaan Bhasha Mein Summary

| Feature | Normal (Instance) | Static |
| :--- | :--- | :--- |
| **Kiska hai?** | Object ka (jaise actual gaadi) | Class ka (jaise Factory) |
| **Call kaise karein?** | `objectName.method()` | `ClassName.method()` |
| **Kab use karein?** | Jab kaam us specific object se juda ho (jaise gadi chalana). | Jab kaam general ho, ya sabke liye common data ho (jaise total count ya helpers). |
