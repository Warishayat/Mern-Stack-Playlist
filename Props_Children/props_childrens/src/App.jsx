import { useState } from 'react'
import './App.css'
import Button from './Components/Button'
import Card from './Components/Card'

function App() {
  const [count,setCount] = useState(0);

  function handleClick(){
    setCount(count+1);
  }
  return (
    <div>
    <Card  name = "waris hayat abbasi">
      <h1>This is waris hayat abbasi from care cloud mtbc islamabad</h1>
      <p>i am writing this paragraph to express the feeling</p>
    </Card>
    <Card name = "waris hayat abbasi">
      <h1>This is waris hayat abbasi from care cloud mtbc islamabad</h1>
      <p>i am writing this paragraph to express the feeling</p>
    </Card>
    <Button incrementCount = {handleClick} text="Click Me">
      <h1>your count is {count}</h1>
    </Button>
    </div>
  )
}

export default App
