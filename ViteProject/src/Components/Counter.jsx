import React, { useState } from "react";
import '../assets/css/Counter.css'

const Counter=()=>{
    const [count,setCount]=useState(0)

    return(
        <div><center>
            <h2>This The Counter Component</h2>
            <p>The Value of Count is {count}.</p>
            <button onMouseOver={()=>setCount(count-1)}>Decrement</button>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onDoubleClick={()=>setCount(0)}>Reset</button></center>
        </div>
    )
}

export default Counter;