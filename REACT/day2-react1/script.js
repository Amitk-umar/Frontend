import React from "react";

console.log("hwlloooo");
let root = document.querySelector("#root")


const h1 = React.createElement("h1",{},"thiss is from react")


console.log(h1);
ReactDOM.createRoot(root).render(h1)