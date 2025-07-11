import React from 'react'
import { useParams } from 'react-router-dom'

const ParaComponents = () => {
    const {id} = useParams();
  return (
    <div>
      <h1>this is paramter components which is called url paramater or route parameter</h1>
      Ohhhhhh name is {id}
    </div>
  )
}

export default ParaComponents
