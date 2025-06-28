import Usecard from "./components/Usecard"
import './App.css'
import image from './assets/shahrukhkhan.jpg'
import bawakadra from "./assets/bawakadra.webp"
const App = () => {
  return (
    <div className="container">
      <Usecard name="rana" desc= "this is first description" img={image} style ={{"border-radius":"10px"}}/>
      <Usecard name="raja" desc= "this is second description" img={bawakadra}/>
      <Usecard name="zaroor" desc= "this is third description" img={image}/>
      <Usecard name='raja je' desc= "this is fourth description" img={bawakadra}/>
    </div>
  )
}

export default App
