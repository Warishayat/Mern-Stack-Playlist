import React from 'react'
import { useContext } from 'react'
import { Context } from '../App'


const ChildC = () => {
    const cont = useContext(Context)
  return (
    <div>
        <h1>
            {cont.name}
        </h1>
        <h1>
           {cont.rollno}
        </h1>
    </div>
  )
}

export default ChildC
