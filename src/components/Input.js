import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../css/input.css';
import { getDate } from '../helpers/getDate';
import { getTimeWithoutSeconds } from '../helpers/getTimeWithoutSeconds';
import { addTodo } from '../redux/actions/todoActions';
import loader from '../assets/XOsX.gif';

export default function Input() {
  const dispatch = useDispatch();
  const [inputText, setInputText] = React.useState('');
  const [validationError, setValidationError] = React.useState(null);
  const { weatherData } = useSelector(({ todo }) => todo);
  const { isFetchingWeatherData } = useSelector(({ todo }) => todo);

  const inputHandler = (e) => {
    let {value} = e.target

     if(value.split(' ').find(el=> el.length > 30)){
      setInputText(value);
      setValidationError('maximum word length exceeded')
    }else if(value.length < 300){
      validationError && setValidationError(null)
      setInputText(value);
    }else{
      setValidationError('maximum number of characters exceeded')
      setInputText(value);
    }
    
  };
  const handleKeyDown = (e) => {
    const todo = {
      id: Math.random(),
      todoText: inputText,
      weather: weatherData,
      date: {
        DMY: getDate(),
        time: getTimeWithoutSeconds(),
      },
    };
    if (e.key === 'Enter' && !validationError) {
      dispatch(addTodo(todo));
      setInputText('');
    }
  };

  return (
    <div className="input-block">
      <span style={{ marginRight: 20 }}>Add note...</span>
      <img
        style={{ width: 30, visibility: isFetchingWeatherData ? 'visible' : 'hidden' }}
        src={loader}
        alt="loader.."
      />
      <span style={{marginLeft:20,color:'red'}}>{validationError}</span>
      <input style={{borderColor:validationError && 'red'}} disabled={isFetchingWeatherData} onChange={inputHandler} value={inputText} onKeyDown={handleKeyDown} />
    </div>
  );
}
