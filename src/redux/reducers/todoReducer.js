import { ADD_TODO_CARD, REMOVE_TODO_CARD, SET_WEATHER_DATA ,SET_DATA_WEATHER_ERROR, SET_IS_FETCHING_WEATHER_DATA } from '../types/todoTypes';

const initialState = {
  todos: [],
  weatherData: null,
  isFetchingWeatherData: false,
  weatherErrorData: null,
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO_CARD:
      return {
        ...state,
        todos: [...state.todos, action.todo],
      };
    case REMOVE_TODO_CARD:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    case SET_WEATHER_DATA:
      return {
        ...state,
        weatherData: { ...action.payload },
        weatherErrorData:null
      };
    case SET_IS_FETCHING_WEATHER_DATA:
      return {
        ...state,
        isFetchingWeatherData: action.isFetching,
      };
    case SET_DATA_WEATHER_ERROR:
      return {
        ...state,
        weatherErrorData: { ...action.error },
      };

    default:
      return state;
  }
}
