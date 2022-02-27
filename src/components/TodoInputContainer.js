import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../css/input.css';
import { getDate } from '../helpers/getDate';
import { getTimeWithoutSeconds } from '../helpers/getTimeWithoutSeconds';
import { addTodo } from '../redux/actions/todoActions';
import loader from '../assets/XOsX.gif';
import Input from './Input';

export default function TodoInputContainer() {
  const dispatch = useDispatch();
  const [inputText, setInputText] = React.useState('');
  const [validationError, setValidationError] = React.useState(null);
  const { weatherData } = useSelector(({ todo }) => todo);
  const { isFetchingWeatherData } = useSelector(({ todo }) => todo);

  const inputHandler = (e) => {
    let { value } = e.target;

    if (value.split(' ').find((el) => el.length > 30)) {
      setInputText(value);
      setValidationError('maximum word length exceeded');
    } else if (value.length < 300) {
      validationError && setValidationError(null);
      setInputText(value);
    } else {
      setValidationError('maximum number of characters exceeded');
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
    <Input
      isFetchingWeatherData={isFetchingWeatherData}
      loader={loader}
      validationError={validationError}
      inputHandler={inputHandler}
      inputText={inputText}
      handleKeyDown={handleKeyDown}
    />
  );
}
