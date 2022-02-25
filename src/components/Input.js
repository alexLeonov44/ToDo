import React from 'react';
import { useDispatch } from 'react-redux';
import '../css/input.css';
import { addTodo } from '../redux/actions/todoActions';

export default function Input() {
  const dispatch = useDispatch();
  const [inputText, setInputText] = React.useState('');
  const inputHandler = (e) => {
    setInputText(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
     dispatch(addTodo({id:Math.random() * 10000 , todoText:inputText}))
      setInputText('');
    }
  };
  return (
    <div className="input-block">
      <p>Add note...</p>
      <input onChange={inputHandler} value={inputText} onKeyDown={handleKeyDown} />
    </div>
  );
}
