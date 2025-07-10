import { useState } from 'react'
import './App.css'
import { createContext } from 'react'
import ChildA from './Components/ChildA'
import Dashboard from './Components/Dashboard';

// Step1: Creat context
const Context = createContext();
// Step2: Wrap inside the provider
// Step3:  pass value
// Step4: Consume value
 
function App() {
  // const [name, setName] = useState({name:"waris",rollno:"sp21368"})
  const [login , setLogin] = useState({name:"waris",pass:12323323});
  return (
    <>
      <div>
        <Context.Provider value={login}>
          {/* <ChildA/> */}
          <Dashboard/>
        </Context.Provider>
      </div>
    </>
  )
}
export default App
export {Context}
