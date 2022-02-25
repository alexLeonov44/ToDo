import React from 'react';
import { useDispatch } from 'react-redux';
import '../css/card.css';
import removeBtn from '../assets/removeBtn.png'
import { removeTodo } from '../redux/actions/todoActions';

export default function Card({todoText , id}) {
  const dispatch = useDispatch();
  return (
    <div className="card">
      <div className="card__left-side">
        <span>
         {todoText}
        </span>
      </div>

      <div className="card__right-side">
          <div className='card__right-side__weather'>
            +16 C
          </div>
          <div className='card__right-side__date'>
            2 nov 2025 
            15:16
          </div>
      </div>

     <div className='card__close-btn'>
     <img src={removeBtn} style={{width:15}} alt="remove button" onClick={()=> dispatch(removeTodo(id))} ></img>
     </div>
    </div>
  );
}
