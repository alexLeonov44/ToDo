import { ADD_TODO_CARD, REMOVE_TODO_CARD } from "../types/todoTypes";

const initialState = {
    todos:[]
  };
  
  export default function todoReducer(state = initialState, action) {
   
    switch (action.type) {
        case ADD_TODO_CARD:
            return {
              ...state,
              todos:[...state.todos , action.todo]
             
            };
        case REMOVE_TODO_CARD:
            return {
              ...state,
              todos:state.todos.filter(todo=> todo.id !== action.id)
             
            };
     
      default:
        return state;
    }
  }
  