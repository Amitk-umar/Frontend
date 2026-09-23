// let obj = {
//     name: "Raghav",
//     age: 24,
//     address: "kuthu region , Himachal",
//     company: "Amazone"
// };

// let fn = ({name,company})=>{
// console.log(name,company);
// }
// fn(obj);




// let a = 990;
// let print = () => {
//     console.log(a);
// };
// let ab = () => {
//     let a = 80;
//     print();
// };

// ab();







// console.log(React);
//Real DOM

// let h1 = document.createElement("h1");
// h1.textContent = "react developement series";
// document.body.append(h1);

// console.log("Real dom ->", h1);




//React DOM ,Virtual DOM 

let realDomElem = document.querySelector("#root");
let virtualDom = React.createElement("div", {}, [
    React.createElement(
        "h1",
        { key: "heading1" },
        React.createElement(
            "span",
            {},
            "i am under span in h1 element"
        )
    ),

    React.createElement(
        "h2",
        { key: "heading2" },
        React.createElement(
            "span",
            {},
            "i am under span in h2"
        )
    )
]);

console.log("Virtual dom ->", virtualDom);


let rootOfReact = ReactDOM.createRoot(realDomElem).render(virtualDom);


// import { a, sum } from "./main.js";

// console.log(sum(40, 50));
// console.log(a);