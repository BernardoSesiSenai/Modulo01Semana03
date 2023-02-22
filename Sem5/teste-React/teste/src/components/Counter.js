import React from 'react';
import { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const handIncrement = () => {
        setCounter(counter + 1);
    }
    const handDecrement = () => {
        setCounter(counter - 1);
    }
    return (
    <div>
        <spam> {counter} </spam>
        <br/>
        <button onClick={handIncrement}>+</button>
        <button onClick={handDecrement}>-</button>
    </div>
  )
}

export default Counter;