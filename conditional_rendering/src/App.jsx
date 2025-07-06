import { useState } from 'react'
import './App.css'
import Dark from './Components/Dark'
import Light from './Components/Light'

function App() {
  const [theme, setTheme] = useState(true);
  return (
    <>
      {theme ? <Light/> : <Dark/> }
      <button onClick={()=>setTheme(!theme)} className='btn-toggle'>Toggle Theme</button>
    </>
  )
}
export default App
