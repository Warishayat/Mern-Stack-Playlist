import { useState } from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState("");        
  const [tasks, setTasks] = useState([]);
  function handleChange(e){
      setTask(e.target.value);
  }
  function handleSubmit(){
      setTasks([...tasks , task]);
  }
  return (
    <>
      <div className="container">
        <h1 className="title">TODO-List-App</h1>
        <br />
        <input type="text" onChange={handleChange} className='text-input'/>
        <button onClick={handleSubmit} className='btn'>Add Task</button>

        <br />
        <br />
        <p>
        {tasks.map((value, index) => (
        <p key={index}>{value}</p>
        ))}
      </p>
      </div>
      
    </>
  )
}

export default App
