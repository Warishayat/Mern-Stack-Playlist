import { useState } from 'react'
import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import { decrement, increment ,incrementByAmount,reset} from './features/counter/counterSlice';


// Action ko execute karny k liye dispatch karna parata hae.
// value ko acess karny k liye creatslice se nikalny k liye hum useSelector use kar ty hae.
function App() {
  
  const count = useSelector((state)=>state.counter.value);
  const dispath = useDispatch();
  const[amount,setAmount] = useState(0);
  function handleIcrementClick(){
    // action ko dispatch karna chahta hu
    dispath(increment());
  }
  function handleDecrementClick(){
    dispath(decrement());
  }
  function resetCount(){
    dispath(reset());
  }
  function IncrementClick(){
      dispath(incrementByAmount(amount));
  }

  return (
    
    <>
      <h2>Lets make increment Application</h2>
      <div className="main-caontainer">
        <button onClick={handleIcrementClick}> + </button>
        <p>Count is:{count}</p>
        <button onClick={handleDecrementClick}> - </button>
        <br />
        <input type="number" value={amount} placeholder='amount' onChange={(e)=>setAmount(e.target.value)}/>
        <br />
        <button onClick={IncrementClick}>Inc By Amount</button>
      </div>
      <br />
      <br />
      <h2>Lets write the step of redux </h2>
      <ul>
        <li>#1: Creat Store</li>
        <li>#2: Wrape the store with Provider</li>
        <li>#3: Creat the Slice</li>
        <li>#4: Make Ui For operation</li>
        <li>#5: useSelector to update the data.</li>
        <li>#6: useDispatch to update the logic of the functions</li>
      </ul>
    </>
  )
}

export default App
