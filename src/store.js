import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';


// Create your reducers here:
const feelings = (state= 0, action) => {
  if(action.type === 'INCREASE_FEELINGS') {
    return state + 1;
  }else if (action.type === 'DECREASE_FEELINGS') {
    return state -1;
  } 
  return state;
}
const understanding = (state= 0, action) => {
  if(action.type === 'INCREASE_UNDERSTANDING') {
    return state + 1;
  }else if (action.type === 'DECREASE_UNDERSTANDING') {
    return state -1;
  }
  return state;
}
const support = (state= 0, action) => {
  if(action.type === 'INCREASE_SUPPORT') {
    return state + 1;
  }else if (action.type === 'DECREASE_SUPPORT') {
    return state -1;
  }
  return state;
}
const comments = (state = [], action) => {
  if(action.type === 'SET_COMMENT') {
    return state, action.payload;
  }
  return state;
}
const submit = (state = [], action) =>{
   if(action.type === 'SUBMIT') {
    console.log('submit is successful');
    return [];
   }
   return state;
};




export const store = () => createStore(
  combineReducers({
    // Put your reducers into the redux store here:
feelings,
understanding,
support,
comments,
submit

    
  }),
  applyMiddleware(logger)
)