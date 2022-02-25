import { combineReducers, configureStore } from '@reduxjs/toolkit'
import todo from './reducers/todoReducer'


let rootReducer = combineReducers({todo})

const store = configureStore({ reducer: rootReducer })

store.subscribe(()=> console.log('change'))
window.store = store
export default store