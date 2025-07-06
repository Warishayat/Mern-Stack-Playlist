import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/Login';
import Logout from './Components/Logout';

function App() {
  // const [show,setShow] = useState(true);
  // const [login,setLogin] = useState(true);
  // const [age,setAge] = useState(0);
  // const [result , setResult] = useState("");
  const [role , setRole] = useState(""); 

  // function handleResult(){
  //   if(Number(age)>18){
  //     setResult("you are eligible");
  //   }
  //   else{
  //     setResult("You are not eligible for the vote");
  //   }
  // };

  return (
    <>
      {/* <input type="number" value={age} onChange={(e)=>setAge(e.target.value)} placeholder='Enter your age'/>
      <button onClick={handleResult}>Check</button>
      {result && <p>{result}</p>} */}
      {/* {login ? <Login name="waris"/>
      :
      <Logout name="unknow"/>
      }
      <button onClick={()=>{setLogin(!login)}}>Toggle</button> */}
      {/* /* task:1
      {show ? <h1>This text is visibel </h1> : <></>}
      <button onClick={()=>{setShow(!show)}}>Toggle Text</button> */}

      <select onClick={(e)=>setRole(e.target.value)} defaultValue="">
        <option value=" " disabled>select role</option>
        <option value="user">user</option>
        <option value="student">student</option>
        <option value="teacher">teacher</option>
        <option value="admin">admin</option>
      </select>
      {
        role === "admin" && <p>Welcome to admin page</p>
      }
      {
        role === "teacher" && <p>Welcome to teacher page</p>
      }
      {
        role === "user" && <p>Welcome to user page</p>
      }
      {
        role === "student" && <p>Welcome to student page</p>
      }
    </>
  )
}

export default App
