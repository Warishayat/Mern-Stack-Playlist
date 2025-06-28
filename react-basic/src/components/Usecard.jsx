import React from 'react'
import userimage from '../assets/shahrukhkhan.jpg'


const Usecard = (props) => {
  return (
    <div className='usercard'>
        <h1 id='user-title'>{props.name}</h1>
        <img src={props.img} alt="image of character" id='user-image' style={props.style}/>
        <p id='user-desc'>{props.desc}</p>
    </div>
  )
}

export default Usecard
