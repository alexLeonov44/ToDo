import { ADD_TODO_CARD, REMOVE_TODO_CARD, SET_DATA_WEATHER_ERROR, SET_IS_FETCHING_WEATHER_DATA, SET_WEATHER_DATA } from "../types/todoTypes";

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
  export const setWeatherData = (payload) => {
    return {
      type:SET_WEATHER_DATA,
      payload,
    };
  };
  export const setIsFetchingWeatherData = (isFetching) => {
    return {
      type:SET_IS_FETCHING_WEATHER_DATA,
      isFetching,
    };
  };
  export const setDataWeatherError = (error) => {
    return {
      type:SET_DATA_WEATHER_ERROR,
      error,
    };
  };