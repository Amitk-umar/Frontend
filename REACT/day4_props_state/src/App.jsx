import React, { useState } from 'react';
// import Contact from './Contact';
// import Something, { One, Two } from './Test';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import Footer from './components/Footer';

const App = () => {
    // Something();
    // Two();
    // One();

    let [count, setCount] = useState(0)

    let [flag, setFlag] = useState(false)
    console.log(count)
    console.log(flag)

    return (
        <div>
            {/* <h1>I am App</h1> */}
            {/* <Contact /> */}
            {/* <Something/>
            <Two/>
            <One/> */}

            {/* <Navbar />
            <Hero />
            <Footer /> */}

            <h1>Count is : {count}</h1>
            <button onClick={() => { setCount(count + 1) }}>Increament</button>

            <button onClick={() => {
                setFlag(true);
            }}>change boolean</button>

        </div>
    )
}

export default App;