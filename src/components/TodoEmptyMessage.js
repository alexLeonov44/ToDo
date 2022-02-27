import React from 'react'
import duck from '../assets/XOsX.gif';
import '../css/todo-empty-message.css';
export default function TodoEmptyMessage() {
  return (
      <div className='todo_empty_message'>
      <img src={duck} style={{width:150}}  alt="duck imag"/>
      <h2>no notes yet..</h2>
      </div>
   
  )
}
