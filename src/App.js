import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWeatherData } from './api/api';
import Card from './components/Card';
import Input from './components/Input';
import TodoEmptyMessage from './components/TodoEmptyMessage';
import './css/todo.css';
import {
  setDataWeatherError,
  setIsFetchingWeatherData,
  setWeatherData,
} from './redux/actions/todoActions';

function TodoApp() {
  const dispatch = useDispatch();
  const { todos } = useSelector(({ todo }) => todo);

  const getWeatherDataHandler = () => {
    dispatch(setIsFetchingWeatherData(true));
    getWeatherData()
      .then((data) => dispatch(setWeatherData(data)))
      .catch((err) => dispatch(setDataWeatherError(err)))
      .finally(() => dispatch(setIsFetchingWeatherData(false)));
  };

  useEffect(() => {
    getWeatherDataHandler();
    const interval = setInterval(() => {
      getWeatherDataHandler();
    }, 300000);

    return () => clearTimeout(interval);
  }, []);
  return (
    <div className="todo">
      <div className="todo__cards-block">
        {!todos.length && <TodoEmptyMessage/>}
        {todos.map((todo) => (
          <Card
            key={todo.id}
            todoText={todo.todoText}
            id={todo.id}
            date={todo.date}
            weather={todo.weather}
          />
        ))}
      </div>
      <div className="todo__input-block">
        <Input />
      </div>
    </div>
  );
}

export default TodoApp;
