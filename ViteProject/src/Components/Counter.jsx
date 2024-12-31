import React, { useState } from "react";

const Counter=()=>{
    const [count,setCount]=useState(0)

    return(
        <div>
            <h2>This The Counter Component</h2>
            <p>The Value of Count is {count}.</p>
            <button onMouseOver={()=>setCount(count-1)}>Decrement</button>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onDoubleClick={()=>setCount(0)}>Reset</button>
        </div>
    )
}

export default Counter;