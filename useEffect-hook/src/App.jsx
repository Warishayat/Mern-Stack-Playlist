// import { useEffect, useState } from 'react'
import './App.css'
import DataFetcer from './Components/DataFetcer';
// import LoggerComponents from './Components/LoggerComponents';
// import TimerFunction from './Components/TimerFunction';

function App() {
  // const [count,setCount] = useState(0);
  // const [total,setTotal] = useState(0);
  // first is sideEffect function
  // second is clean up function -> unmount from ui 
  // comma seprated Dependency list  age koi b value update huti hae tu sideEffext ka logic run karna start kr de ga
  
  // Variation 1: Run of every render

  // useEffect(()=>{
  //   alert ("i will werk on each render.")
  // })
  

  // variation 2: That will run only on first rerender.

    // useEffect(() => {
    // alert("mae sirf pehly render par chluga boss warna dikkat hojayegi")
    // }, [])


  // Variation 3: updated with some state vraible count k update huny k bad mae chlta hae par rerender huny se phly chlta hae.
 
  // useEffect(() => {
  //   alert("i will run on erey time when counter is get updated.")
  // }, [count])
  

  //variatoin 4:  Multiple Dependencies

  // useEffect(() => {
  //   alert("bhai sab m tu kabhi b chal hojauag jab apka ka ib b state variable change hoga smjyyyy!!!!!!")
  // }, [count,total])
  

  // Variation no:5 Lets add a clean up function
  // useEffect(() => {
  //   alert("count is updated");
  //   return () => {
  //     alert("count is unmounted from the ui")
  //     // supoose 1 gya tu 2 aya 2 gya tu tesra aya ik k bad dusra update hoga tu phly wala unmount hojayega
  //   }
  // }, [count])
  

  return (
    <>
      {/* <div className="main-container">
        <h1>This is all about useEffect Hooks</h1>
        <h2>Counr is: {count}</h2>
        <h2>Total is: {total}</h2>
        <button onClick={()=>{setCount(count+1)}}>Click Me</button>
        <button onClick={()=>{setTotal(total+1)}}>Update Count</button>
      </div> */}
      {/* <LoggerComponents/> */}
      {/* <TimerFunction/> */}
      <DataFetcer/>
    </>
  )
}

export default App