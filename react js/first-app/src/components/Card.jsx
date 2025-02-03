import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div className='card'>
        <img src="https://images.unsplash.com/photo-1734966901441-ac6c1fff1fd2?q=80&w=2917&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" width="200" />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  )
}

export default Card
 