import React from 'react';
import Contact from './Contact';
import Something,{One,Two} from './Test';

const App = () => {


    return (
        <div>
            <h1>I am App</h1>
            <Contact />
            <Something/>
            <Two/>
            <One/>
        </div>
    )
}

export default App;