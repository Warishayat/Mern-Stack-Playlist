import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {
    const [count,setCount] = useState(0);
    const Submission = () =>{
        setCount(count+1);
    }
    const unSubmit = () =>{
        setCount(count-1);
    }
    const resetCount = () =>{
        setCount(0);
    }
  return (
    <div className='container'>
      <h1>You have clicked {count} time</h1>
      <button id='btn' onClick={Submission}>Increment Me</button>
      <button id="decrement" onClick={unSubmit}>Decrement Me</button>
      <button id="reset" onClick={resetCount}>Reset Count</button>
    </div>
  )
}
export default Counter
