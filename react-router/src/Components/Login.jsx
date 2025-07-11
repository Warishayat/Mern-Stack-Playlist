import React from 'react'

const Login = () => {
  return (
    <div>
      <div className="main-container">
        <br />
        <label htmlFor="">Email</label>
        <br />
        <input type="text" />
        <br />
        <label htmlFor="">Password</label>
        <br />
        <input type="password" />
        <br />
        <label htmlFor="">Confrim password</label>
        <br />
        <input type="password"/>
        <input type="submit" />

      </div>
    </div>
  )
}

export default Login
