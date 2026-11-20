import React, { useContext } from 'react'
import { MyStore } from '../context/MyContext';

const Compo4 = () => {

    let st = useContext(MyStore)
    console.log(st) //me mycontext se hu

    return (
        <div>
            <h1>Compo4 inside Compo3</h1>
        </div>
    )
}

export default Compo4