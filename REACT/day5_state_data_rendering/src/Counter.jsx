import { useState } from "react";

const Counter = () => {

    let [count, setCount] = useState(0);
    console.log("Counter component rendered");
    console.log(count);
    return (
        <div>
            <h1>Count is : {count}</h1>
            <button onClick={() => {
                setCount((prevCount) => prevCount + 1);
                // setCount((prevCount) => prevCount + 1);
                // setCount((prevCount) => prevCount + 1);
            }}>Increment</button>
        </div>
    )
}
export default Counter;