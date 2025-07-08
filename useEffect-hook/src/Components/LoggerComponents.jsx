import React, { useEffect, useState } from 'react'

const LoggerComponents = () => {
    const[count,setCount] = useState(0);
    function HandleClick(){
        setCount(count+1);
    }
    useEffect(() => {
     alert("bhai update kar k gaddari karra hae tu mery sath na kar esa.");
    });
    
  return (
    <div>
        <h2>Count is {count}</h2>
        <button onClick={HandleClick}>Lets click</button>
    </div>
  )
}

export default LoggerComponents
