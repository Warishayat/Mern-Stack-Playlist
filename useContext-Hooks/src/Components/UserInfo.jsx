import React from 'react'
import { useContext } from 'react'
import { Context } from '../App'

const UserInfo = () => {
    const useCOnt = useContext(Context)
  return (
    <div>
      <div className="container">
        {useCOnt ?
        <h1>Welcome to Home Page {useCOnt.name}</h1>:
        <h2>We Dont know about your personlaity</h2>}
      </div>
    </div>
  )
}

export default UserInfo
