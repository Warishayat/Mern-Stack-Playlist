import { useState } from 'react'
import './App.css'
import Para from './Components/Para';

function App() {
  const[lastkey,setValue] = useState('');
  // const [color,setColor] = useState("red");
  // const [visible,setVisible] = useState(true);
  // function HandleClick(){
  //   setVisible(!visible);
  // }
  // const [count ,setCount] = useState(0);
  // function handleClick(){
  //   alert("ary bahiya ku click kia maray ko chehaar ra hae adhi rat ko hmka")
  // }
    // function handleChange (e){
    //       console.log("the value is eterd is:",e.target.value);
    //     }
    // function handleSubmit(e){
    //   e.preventDefault();
    //   //i am writing my custom behaviour writ down
    //   alert(e.target.value);
    // }
  return (
    
    <>
    {/* <div className="container">
      <button onClick={handleClick}>Click Me</button>
      <br />
      <p onMouseOver={()=>{alert("kia ray ku hil ra hae zyada")}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint corrupti assumenda vitae laudantium numquam, voluptate recusandae quod necessitatibus. Quibusdam in facere repellendus aut molestias adipisci odit deserunt ipsam veritatis aliquid.</p>
   
    </div> */}
    {/* <form action="" onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange}/>
      <button type='submit'>Submit</button>
    </form> */}
    {/* <button onClick={()=>{alert("button click hua hae")}}>Click Me</button> */}

      {/* <p>You clicked the button {count} time</p>
      <button onClick={()=>{
        setCount(count + 1);
      }}>Click Me</button> */}
      {/* <form action="" onSubmit={(e)=>{
        e.preventDefault();
        alert(`hello ${value}`)
      }}>
        <input type="text" onChange={(e)=>setValue(e.target.value)}/>
        <input type="submit"/>
      </form>
      <p>User enterd {value}</p> */}
      {/* <button onClick={HandleClick}>Toggle Para</button>
      {visible ? <Para/> : <p></p> } */}
       {/* <div>
        <button onClick={()=>setColor{b}}>Red</button>
        <button>Green</button>
        <button>Blue</button>
        <div className="conatainer">
          Hello je kia hal hae
        </div>
       </div> */}
       <input type="text" onKeyDown={(e)=>setValue(e.key)}/>
       <p>{lastkey}</p>
       </>
  )
}

export default App
