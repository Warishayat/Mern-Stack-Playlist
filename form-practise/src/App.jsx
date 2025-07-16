import './App.css'
// import { useForm } from "react-hook-form"
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Home from './Components/Home';
function App() {
  
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm()

  // function onSubmit(data){
  //   console.log(data);
  // }
  return (
    <>
    {/* <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input {...register("firstName",{required:true})} />
      <br />
      <label>Gender Selection</label>
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <br />
      <label>Select Course</label>
      <select {...register("course")}>
        <option value="DSA">DSA</option>
        <option value="OOP">OOP</option>
        <option value="Python">Python</option>
        <option value="Machine Learning">Machine Learning</option>
      </select>
      <input type="submit"/>
    </form> */}

      <Router>
        <Navbar/>
        <div>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
