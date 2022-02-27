import React from 'react';
import { useDispatch } from 'react-redux';
import '../css/card.css';
import removeBtn from '../assets/removeBtn.png';
import { removeTodo } from '../redux/actions/todoActions';

export default function Card({ todoText, id, date, weather }) {
  const dispatch = useDispatch();
  const temperatureDataHandler = (temp) => {
    return temp > 0 ? '+' + temp : temp;
  };

  return (
    <div className="card">
      <div className="card__left-side">
        <span>{todoText}</span>
      </div>

      <div className="card__right-side">
        <div className="card__right-side__weather-img">
          <img src={`http://openweathermap.org/img/wn/${weather?.icon}@2x.png`} alt="weather img" />
        </div>
        <div className="card__right-side__weather">{temperatureDataHandler(weather?.temp)} C</div>
        <div className="card__right-side__date">
          <div>
            <time dateTime={date.DMY}>{date.DMY}</time>
          </div>
          <div style={{ textAlign: 'center' }}>
            <time dateTime={date.time}>{date.time}</time>
          </div>
        </div>
      </div>

      <div className="card__close-btn">
        <img
          src={removeBtn}
          style={{ width: 15 }}
          alt="remove button"
          onClick={() => dispatch(removeTodo(id))}></img>
      </div>
    </div>
  );
}
