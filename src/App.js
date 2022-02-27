import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWeatherData } from './api/api';
import Card from './components/Card';
import TodoInputContainer from './components/TodoInputContainer';
import TodoEmptyMessage from './components/TodoEmptyMessage';
import './css/todo.css';
import {
  addNotes,
  addTodo,
  setDataWeatherError,
  setIsFetchingWeatherData,
  setWeatherData,
} from './redux/actions/todoActions';
import { setNotesInLocalStorage } from './helpers/setNotesInLocalStorage';

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
    getNotesFromLocalStorage();
    getWeatherDataHandler();
    const interval = setInterval(() => {
      getWeatherDataHandler();
    }, 300000);

    return () => clearTimeout(interval);
  }, []);

  useEffect(() => {
    if (Array.isArray(todos)) {
      setNotesInLocalStorage(todos);
    }
  }, [todos]);

  const getNotesFromLocalStorage = () => {
    const notes = JSON.parse(localStorage.getItem('duckNote'));
    if (Array.isArray(notes) && notes.length) {
      dispatch(addNotes(notes));
    }
  };

  return (
    <div className="todo">
      <div className="todo__cards-block">
        {!todos.length && <TodoEmptyMessage />}
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
        <TodoInputContainer />
      </div>
    </div>
  );
}

export default TodoApp;
