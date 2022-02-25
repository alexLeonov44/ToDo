import { useSelector } from 'react-redux';
import Card from './components/Card';
import Input from './components/Input';
import './css/todo.css';

function TodoApp() {
 
  const { todos } = useSelector(({ todo }) => todo);
  return (
    <div className="todo">
      <div className="todo__cards-block">
        {todos.map((todo) => (
          <Card todoText={todo.todoText} id={todo.id} />
        ))}
      </div>
      <div className="todo__input-block">
        <Input />
      </div>
    </div>
  );
}

export default TodoApp;
