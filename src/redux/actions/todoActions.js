import { ADD_TODO_CARD, REMOVE_TODO_CARD } from "../types/todoTypes";

  export const addTodo = (todo) => {
    return {
      type:ADD_TODO_CARD,
      todo,
    };
  };
  export const removeTodo = (id) => {
    return {
      type:REMOVE_TODO_CARD,
      id,
    };
  };